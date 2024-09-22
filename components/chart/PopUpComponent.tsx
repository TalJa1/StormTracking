/* eslint-disable react-native/no-inline-styles */
import {Modal, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {ChartPopUpInterface, TabInforChart} from '../../services/typeProps';
import {vh, vw} from '../../services/styleSheet';
import {dangerIcon, popUpCancelIcon, safeIcon} from '../../assets/svgXml';

const PopUpComponent: React.FC<ChartPopUpInterface> = ({
  onClose,
  popUpData,
  title,
  visible,
}) => {
  return (
    <Modal visible={visible} transparent={true} animationType="slide">
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              borderBottomWidth: 1,
              borderBottomColor: '#F2F4F7',
            }}>
            <Text style={styles.title}>{title}</Text>
            <TouchableOpacity onPress={onClose} style={styles.closeButton}>
              {popUpCancelIcon(vw(7), vw(7))}
            </TouchableOpacity>
          </View>
          <View>
            <TabInfor
              title="Mức an toàn"
              icon={safeIcon(vw(10), vw(10))}
              color="#05603A"
            />
            {popUpData.safe.map((item, index) => {
              return (
                <View key={index}>
                  <Text style={styles.text}>{item}</Text>
                </View>
              );
            })}
          </View>
          <View>
            <TabInfor
              title="Có nguy cơ hình thành bão"
              icon={dangerIcon(vw(10), vw(10))}
              color="#912018"
            />
            {popUpData.danger.map((item, index) => {
              return (
                <View key={index}>
                  <Text style={styles.text}>{item}</Text>
                </View>
              );
            })}
          </View>
        </View>
      </View>
    </Modal>
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

export default PopUpComponent;

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalContent: {
    width: vw(90),
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    rowGap: vh(1),
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 10,
    color: '#1D2939',
  },
  subtitle: {
    fontSize: 16,
    fontWeight: '600',
    marginTop: 10,
  },
  text: {
    fontSize: 12,
    color: '#667085',
    fontWeight: '400',
    marginVertical: 5,
  },
  closeButton: {},
  tabInforContainer: {
    flexDirection: 'row',
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#F2F4F7',
    backgroundColor: '#F9FAFB',
    padding: vw(1),
    alignItems: 'center',
    columnGap: vw(2),
    alignSelf: 'flex-start',
  },
});
