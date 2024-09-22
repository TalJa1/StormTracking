import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {StormLevelData} from '../../services/renderData';
import {vh} from '../../services/styleSheet';

const PopUpComponent = () => {
  return (
    <ScrollView>
      <View style={styles.container}>
        {StormLevelData.map((item, index) => {
          return (
            <View key={index} style={{rowGap: vh(1)}}>
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.characteristic}>
                <Text style={styles.keyText}>Đặc điểm: </Text>
                {item.characteristic}
              </Text>
              <Text style={styles.keyText}>Biện pháp phòng tránh:</Text>
              <View>
                {item.preventiveMeasures.map((preventive, index1) => {
                  return (
                    <View key={index1} style={styles.listItem}>
                      <Text style={styles.bulletPoint}>{'\u2022'}</Text>
                      <Text style={styles.characteristic}>{preventive}</Text>
                    </View>
                  );
                })}
              </View>
            </View>
          );
        })}
      </View>
    </ScrollView>
  );
};

export default PopUpComponent;

const styles = StyleSheet.create({
  container: {backgroundColor: 'white', rowGap: vh(2)},
  title: {color: '#4E5BA6', fontSize: 14, fontWeight: '600'},
  characteristic: {color: '#667085', fontSize: 12},
  keyText: {
    color: '#667085',
    fontSize: 12,
    fontWeight: '700',
  },
  listItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 5,
  },
  bulletPoint: {
    marginRight: 10,
    fontSize: 18,
    lineHeight: 22,
    color: '#667085',
  },
});
