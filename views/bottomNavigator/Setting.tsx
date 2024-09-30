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
import {vh, vw} from '../../services/styleSheet';
import {
  HelpCenter,
  OtherInfor,
  Self,
  SystemSetting,
} from '../../services/renderData';
import {nextIcon} from '../../assets/svgXml';
import {RenderLayoutInterface} from '../../services/typeProps';
import Slider from '@react-native-community/slider';
import ToggleSwitch from 'toggle-switch-react-native';

const Setting = () => {
  useStatusBar('white');

  const [toggleStates, setToggleStates] = useState(
    SystemSetting.map(() => false),
  );

  // Create an onToggle function
  const onToggle = (index: number) => {
    setToggleStates(prevStates =>
      prevStates.map((state, i) => (i === index ? !state : state)),
    );
  };
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
        <View style={{paddingHorizontal: vw(5), rowGap: vh(2)}}>
          <RenderLayout title="Cá nhân" renderData={Self} />
          <View>
            <Text style={styles.title}>Cài đặt hệ thống</Text>
            {SystemSetting.map((item, index) => {
              return (
                <TouchableOpacity
                  disabled
                  key={index}
                  style={styles.renderContainer}>
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      columnGap: vw(2),
                    }}>
                    {item.icon}
                    <Text style={{color: '#1D2939', fontSize: 16}}>
                      {item.title}
                    </Text>
                  </View>
                  {index === 2 ? (
                    <Slider
                      style={{width: vw(45), height: vh(1)}}
                      minimumValue={0}
                      maximumValue={1}
                      value={0.5}
                      minimumTrackTintColor="#3E4784"
                      maximumTrackTintColor="#E4E7EC"
                      thumbTintColor="#3E4784"
                    />
                  ) : (
                    <ToggleSwitch
                      isOn={toggleStates[index]}
                      size="small"
                      onToggle={() => onToggle(index)}
                      thumbOnStyle={{
                        backgroundColor: '#717BBC', // Change border color based on state
                        margin: 2, // Add margin to ensure the thumb stays inside the border
                      }}
                      thumbOffStyle={{
                        backgroundColor: '#D0D5DD', // Change border color based on state
                        margin: 2, // Add margin to ensure the thumb stays inside the border
                      }}
                      trackOnStyle={{
                        borderColor: '#717BBC', // Change border color based on state
                        borderWidth: 2, // Adjust the border width as needed
                        backgroundColor: 'transparent', // Make the background transparent
                        padding: 10, // Add padding to ensure the thumb stays inside the border
                      }}
                      trackOffStyle={{
                        borderColor: '#D0D5DD', // Change border color based on state
                        borderWidth: 2, // Adjust the border width as needed
                        backgroundColor: 'transparent', // Make the background transparent
                        padding: 10, // Add padding to ensure the thumb stays inside the border
                      }}
                    />
                  )}
                </TouchableOpacity>
              );
            })}
          </View>
          <RenderLayout title="Trung tâm trợ giúp" renderData={HelpCenter} />
          <RenderLayout title="Thông tin khác" renderData={OtherInfor} />
        </View>
        <View style={{height: vh(9)}} />
      </ScrollView>
    </SafeAreaView>
  );
};

const RenderLayout: React.FC<RenderLayoutInterface> = ({renderData, title}) => {
  return (
    <View>
      <Text style={styles.title}>{title}</Text>
      {renderData.map((item, index) => {
        return (
          <TouchableOpacity key={index} style={styles.renderContainer}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                columnGap: vw(2),
              }}>
              {item.icon}
              <Text style={{color: '#1D2939', fontSize: 16}}>{item.title}</Text>
            </View>
            {nextIcon(vw(7), vw(7), '#98A2B3')}
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default Setting;

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: 'white'},
  title: {
    color: '#1D2939',
    fontSize: 16,
    fontWeight: '600',
  },
  renderContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: vh(1),
    alignItems: 'center',
  },
});
