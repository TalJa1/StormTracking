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
import {bookIcon, dangerIcon, safeIcon} from '../../assets/svgXml';
import {vh, vw} from '../../services/styleSheet';
import {getWeekDays} from '../../services/renderData';
import {TabInforChart} from '../../services/typeProps';

const Chart = () => {
  useStatusBar('white');

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={{flex: 1}}>
        <Header />
        <View style={{paddingHorizontal: vw(5)}}>
          <DateTimeRender />
        </View>
        <ChartView />
      </ScrollView>
    </SafeAreaView>
  );
};

const ChartView: React.FC = () => {
  return (
    <View style={{flex: 1}}>
      <View style={styles.tabInforGrp}>
        <TabInfor
          title="Mức báo động"
          icon={dangerIcon(vw(10), vw(10))}
          color="#912018"
        />
        <TabInfor
          title="Mức an toàn"
          icon={safeIcon(vw(10), vw(10))}
          color="#05603A"
        />
      </View>
    </View>
  );
};

const TabInfor: React.FC<TabInforChart> = ({color, icon, title}) => {
  return (
    <View style={styles.tabInforContainer}>
      {icon}
      <Text style={{color: color, fontSize: 12, fontWeight: '500'}}>
        {title}
      </Text>
    </View>
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
        const isPast = dayDate < today;

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
                  isPast && !isSelected && {color: '#B0B7C3'},
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
    borderTopWidth: 1,
    borderTopColor: '#E4E7EC',
    borderBottomColor: '#E4E7EC',
    borderBottomWidth: 1,
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
  tabInforContainer: {
    flexDirection: 'row',
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#F2F4F7',
    backgroundColor: '#F9FAFB',
    padding: vw(1),
    alignItems: 'center',
    columnGap: vw(2),
  },
  tabInforGrp: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: vh(2),
    paddingHorizontal: vw(5),
  },
});
