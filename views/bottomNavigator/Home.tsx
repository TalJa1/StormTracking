/* eslint-disable react-native/no-inline-styles */
import {
  Animated,
  Image,
  Modal,
  PanResponder,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useCallback, useRef, useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import useStatusBar from '../../services/useStatusBarCustom';
import {
  backIcon,
  bookIcon,
  menuIcon,
  nextIcon,
  popUpCancelIcon,
} from '../../assets/svgXml';
import {vh, vw} from '../../services/styleSheet';
import Mapbox from '@rnmapbox/maps';
import {
  DetailInforInterface,
  HomeHeader,
  MapInterface,
  MapLocation,
} from '../../services/typeProps';
import {useFocusEffect, useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {loadData, saveData} from '../../services/storage';
import {LocationData} from '../../services/renderData';
import PopUpComponent from '../../components/home/PopUpComponent';
import * as turf from '@turf/turf';

Mapbox.setAccessToken(
  'pk.eyJ1IjoidGFsamExIiwiYSI6ImNtMWFpZ2RvZDAxdzcyc3M2M2xjcW1tanMifQ.uTGpezucjuEe8CrzzHkR1w',
);

const Home = () => {
  useStatusBar('white');
  const [listLocation, setListLocation] = useState<MapLocation[]>(LocationData);
  const [renderIndex, setRenderIndex] = useState<number>(0);
  const [modalVisible, setModalVisible] = useState(false);

  const fetchData = async () => {
    try {
      const data = await loadData<MapLocation[]>('listLocationStorage');
      setListLocation(data);
    } catch (error) {
      saveData('listLocationStorage', LocationData);
    }
  };

  useFocusEffect(
    useCallback(() => {
      fetchData();
    }, []),
  );

  return (
    <SafeAreaView style={styles.container}>
      <Header setModalVisible={setModalVisible} />
      <MapRender
        tabLocation={listLocation[renderIndex]}
        setRenderIndex={setRenderIndex}
        maxIndex={listLocation.length}
      />
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}>
        <View style={styles.modalOverlay}>
          <View style={styles.modalContainer}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                borderBottomWidth: 1,
                borderBottomColor: '#E4E7EC',
                paddingBottom: vh(1),
              }}>
              <Text style={styles.popUpText}>Các cấp độ của bão</Text>
              <TouchableOpacity onPress={() => setModalVisible(false)}>
                {popUpCancelIcon(vw(7), vw(7))}
              </TouchableOpacity>
            </View>
            <PopUpComponent />
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

const MapRender: React.FC<MapInterface> = ({
  tabLocation,
  maxIndex,
  setRenderIndex,
}) => {
  const animatedHeight = useRef(new Animated.Value(vh(22) < 170 ? 170 : vh(22))).current;

  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: () => true,
      onPanResponderMove: (evt, gestureState) => {
        if (gestureState.dy > 0) {
          // Sliding down
          Animated.timing(animatedHeight, {
            toValue: vh(10),
            duration: 300,
            useNativeDriver: false,
          }).start();
        } else {
          // Sliding up
          Animated.timing(animatedHeight, {
            toValue: vh(22) < 170 ? 170 : vh(22),
            duration: 300,
            useNativeDriver: false,
          }).start();
        }
      },
    }),
  ).current;

  const handleBackPress = () => {
    setRenderIndex(prevIndex => (prevIndex > 0 ? prevIndex - 1 : maxIndex - 1));
  };

  const handleNextPress = () => {
    setRenderIndex(prevIndex => (prevIndex < maxIndex - 1 ? prevIndex + 1 : 0));
  };

  const stormPath = [
    {id: 'e5', coordinates: [113.0, 17.5]}, // Moved significantly further south and east
    {id: 'e4', coordinates: [111.0, 17.5]}, // Increased space between e5 and e3
    {id: 'e3', coordinates: [109.0, 18.5]}, // More distance between e4 and e2
    {id: 'e2', coordinates: [108.0, 19.2]}, // Larger space from e3 to e1
    {id: 'e1', coordinates: [107.2, 20.0]}, // Near northern Vietnam (unchanged)
  ];

  const lineString: GeoJSON.Feature<GeoJSON.LineString> = {
    type: 'Feature',
    geometry: {
      type: 'LineString',
      coordinates: stormPath.map(point => point.coordinates),
    },
    properties: {},
  };

  const curvedLine = turf.bezierSpline(lineString);

  return (
    <View style={styles.mapContainer}>
      <View style={styles.locationContainer}>
        <TouchableOpacity style={styles.mapTabBtn} onPress={handleBackPress}>
          {backIcon(vw(7), vw(7))}
        </TouchableOpacity>
        <Text style={styles.mapTabTxt}>{tabLocation.name}</Text>
        <TouchableOpacity style={styles.mapTabBtn} onPress={handleNextPress}>
          {nextIcon(vw(7), vw(7))}
        </TouchableOpacity>
      </View>
      <Mapbox.MapView style={styles.map}>
      <Mapbox.Camera
        zoomLevel={5}
        centerCoordinate={[tabLocation.long, tabLocation.lad]}
      />
      <Mapbox.Images
        images={{
          e5: require('../../assets/home/e5.png'),
          e4: require('../../assets/home/e4.png'),
          e3: require('../../assets/home/e3.png'),
          e2: require('../../assets/home/e2.png'),
          e1: require('../../assets/home/e1.png'),
        }}
      />
      <Mapbox.ShapeSource id="lineSource" shape={curvedLine}>
        <Mapbox.LineLayer
          id="lineLayer"
          style={{
            lineColor: '#FFFFFF99', // Set the line color
            lineWidth: 10, // Set the line width
            lineOpacity: 0.5, // Set the line opacity
          }}
        />
      </Mapbox.ShapeSource>
      {stormPath.map(point => (
        <Mapbox.ShapeSource
          key={point.id}
          id={point.id}
          shape={{
            type: 'Feature',
            geometry: {
              type: 'Point',
              coordinates: point.coordinates,
            },
            properties: {},
          }}>
          <Mapbox.SymbolLayer
            id={`${point.id}-layer`}
            style={{
              iconImage: point.id,
              iconSize: 1, // Adjust the size as needed
            }}
          />
        </Mapbox.ShapeSource>
      ))}
    </Mapbox.MapView>
      <Animated.View
        style={[styles.inforContainer, {height: animatedHeight}]}
        {...panResponder.panHandlers}>
        <View style={styles.sliderBar} />
        <View>
          <Text style={styles.inforTitle}>Dự báo bão cấp 3</Text>
          <Text style={styles.inforSub}>
            Cơn bão Yagi đang di chuyển hướng Tây Bắc với tốc độ gió 115 km/h
            (cấp 3), áp suất tại tâm bão 978 hPa.{' '}
            <Text style={styles.inforSubBold}>Cảnh báo</Text> Người dân ven biển
            cần chuẩn bị di tản và theo dõi các hướng dẫn từ cơ quan chức năng.
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            width: '100%',
            justifyContent: 'space-between',
          }}>
          <DetailInforRender
            icon={require('../../assets/home/wind.png')}
            title="Tốc độ gió"
            value="111-130 km/h, giật tới 140 km/h"
          />
          <DetailInforRender
            icon={require('../../assets/home/rain.png')}
            title="Lượng mưa"
            value="100-150mm/24h, nguy cơ lũ lụt"
          />
          <DetailInforRender
            icon={require('../../assets/home/humidity.png')}
            title="Độ ẩm"
            value="75%, thúc đẩy mưa lớn và dông"
          />
        </View>
      </Animated.View>
    </View>
  );
};

