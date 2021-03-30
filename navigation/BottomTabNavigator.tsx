import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import { StyleSheet } from 'react-native';
import Icon from "react-native-vector-icons/Ionicons";


import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import TabOneScreen from '../screens/TabOneScreen';
import TabTwoScreen from '../screens/TabTwoScreen';
import TabThreeScreen from '../screens/TabThreeScreen';
import NotFoundScreen from '../screens/NotFoundScreen';
import Lawyers from '../screens/Lawyers';
import Therapists from '../screens/Therapists';
import Helplines from '../screens/Helplines';
import Awareness from '../screens/Awareness';
import Harassment from '../screens/Harassment';
import SexualHarassment from '../screens/SexualHarassment';
import Reporting from '../screens/Reporting';
import { BottomTabParamList, TabOneParamList, TabTwoParamList, TabThreeParamList } from '../types';


const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="SOS"
      tabBarOptions={{
        activeTintColor: "#790C5A",
        inactiveTintColor: "#b3b3cc",
        labelStyle: { fontSize: 14, fontWeight: "bold"},
      }}
    >
      <BottomTab.Screen
        name="SOS"
        component={TabOneNavigator}
        options={{
          tabBarIcon: ({ focused }) => {
            let iconName;
            let shade;
            iconName = `help-buoy${focused ? '' : '-outline'}`;
            shade = `${focused ? '#790C5A' : '#b3b3cc'}`;
            return <Icon name={iconName} size={25} color={shade} />;
          },
        }}
      />
      
      <BottomTab.Screen
        name="Help"
        component={TabThreeNavigator}
        options={{
          tabBarIcon: ({ focused }) => {
            let iconName;
            let shade;
            iconName = `people${focused ? '' : '-outline'}`;
            shade = `${focused ? '#790C5A' : '#b3b3cc'}`;
            return <Icon name={iconName} size={25} color={shade} />;
          },
        }}
      />

      <BottomTab.Screen
        name="Learn"
        component={TabTwoNavigator}
        options={{
          tabBarIcon: ({ focused }) => {
            let iconName;
            let shade;
            iconName = `bulb${focused ? '' : '-outline'}`;
            shade = `${focused ? '#790C5A' : '#b3b3cc'}`;
            return <Icon name={iconName} size={25} color={shade} />;
          },
        }}
      />
    </BottomTab.Navigator>
  );
}

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
const TabOneStack = createStackNavigator<TabOneParamList>();

function TabOneNavigator() {
  return (
    <TabOneStack.Navigator>
      <TabOneStack.Screen
        name="TabOneScreen"
        component={TabOneScreen}
        options={{ 
          title: 'SOS',
          headerStyle: {
          backgroundColor: '#FFF',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
          color: "#790C5A",
          fontWeight: 'bold',
          },
        }}
      />
      <TabOneStack.Screen
        name="Notfound"
        component={NotFoundScreen}
        options={{ 
          title: 'Notfound',
          headerStyle: {
          backgroundColor: '#FFF',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
          color: "#790C5A",
          fontWeight: 'bold',
          },
        }}
      />
      <TabOneStack.Screen
        name="Helplines"
        component={Helplines}
        options={{ 
          title: 'Helplines',
          headerStyle: {
          backgroundColor: '#FFF',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
          color: "#790C5A",
          fontWeight: 'bold',
          },
        }}
      />
    </TabOneStack.Navigator>
  );
}

const TabTwoStack = createStackNavigator<TabTwoParamList>();

function TabTwoNavigator() {
  return (
    <TabTwoStack.Navigator>
      <TabTwoStack.Screen
        name="TabTwoScreen"
        component={TabTwoScreen}
        options={{ 
          title: 'Learn',
          headerStyle: {
          backgroundColor: '#FFF',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
          color: "#790C5A",
          fontWeight: 'bold',
          },
        }}
      />
      <TabTwoStack.Screen
        name="Notfound"
        component={NotFoundScreen}
        options={{ 
          title: 'Notfound',
          headerStyle: {
          backgroundColor: '#FFF',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
          color: "#790C5A",
          fontWeight: 'bold',
          },
        }}
      />
      <TabTwoStack.Screen
        name="Awareness"
        component={Awareness}
        options={{ 
          title: 'Awareness',
          headerStyle: {
          backgroundColor: '#FFF',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
          color: "#790C5A",
          fontWeight: 'bold',
          },
        }}
      />
      <TabTwoStack.Screen
        name="Harassment"
        component={Harassment}
        options={{ 
          title: 'Harassment',
          headerStyle: {
          backgroundColor: '#FFF',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
          color: "#790C5A",
          fontWeight: 'bold',
          },
        }}
      />
      <TabTwoStack.Screen
        name="SexualHarassment"
        component={SexualHarassment}
        options={{ 
          title: 'SexualHarassment',
          headerStyle: {
          backgroundColor: '#FFF',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
          color: "#790C5A",
          fontWeight: 'bold',
          },
        }}
      />
      <TabTwoStack.Screen
        name="Reporting"
        component={Reporting}
        options={{ 
          title: 'Reporting',
          headerStyle: {
          backgroundColor: '#FFF',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
          color: "#790C5A",
          fontWeight: 'bold',
          },
        }}
      />
    </TabTwoStack.Navigator>
  );
}

const TabThreeStack = createStackNavigator<TabThreeParamList>();

function TabThreeNavigator() {
  return (
    <TabThreeStack.Navigator>
      <TabThreeStack.Screen
        name="TabThreeScreen"
        component={TabThreeScreen}
        options={{ 
          title: 'Help',
          headerStyle: {
          backgroundColor: '#FFF',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
          color: "#790C5A",
          fontWeight: 'bold',
          },
        }}
      />
      <TabThreeStack.Screen
        name="Notfound"
        component={NotFoundScreen}
        options={{ 
          title: 'Notfound',
          headerStyle: {
          backgroundColor: '#FFF',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
          color: "#790C5A",
          fontWeight: 'bold',
          },
        }}
      />
      <TabThreeStack.Screen
        name="Lawyers"
        component={Lawyers}
        options={{ 
          title: 'Lawyers',
          headerStyle: {
          backgroundColor: '#FFF',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
          color: "#790C5A",
          fontWeight: 'bold',
          },
        }}
      />
      <TabThreeStack.Screen
        name="Therapists"
        component={Therapists}
        options={{ 
          title: 'Therapists',
          headerStyle: {
          backgroundColor: '#FFF',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
          color: "#790C5A",
          fontWeight: 'bold',
          },
        }}
      />
    </TabThreeStack.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  card: {
    margin: 5,
    shadowOffset: { width: 0, height: 1 },
    shadowColor: '#F1D4D4',
    shadowOpacity: 100,
    shadowRadius: 4,
    elevation: 3
  }
});