/* eslint-disable react-native/no-inline-styles */
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import useStatusBar from '../../services/useStatusBarCustom';
import {vh, vw} from '../../services/styleSheet';
import {HelpCenter, OtherInfor, Self} from '../../services/renderData';
import {nextIcon} from '../../assets/svgXml';
import {RenderLayoutInterface} from '../../services/typeProps';

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
        <View style={{paddingHorizontal: vw(5)}}>
          <RenderLayout title="Cá nhân" renderData={Self} />
          <RenderLayout title="Trung tâm trợ giúp" renderData={HelpCenter} />
          <RenderLayout title="Thông tin khác" renderData={OtherInfor} />
        </View>
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
