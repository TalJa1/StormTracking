/* eslint-disable react-native/no-inline-styles */
import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import useStatusBar from '../../services/useStatusBarCustom';
import {backArrowIcon, searchingIcon} from '../../assets/svgXml';
import {vh, vw} from '../../services/styleSheet';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {AdditionLocaiton, LocationData} from '../../services/renderData';

const ListLocation = () => {
  useStatusBar('white');
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <ScrollView>
        <SearchBar />
        <MainContent />
      </ScrollView>
    </SafeAreaView>
  );
};

const MainContent: React.FC = () => {
  return (
    <View style={{paddingVertical: vh(1), rowGap: vh(2)}}>
      <View style={styles.mainContainer}>
        <Text style={styles.mainTitle}>Đã thêm</Text>
        {LocationData.map((item, index) => {
          return (
            <View key={index} style={styles.blockLocation}>
              <View>
                <Text style={styles.mainTitle}>{item.name}</Text>
                <Text style={styles.mainDes}>{item.description}</Text>
              </View>
              <Text style={styles.degree}>{item.temperature}°</Text>
            </View>
          );
        })}
      </View>
      <View style={styles.mainContainer}>
        <Text style={styles.mainTitle}>Gợi ý</Text>
        {AdditionLocaiton.map((item, index) => {
          return (
            <View key={index} style={styles.blockLocation}>
              <View>
                <Text style={styles.mainTitle}>{item.name}</Text>
                <Text style={styles.mainDes}>{item.description}</Text>
              </View>
              <View style={{flexDirection: 'row', columnGap: vw(2)}}>
                <Text style={styles.degree}>{item.temperature}°</Text>
                <TouchableOpacity style={styles.addBtn}>
                  <Text style={styles.addBtnTxt}>+ Thêm</Text>
                </TouchableOpacity>
              </View>
            </View>
          );
        })}
      </View>
    </View>
  );
};

const SearchBar: React.FC = () => {
  return (
    <View style={styles.searchContainer}>
      {searchingIcon(vw(7), vw(7))}
      <TextInput
        style={styles.input}
        placeholder="Tìm tên thành phố"
        placeholderTextColor="#888"
      />
    </View>
  );
};

const Header: React.FC = () => {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  return (
    <View style={styles.headerContainer}>
      <TouchableOpacity
        onPress={() => {
          navigation.goBack();
        }}>
        {backArrowIcon(vw(7), vw(7), '#98A2B3')}
      </TouchableOpacity>
      <Text style={styles.headerTxt}>Danh sách</Text>
      {backArrowIcon(vw(7), vw(7), 'white')}
    </View>
  );
};

export default ListLocation;

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: 'white'},
  headerTxt: {
    color: '#4E5BA6',
    fontSize: 20,
    fontWeight: '600',
  },
  headerContainer: {
    paddingHorizontal: vw(5),
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: vh(2),
  },
  searchContainer: {
    marginHorizontal: vw(5),
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 8,
    paddingHorizontal: 8,
    borderWidth: 1,
    borderColor: '#E4E7EC',
  },
  input: {
    flex: 1,
    marginLeft: 10,
    fontSize: 16,
    color: '#000',
  },
  mainContainer: {
    paddingHorizontal: vw(5),
    rowGap: vh(1.5),
  },
  mainTitle: {
    color: '#1D2939',
    fontSize: 16,
    fontWeight: '600',
  },
  degree: {
    color: '#4E5BA6',
    fontSize: 32,
    fontWeight: '600',
  },
  mainDes: {
    color: '#667085',
    fontSize: 12,
    fontWeight: '400',
  },
  blockLocation: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#E4E7EC',
    padding: 8,
    borderRadius: 8,
    justifyContent: 'space-between',
  },
  addBtn: {
    backgroundColor: '#4E5BA6',
    borderRadius: 8,
    paddingHorizontal: vw(4),
    paddingVertical: vh(1),
    alignSelf: 'center',
  },
  addBtnTxt: {
    color: '#FCFCFD',
    fontSize: 14,
    fontWeight: '600',
  },
});
