/* eslint-disable react-native/no-inline-styles */
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import useStatusBar from '../../services/useStatusBarCustom';
import {vh, vw} from '../../services/styleSheet';

const Setting = () => {
  useStatusBar('white');
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={{paddingHorizontal: vw(5)}}>
          <Text
            style={{
              color: '#4E5BA6',
              fontSize: 20,
              fontWeight: '600',
              paddingVertical: vh(2),
            }}>
            Setting
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Setting;

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: 'white'},
});
