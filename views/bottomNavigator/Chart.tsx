import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';

const Chart = () => {
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
  container: {flex: 1},
});
