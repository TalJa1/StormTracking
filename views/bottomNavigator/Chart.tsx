/* eslint-disable react-native/no-inline-styles */
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import useStatusBar from '../../services/useStatusBarCustom';
import {bookIcon} from '../../assets/svgXml';
import {vh, vw} from '../../services/styleSheet';
import {getWeekDays} from '../../services/renderData';

const Chart = () => {
  useStatusBar('white');

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={{flex: 1}}>
        <Header />
        <DateTimeRender />
      </ScrollView>
    </SafeAreaView>
  );
};

const DateTimeRender: React.FC = () => {
  const today = new Date().getDate();
  const [selectedDate, setSelectedDate] = useState<number>(today);

  return (
    <View style={[styles.dateContainer]}>
      {getWeekDays().map((day, index) => {
        const dayDate = parseInt(day.date, 10);
        const isToday = dayDate === today;
        const isSelected = dayDate === selectedDate;

        return (
          <TouchableOpacity
            key={index}
            style={styles.dateTxtContainer}
            onPress={() => setSelectedDate(dayDate)}>
            <Text style={styles.dateofWeek}>{day.dayOfWeek}</Text>
            <View
              style={[
                styles.dateCircle,
                isToday && !isSelected && styles.todayCircle,
                isSelected && styles.selectedCircle,
                isToday && isSelected && {backgroundColor: '#4E5BA6'},
              ]}>
              <Text
                style={[
                  styles.datetime,
                  isToday && !isSelected && styles.todayText,
                  isSelected && styles.selectedText,
                  !isToday && !isSelected && styles.defaultText,
                ]}>
                {day.date}
              </Text>
            </View>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const Header: React.FC = () => {
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.headerTitle}>Chart</Text>
      {bookIcon(vw(7), vw(7))}
    </View>
  );
};

export default Chart;

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: 'white'},
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: vw(5),
    paddingVertical: vh(1.5),
  },
  headerTitle: {
    color: '#4E5BA6',
    fontSize: 20,
    fontWeight: '600',
  },
  dateContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: vh(2),
  },
  dateofWeek: {
    color: '#1D2939',
    fontSize: 12,
    fontWeight: '400',
  },
  datetime: {
    fontSize: 14,
    fontWeight: '600',
  },
  dateTxtContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    rowGap: vh(0.5),
  },
  todayText: {
    color: '#4E5BA6',
  },
  selectedText: {
    color: '#FCFCFD',
  },
  defaultText: {
    color: '#344054',
  },
  dateCircle: {
    width: 30,
    height: 30,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  todayCircle: {
    backgroundColor: 'transparent',
  },
  selectedCircle: {
    backgroundColor: '#98A2B3',
    borderRadius: vw(30),
  },
});
