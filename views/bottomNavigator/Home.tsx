/* eslint-disable react-native/no-inline-styles */
import {
  Animated,
  Image,
  PanResponder,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useCallback, useRef, useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import useStatusBar from '../../services/useStatusBarCustom';
import {backIcon, bookIcon, menuIcon, nextIcon} from '../../assets/svgXml';
import {vh, vw} from '../../services/styleSheet';
import Mapbox from '@rnmapbox/maps';
import {
  DetailInforInterface,
  MapInterface,
  MapLocation,
} from '../../services/typeProps';
import {useFocusEffect, useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {loadData, saveData} from '../../services/storage';
import {LocationData} from '../../services/renderData';

Mapbox.setAccessToken(
  'pk.eyJ1IjoidGFsamExIiwiYSI6ImNtMWFpZ2RvZDAxdzcyc3M2M2xjcW1tanMifQ.uTGpezucjuEe8CrzzHkR1w',
);

const Home = () => {
  useStatusBar('white');
  const [listLocation, setListLocation] = useState<MapLocation[]>(LocationData);
  const [renderIndex, setRenderIndex] = useState<number>(0);

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
      <Header />
      <MapRender
        tabLocation={listLocation[renderIndex]}
        setRenderIndex={setRenderIndex}
        maxIndex={listLocation.length}
      />
    </SafeAreaView>
  );
};

const MapRender: React.FC<MapInterface> = ({
  tabLocation,
  maxIndex,
  setRenderIndex,
}) => {
  const animatedHeight = useRef(new Animated.Value(vh(23))).current;

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
            toValue: vh(23),
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
          zoomLevel={4.5}
          centerCoordinate={[tabLocation.long, tabLocation.lad]}
        />
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
const Header: React.FC = () => {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  return (
    <View style={styles.headercontainer}>
      <TouchableOpacity>{bookIcon(vw(7), vw(7), '#98A2B3')}</TouchableOpacity>
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
});
