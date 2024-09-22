/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import useStatusBar from '../../services/useStatusBarCustom';
import {backArrowIcon, searchingIcon} from '../../assets/svgXml';
import {vh, vw} from '../../services/styleSheet';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {AdditionLocaiton, LocationData} from '../../services/renderData';
import {MapLocation} from '../../services/typeProps';
import {loadData, saveData} from '../../services/storage';

const ListLocation = () => {
  useStatusBar('white');
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <ScrollView>
        <MainContent />
      </ScrollView>
    </SafeAreaView>
  );
};

const MainContent: React.FC = () => {
  const [mainData, setMainData] = useState<MapLocation[]>(LocationData);
  const [addData, setAddData] = useState<MapLocation[]>(AdditionLocaiton);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');

  const fetchMainData = async () => {
    try {
      const data = await loadData<MapLocation[]>('listLocationStorage');
      setMainData(data);
    } catch (error) {
      saveData('listLocationStorage', LocationData);
    }
  };

  const fetchAddData = async () => {
    try {
      const data = await loadData<MapLocation[]>('additionLocationStorage');
      setAddData(data);
    } catch (error) {
      saveData('additionLocationStorage', AdditionLocaiton);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      await fetchMainData();
      await fetchAddData();
      setLoading(false);
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#0000ff" />
        <Text>Loading...</Text>
      </View>
    );
  }

  const handleAdd = async (index: number) => {
    const itemToAdd = addData[index];
    const updatedMainData = [...mainData, itemToAdd];
    const updatedAddData = addData.filter((_, i) => i !== index);

    setMainData(updatedMainData);
    setAddData(updatedAddData);

    await saveData('listLocationStorage', updatedMainData);
    await saveData('additionLocationStorage', updatedAddData);
  };

  const filteredMainData = mainData.filter(item =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  const filteredAddData = addData.filter(item =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  return (
    <View style={{paddingVertical: vh(1), rowGap: vh(2)}}>
      <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <View style={styles.mainContainer}>
        <Text style={styles.mainTitle}>Đã thêm</Text>
        {filteredMainData.map((item, index) => {
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
        {filteredAddData.map((item, index) => {
          return (
            <View key={index} style={styles.blockLocation}>
              <View>
                <Text style={styles.mainTitle}>{item.name}</Text>
                <Text style={styles.mainDes}>{item.description}</Text>
              </View>
              <View style={{flexDirection: 'row', columnGap: vw(2)}}>
                <Text style={styles.degree}>{item.temperature}°</Text>
                <TouchableOpacity
                  onPress={() => handleAdd(index)}
                  style={styles.addBtn}>
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

const SearchBar: React.FC<{
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}> = ({searchQuery, setSearchQuery}) => {
  return (
    <View style={styles.searchContainer}>
      {searchingIcon(vw(7), vw(7))}
      <TextInput
        style={styles.input}
        placeholder="Tìm tên thành phố"
        placeholderTextColor="#888"
        value={searchQuery}
        onChangeText={setSearchQuery}
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
    backgroundColor: '#293056',
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
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
