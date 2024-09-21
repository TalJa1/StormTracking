/* eslint-disable react-native/no-inline-styles */
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import useStatusBar from '../../services/useStatusBarCustom';
import {bookIcon, menuIcon} from '../../assets/svgXml';
import {vh, vw} from '../../services/styleSheet';
import Mapbox from '@rnmapbox/maps';
import {LocationTabInterface} from '../../services/typeProps';

Mapbox.setAccessToken(
  'pk.eyJ1IjoidGFsamExIiwiYSI6ImNtMWFpZ2RvZDAxdzcyc3M2M2xjcW1tanMifQ.uTGpezucjuEe8CrzzHkR1w',
);

const Home = () => {
  useStatusBar('white');
  const [tabLocation, setTabLocation] = useState('Hanoi');

  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <LocationTab setTabLocation={setTabLocation} tabLocation={tabLocation} />
      <MapRender />
    </SafeAreaView>
  );
};

const LocationTab: React.FC<LocationTabInterface> = () => {
  return <View style={styles.locationContainer}></View>;
};

const MapRender: React.FC = () => {
  return (
    <View style={styles.mapContainer}>
      <Mapbox.MapView style={styles.map} />
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
    position: 'absolute',
  },
});
