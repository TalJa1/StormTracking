import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const PopUpComponent = () => {
  return (
    <View style={styles.container}>
      <Text>PopUpComponent</Text>
    </View>
  );
};

export default PopUpComponent;

const styles = StyleSheet.create({
  container: {flex: 1},
});