const DetailInforRender: React.FC<DetailInforInterface> = ({
  icon,
  title,
  value,
}) => {
  return (
    <View style={{width: '32%'}}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <Image style={styles.detailInforImg} source={icon} />
        <Text style={styles.detailInfoTitle}>{title}</Text>
      </View>
      <Text style={styles.detailInfodata}>{value}</Text>
    </View>
  );
};

const Header: React.FC<HomeHeader> = ({setModalVisible}) => {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  return (
    <View style={styles.headercontainer}>
      <TouchableOpacity onPress={() => setModalVisible(true)}>
        {bookIcon(vw(7), vw(7), '#98A2B3')}
      </TouchableOpacity>
      <Text style={{color: '#4E5BA6', fontSize: 20, fontWeight: '600'}}>
        Storm Forecast
      </Text>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('ListLocation');
        }}>
        {menuIcon(vw(7), vw(7), '#98A2B3')}
      </TouchableOpacity>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: 'white'},
  headercontainer: {
    justifyContent: 'space-around',
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: vh(2),
  },
  mapContainer: {
    flex: 1,
    overflow: 'hidden',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  map: {
    flex: 1,
  },
  locationContainer: {
    zIndex: 2,
    position: 'absolute',
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#fbfbfb',
    opacity: 0.9,
    alignItems: 'center',
    paddingVertical: vh(2),
    top: vh(1),
    left: vw(5),
    right: vw(5),
    borderRadius: 8,
    paddingHorizontal: vw(5),
  },
  mapTabTxt: {
    color: '#4E5BA6',
    fontSize: 20,
    fontWeight: '600',
  },
  mapTabBtn: {
    backgroundColor: 'white',
    padding: vw(1),
    borderRadius: vw(20),
  },
  inforContainer: {
    position: 'absolute',
    bottom: vh(10),
    left: vw(5),
    right: vw(5),
    backgroundColor: 'white',
    opacity: 0.9,
    paddingHorizontal: vw(5),
    paddingVertical: vh(1),
    borderRadius: 12,
    rowGap: vh(1),
    overflow: 'hidden',
  },
  inforTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#4E5BA6',
  },
  sliderBar: {
    backgroundColor: '#98A2B3',
    height: vw(1),
    width: '20%',
    borderRadius: vw(1),
    alignSelf: 'center',
  },
  inforSub: {
    color: '#475467',
    fontSize: 12,
    fontWeight: '400',
  },
  inforSubBold: {
    fontWeight: '700',
    fontSize: 12,
    color: '#F04438',
  },
  detailInfoTitle: {
    color: '#4E5BA6',
    fontSize: 12,
    fontWeight: '600',
  },
  detailInfodata: {
    color: '#475467',
    fontSize: 12,
    fontWeight: '400',
  },
  detailInforImg: {
    width: vw(5),
    height: vw(5),
    resizeMode: 'contain',
  },
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
  },
  modalContainer: {
    width: vw(90),
    height: vh(90),
    backgroundColor: 'white',
    borderRadius: 10,
    padding: vw(5),
  },
  closeButtonText: {
    color: 'white',
    fontSize: 16,
  },
  popUpText: {
    color: '#1D2939',
    fontSize: 16,
    fontWeight: '600',
  },
});
