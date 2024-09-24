/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import {StyleSheet, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {vh, vw} from './services/styleSheet';

import {chartIcon, homeIcon, settingIcon} from './assets/svgXml';
import Home from './views/bottomNavigator/Home';
import Chart from './views/bottomNavigator/Chart';
import Setting from './views/bottomNavigator/Setting';
import ListLocation from './views/home/ListLocation';
import Login from './views/init/Login';
import Onboarding from './views/init/Onboarding';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const App = () => {
  const TabNavigator = () => {
    return (
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={{
          tabBarActiveTintColor: '#293056',
          tabBarInactiveTintColor: '#717BBC',
          tabBarShowLabel: true,
          tabBarStyle: styles.tabBar,
          tabBarLabelStyle: styles.tabBarLabel,
        }}>
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            headerShown: false,
            tabBarIcon: ({color, focused}) => {
              const iconSize = focused ? vw(7) : vw(6);
              return <View>{homeIcon(iconSize, iconSize, color)}</View>;
            },
          }}
        />
        <Tab.Screen
          name="Chart"
          component={Chart}
          options={{
            headerShown: false,
            tabBarIcon: ({color, focused}) => {
              const iconSize = focused ? vw(7) : vw(6);
              return <View>{chartIcon(iconSize, iconSize, color)}</View>;
            },
          }}
        />
        <Tab.Screen
          name="Setting"
          component={Setting}
          options={{
            headerShown: false,
            tabBarIcon: ({color, focused}) => {
              const iconSize = focused ? vw(7) : vw(6);
              return <View>{settingIcon(iconSize, iconSize, color)}</View>;
            },
          }}
        />
      </Tab.Navigator>
    );
  };

  return (
    <NavigationContainer>
      {/* Main || Login */}
      <Stack.Navigator initialRouteName="Login">
        {/* Main layout with 3 bottom tabs */}
        <Stack.Screen
          name="Main"
          component={TabNavigator}
          options={{headerShown: false}}
        />
        {/* end here */}
        <Stack.Screen
          name="ListLocation"
          component={ListLocation}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Onboarding"
          component={Onboarding}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  tabBar: {
    height: vh(8),
    borderRadius: 12,
    position: 'absolute',
    bottom: vh(1),
    left: vw(5),
    right: vw(5),
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.15,
    shadowRadius: 3.84,
    elevation: 5,
    opacity: 0.9,
  },
  tabBarLabel: {
    fontSize: 12,
    fontWeight: 'bold',
    paddingBottom: vh(1),
  },
});

export default App;
