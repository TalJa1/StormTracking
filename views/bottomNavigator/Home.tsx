/* eslint-disable react-native/no-inline-styles */
import {Alert, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import useStatusBar from '../../services/useStatusBarCustom';
import {backIcon, bookIcon, menuIcon, nextIcon} from '../../assets/svgXml';
import {vh, vw} from '../../services/styleSheet';
import Mapbox from '@rnmapbox/maps';
import {MapInterface} from '../../services/typeProps';
import Geolocation from '@react-native-community/geolocation';

Mapbox.setAccessToken(
  'pk.eyJ1IjoidGFsamExIiwiYSI6ImNtMWFpZ2RvZDAxdzcyc3M2M2xjcW1tanMifQ.uTGpezucjuEe8CrzzHkR1w',
);

const Home = () => {
  useStatusBar('white');
  const [tabLocation, setTabLocation] = useState('Hanoi');

  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <MapRender tabLocation={tabLocation} setTabLocation={setTabLocation} />
    </SafeAreaView>
  );
};

const MapRender: React.FC<MapInterface> = ({tabLocation}) => {
  const [currentLocation, setCurrentLocation] = useState({
    latitude: 0,
    longitude: 0,
  });

  Geolocation.getCurrentPosition(
    info =>
      setCurrentLocation({
        latitude: info.coords.latitude,
        longitude: info.coords.longitude,
      }),
    error => {
      Alert.alert('Error', `Please enable location service ${error}`);
    },
  );

  return (
    <View style={styles.mapContainer}>
      <View style={styles.locationContainer}>
        <TouchableOpacity style={styles.mapTabBtn}>
          {backIcon(vw(7), vw(7))}
        </TouchableOpacity>
        <Text style={styles.mapTabTxt}>{tabLocation}</Text>
        <TouchableOpacity style={styles.mapTabBtn}>
          {nextIcon(vw(7), vw(7))}
        </TouchableOpacity>
      </View>
      <Mapbox.MapView style={styles.map}>
        <Mapbox.Camera
          zoomLevel={5}
          centerCoordinate={[
            currentLocation.longitude,
            currentLocation.latitude,
          ]}
        />
      </Mapbox.MapView>
    </View>
  );
};

const Header: React.FC = () => {
  return (
    <View style={styles.headercontainer}>
      {bookIcon(vw(7), vw(7), '#98A2B3')}
      <Text style={{color: '#4E5BA6', fontSize: 20, fontWeight: '600'}}>
        Storm Forecast
      </Text>
      <TouchableOpacity>{menuIcon(vw(7), vw(7), '#98A2B3')}</TouchableOpacity>
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
});
