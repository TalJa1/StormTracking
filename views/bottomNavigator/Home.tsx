/* eslint-disable react-native/no-inline-styles */
import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import useStatusBar from '../../services/useStatusBarCustom';
import {backIcon, doubleSaveIcon} from '../../assets/svgXml';
import {vh, vw} from '../../services/styleSheet';

const Home = () => {
  useStatusBar('white');
  return (
    <SafeAreaView style={styles.container}>
      <Header />
    </SafeAreaView>
  );
};

const Header: React.FC = () => {
  return (
    <View style={styles.headercontainer}>
      {backIcon(vw(7), vw(7), '#98A2B3')}
      <Text style={{color: '#4E5BA6', fontSize: 20, fontWeight: '600'}}>
        Storm Forecast
      </Text>
      {doubleSaveIcon(vw(7), vw(7), '#98A2B3')}
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
});
