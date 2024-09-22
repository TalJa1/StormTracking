import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import useStatusBar from '../../services/useStatusBarCustom';

const Chart = () => {
  useStatusBar('white');

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View>
          <Text>Chart</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Chart;

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: 'white'},
});
