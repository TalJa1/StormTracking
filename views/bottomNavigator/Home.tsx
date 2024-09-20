/* eslint-disable react-native/no-inline-styles */
import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import useStatusBar from '../../services/useStatusBarCustom';

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
    <View>
      <Text style={{color: '#4E5BA6', fontSize: 20, fontWeight: '600'}}>
        Storm Forecast
      </Text>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: 'white'},
});
