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

const ListLocation = () => {
  useStatusBar('white');
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <ScrollView>
        <SearchBar />
      </ScrollView>
    </SafeAreaView>
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
});
