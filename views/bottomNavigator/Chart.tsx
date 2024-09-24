/* eslint-disable react/no-unstable-nested-components */
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
  apSuatKhiQuyenPopUp,
  doAmData,
  doAmPopup,
  getApSuatKhiQuyenData,
  getDoAmData,
  getLuongMuaData,
  getNhietDoMatBienData,
  getTocDoGioData,
  getWeekDays,
  luongMuaData,
  luongMuaPopup,
  nhietDoMatBienData,
  nhietDoMatBienPopup,
  tocDoGioData,
  tocDoGioPopup,
} from '../../services/renderData';
import {
  ChartData,
  ChartRenderInterface,
  TabInforChart,
} from '../../services/typeProps';
import LinearGradient from 'react-native-linear-gradient';
import {LineChart} from 'react-native-gifted-charts';
import PopUpComponent from '../../components/chart/PopUpComponent';

const Chart = () => {
  useStatusBar('white');
  const today = new Date().getDate();
  const [selectedDate, setSelectedDate] = useState<number>(today);
  const [chartData, setChartData] = useState({
    apSuatKhiQuyen: apSuatKhiQuyenData,
    tocDoGio: tocDoGioData,
    luongMua: luongMuaData,
    nhietDoMatBien: nhietDoMatBienData,
    doAm: doAmData,
  });

  const handleDateChange = (dayDate: number) => {
    if (dayDate === selectedDate) {
      return; // If the selected date is the same as the previous one, do nothing
    }

    setSelectedDate(dayDate);
    setChartData({
      apSuatKhiQuyen: getApSuatKhiQuyenData(), // Generate new data for each chart
      tocDoGio: getTocDoGioData(),
      luongMua: getLuongMuaData(),
      nhietDoMatBien: getNhietDoMatBienData(),
      doAm: getDoAmData(),
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={{flex: 1}}>
        <Header />
        <View style={{paddingHorizontal: vw(5)}}>
          <DateTimeRender
            selectedDate={selectedDate}
            handleDateChange={handleDateChange}
          />
        </View>
        <ChartView chartData={chartData} />
        <View style={{height: vh(9)}} />
      </ScrollView>
    </SafeAreaView>
  );
};
const ChartView: React.FC<{chartData: ChartData}> = ({chartData}) => {
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
        data={chartData.apSuatKhiQuyen}
        title="Áp suất khí quyển"
        popUpData={apSuatKhiQuyenPopUp}
      />
      <ChartRender
        colorProp={1}
        data={chartData.tocDoGio}
        title="Tốc độ gió"
        popUpData={tocDoGioPopup}
      />
      <ChartRender
        colorProp={1}
        data={chartData.luongMua}
        title="Lượng mưa"
        popUpData={luongMuaPopup}
      />
      <ChartRender
        colorProp={1}
        data={chartData.nhietDoMatBien}
        title="Nhiệt độ mặt biển"
        popUpData={nhietDoMatBienPopup}
      />
      <ChartRender
        colorProp={1}
        data={chartData.doAm}
        title="Độ ẩm"
        popUpData={doAmPopup}
      />
    </View>
  );
};

const ChartRender: React.FC<ChartRenderInterface> = ({
  colorProp,
  data,
  title,
  popUpData,
}) => {
  const [isPopupVisible, setIsPopupVisible] = useState(false);

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

  const togglePopup = () => {
    setIsPopupVisible(!isPopupVisible);
  };

  const customValueRender = (value: number) => {
    switch (title) {
      case 'Áp suất khí quyển':
        return `${value}hPa`;
      case 'Tốc độ gió':
        return `~${value}km/h`;
      case 'Lượng mưa':
        return `~${value}mm`;
      case 'Nhiệt độ mặt biển':
        return `~${value}°C`;
      case 'Độ ẩm':
        return `${value}%`;
      default:
        return value;
    }
  };

  return (
    <View style={[centerAll, {marginBottom: vh(8), rowGap: vh(1)}]}>
      <View style={styles.chartTitleGrp}>
        <Text style={{color: '#344054', fontSize: 16, fontWeight: '600'}}>
          {title}
        </Text>
        <TouchableOpacity onPress={togglePopup}>
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
          data={data}
          animateOnDataChange={true}
          curved
          width={vw(80)}
          hideDataPoints
          color="#3E4784"
          thickness={2}
          hideRules
          startFillColor="rgba(20,105,81,0.3)"
          endFillColor="rgba(20,85,81,0.01)"
          startOpacity={0.9}
          endOpacity={0.2}
          initialSpacing={50}
          endSpacing={50}
          noOfSections={6}
          hideYAxisText
          yAxisThickness={0}
          xAxisColor={'transparent'}
          showXAxisIndices={false}
          xAxisLabelTextStyle={{
            color: '#667085',
            fontSize: 12,
            withDecay: '500',
          }}
          pointerConfig={{
            pointerStripHeight: 160,
            pointerStripColor: '#3E4784',
            pointerStripWidth: 2,
            pointerColor: '#3E4784',
            strokeDashArray: [2, 5],
            radius: 6,
            pointerLabelWidth: 100,
            pointerLabelHeight: 90,
            activatePointersOnLongPress: true,
            autoAdjustPointerLabelPosition: false,
            pointerLabelComponent: (items: any) => {
              return (
                <View
                  style={{
                    height: 90,
                    width: 100,
                    justifyContent: 'center',
                    marginLeft: -40,
                  }}>
                  <View
                    style={{
                      paddingHorizontal: 14,
                      paddingVertical: 6,
                      borderRadius: 10,
                      backgroundColor: 'white',
                    }}>
                    <Text
                      style={{
                        color: '#667085',
                        fontWeight: '400',
                        fontSize: 12,
                        textAlign: 'center',
                      }}>
                      {customValueRender(items[0].value)}
                    </Text>
                  </View>
                </View>
              );
            },
          }}
        />
      </LinearGradient>
      <PopUpComponent
        visible={isPopupVisible}
        onClose={togglePopup}
        popUpData={popUpData}
        title={title}
      />
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

const DateTimeRender: React.FC<{
  selectedDate: number;
  handleDateChange: (dayDate: number) => void;
}> = ({selectedDate, handleDateChange}) => {
  const today = new Date().getDate();

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
            onPress={() => handleDateChange(dayDate)}>
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
    zIndex: 0,
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
