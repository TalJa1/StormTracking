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
import {
  bookIcon,
  chartInforIcon,
  dangerIcon,
  safeIcon,
} from '../../assets/svgXml';
import {centerAll, vh, vw} from '../../services/styleSheet';
import {
  apSuatKhiQuyenData,
  doAmData,
  getWeekDays,
  luongMuaData,
  nhietDoMatBienData,
  tocDoGioData,
} from '../../services/renderData';
import {ChartRenderInterface, TabInforChart} from '../../services/typeProps';
import LinearGradient from 'react-native-linear-gradient';
import {LineChart} from 'react-native-gifted-charts';

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
        <View style={{height: vh(9)}} />
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
      <ChartRender
        colorProp={0}
        data={apSuatKhiQuyenData}
        title="Áp suất khí quyển"
      />
      <ChartRender colorProp={1} data={tocDoGioData} title="Tốc độ gió" />
      <ChartRender colorProp={1} data={luongMuaData} title="Lượng mưa" />
      <ChartRender
        colorProp={1}
        data={nhietDoMatBienData}
        title="Nhiệt độ mặt biển"
      />
      <ChartRender colorProp={1} data={doAmData} title="Độ ẩm" />
    </View>
  );
};

const ChartRender: React.FC<ChartRenderInterface> = ({
  colorProp,
  data,
  title,
}) => {
  const getColor = () => {
    switch (colorProp) {
      case 0:
        return ['#FFFFFF', '#D1FADF', '#FDA29B', '#FFFFFF'];
      case 1:
        return ['#FFFFFF', '#FDA29B', '#D1FADF', '#FFFFFF'];
      default:
        return ['#FFFFFF', '#D1FADF', '#FDA29B', '#FFFFFF']; // Default colors
    }
  };

  return (
    <View style={[centerAll, {marginBottom: vh(8)}]}>
      <View style={styles.chartTitleGrp}>
        <Text style={{color: '#344054', fontSize: 16, fontWeight: '600'}}>
          {title}
        </Text>
        <TouchableOpacity>
          {chartInforIcon(vw(6), vw(6), '#4E5BA6')}
        </TouchableOpacity>
      </View>
      <LinearGradient
        colors={getColor()} // Customize your two colors here
        start={{x: 0, y: 0}}
        end={{x: 0, y: 1}} // To split vertically. Change to `{x: 1, y: 0}` for horizontal split.
        style={styles.background}>
        <View style={styles.dashedLine} />
        {/* Line Chart on top of the gradient background */}
        <LineChart
          curved
          data={data}
          width={vw(80)}
          height={200}
          rulesThickness={2} // Customize rules thickness
          rulesColor={'#FDA29B'} // Customize rules color
          hideAxesAndRules
          color="#3E4784" // Customize chart line color
          initialSpacing={25}
          xAxisColor={'transparent'}
          yAxisColor={'transparent'}
          xAxisLabelTextStyle={{
            color: '#667085',
            fontSize: 12,
            withDecay: '500',
          }}
          hideDataPoints={true} // Show data points
          hideRules={false}
          hideYAxisText={true}
          animateOnDataChange={true}
          focusEnabled={true}
          showYAxisIndices={false}
          showTextOnFocus={true}
        />
      </LinearGradient>
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
  background: {
    width: vw(90),
    height: 200,
    borderRadius: 20,
  },
  dashedLine: {
    position: 'absolute',
    width: '100%', // Thickness of the line
    height: 2, // Full height of the container
    borderStyle: 'dashed',
    borderWidth: 1, // Adjust for the thickness of the dashes
    borderColor: '#FDA29B', // Customize the dashed line color
    top: '50%',
  },
  chartTitleGrp: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: vw(6),
  },
});
