/* eslint-disable react/prop-types */
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import Icon from "react-native-vector-icons/Ionicons";

import TabOneScreen from '../screens/TabOneScreen';
import TabTwoScreen from '../screens/TabTwoScreen';
import TabThreeScreen from '../screens/TabThreeScreen';
import TabFourScreen from '../screens/TabFourScreen';
import NotFoundScreen from '../screens/NotFoundScreen';
import Lawyers from '../screens/Lawyers';
import Therapists from '../screens/Therapists';
import Helplines from '../screens/Helplines';
import Awareness from '../screens/Awareness';
import SexualHarassment from '../screens/SexualHarassment';
import Reporting from '../screens/Reporting';
import Parenting from '../screens/Parenting';
import SignsOfHarassment from '../screens/SignsOfHarassment';
import TalkingToYourChild from '../screens/TalkingToYourChild';
import Laws from '../screens/Laws';
import SexualHarassmentLaw from '../screens/SexualHarassmentLaw';
import Workplace from '../screens/Workplace';
import Rape from '../screens/Rape';
import Children from '../screens/Children';
import SupportGroups from '../screens/SupportGroups';
import WorkplaceHarassment from '../screens/WorkplaceHarassment';
import CyberHarassment from '../screens/CyberHarassment';
import Login from '../screens/login';
import addEmergencyContact from '../screens/EmergencyContacts';
import Description from '../screens/Description';
import Chat from '../screens/Chat'

// eslint-disable-next-line no-undef
require('firebase/auth')

const BottomTab = createBottomTabNavigator();

export default function BottomTabNavigator() {
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
          // eslint-disable-next-line react/display-name
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
          // eslint-disable-next-line react/display-name
          tabBarIcon: ( {focused} ) => {
            let iconName;
            let shade;
            iconName = `shield${focused ? '' : '-outline'}`;
            shade = `${focused ? '#790C5A' : '#b3b3cc'}`;
            return <Icon name={iconName} size={25} color={shade} />;
          },
        }}
      />

      <BottomTab.Screen
        name="Learn"
        component={TabTwoNavigator}
        options={{
          // eslint-disable-next-line react/display-name
          tabBarIcon: ( {focused} ) => {
            let iconName;
            let shade;
            iconName = `bulb${focused ? '' : '-outline'}`;
            shade = `${focused ? '#790C5A' : '#b3b3cc'}`;
            return <Icon name={iconName} size={25} color={shade} />;
          },
        }}
      />

      <BottomTab.Screen
        name="Profile"
        component={TabFourNavigator}
        options={{
          // eslint-disable-next-line react/display-name
          tabBarIcon: ({ focused }) => {
            let iconName;
            let shade;
            iconName = `person-circle${focused ? '' : '-outline'}`;
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
const TabOneStack = createStackNavigator();

function TabOneNavigator() {
  return (
    <TabOneStack.Navigator>
      <TabOneStack.Screen
        name="TabOneScreen"
        component={TabOneScreen}
        options={{ 
          title: 'Awaaz',
          headerStyle: {
          backgroundColor: '#FFF',
          },
          headerTintColor: '#790C5A',
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
          headerTintColor: '#790C5A',
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
          headerTintColor: '#790C5A',
          headerTitleStyle: {
          color: "#790C5A",
          fontWeight: 'bold',
          },
        }}
      />
    </TabOneStack.Navigator>
  );
}

const TabTwoStack = createStackNavigator();

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
          headerTintColor: '#790C5A',
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
          headerTintColor: '#790C5A',
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
          headerTintColor: '#790C5A',
          headerTitleStyle: {
          color: "#790C5A",
          fontWeight: 'bold',
          },
        }}
      />
      <TabTwoStack.Screen
        name="Description"
        component={Description}
        options={{ 
          title: 'Awareness',
          headerStyle: {
          backgroundColor: '#FFF',
          },
          headerTintColor: '#790C5A',
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
          title: 'Sexual Harassment',
          headerStyle: {
          backgroundColor: '#FFF',
          },
          headerTintColor: '#790C5A',
          headerTitleStyle: {
          color: "#790C5A",
          fontWeight: 'bold',
          },
        }}
      />
      <TabTwoStack.Screen
        name="WorkplaceHarassment"
        component={WorkplaceHarassment}
        options={{ 
          title: 'Workplace Harassment',
          headerStyle: {
          backgroundColor: '#FFF',
          },
          headerTintColor: '#790C5A',
          headerTitleStyle: {
          color: "#790C5A",
          fontWeight: 'bold',
          },
        }}
      />
      <TabTwoStack.Screen
        name="CyberHarassment"
        component={CyberHarassment}
        options={{ 
          title: 'Cyber Harassment',
          headerStyle: {
          backgroundColor: '#FFF',
          },
          headerTintColor: '#790C5A',
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
          headerTintColor: '#790C5A',
          headerTitleStyle: {
          color: "#790C5A",
          fontWeight: 'bold',
          },
        }}
      />
      <TabTwoStack.Screen
        name="Parenting"
        component={Parenting}
        options={{ 
          title: 'Parenting',
          headerStyle: {
          backgroundColor: '#FFF',
          },
          headerTintColor: '#790C5A',
          headerTitleStyle: {
          color: "#790C5A",
          fontWeight: 'bold',
          },
        }}
      />
      <TabTwoStack.Screen
        name="SignsOfHarassment"
        component={SignsOfHarassment}
        options={{ 
          title: 'Signs Of Harassment',
          headerStyle: {
          backgroundColor: '#FFF',
          },
          headerTintColor: '#790C5A',
          headerTitleStyle: {
          color: "#790C5A",
          fontWeight: 'bold',
          },
        }}
      />
      <TabTwoStack.Screen
        name="TalkingToYourChild"
        component={TalkingToYourChild}
        options={{ 
          title: 'Talking To Your Child',
          headerStyle: {
          backgroundColor: '#FFF',
          },
          headerTintColor: '#790C5A',
          headerTitleStyle: {
          color: "#790C5A",
          fontWeight: 'bold',
          },
        }}
      />
      <TabTwoStack.Screen
        name="Laws"
        component={Laws}
        options={{ 
          title: 'Laws',
          headerStyle: {
          backgroundColor: '#FFF',
          },
          headerTintColor: '#790C5A',
          headerTitleStyle: {
          color: "#790C5A",
          fontWeight: 'bold',
          },
        }}
      />
      <TabTwoStack.Screen
        name="SexualHarassmentLaw"
        component={SexualHarassmentLaw}
        options={{ 
          title: 'Sexual Harassment',
          headerStyle: {
          backgroundColor: '#FFF',
          },
          headerTintColor: '#790C5A',
          headerTitleStyle: {
          color: "#790C5A",
          fontWeight: 'bold',
          },
        }}
      />
      <TabTwoStack.Screen
        name="Workplace"
        component={Workplace}
        options={{ 
          title: 'Workplace',
          headerStyle: {
          backgroundColor: '#FFF',
          },
          headerTintColor: '#790C5A',
          headerTitleStyle: {
          color: "#790C5A",
          fontWeight: 'bold',
          },
        }}
      />
      <TabTwoStack.Screen
        name="Rape"
        component={Rape}
        options={{ 
          title: 'Rape',
          headerStyle: {
          backgroundColor: '#FFF',
          },
          headerTintColor: '#790C5A',
          headerTitleStyle: {
          color: "#790C5A",
          fontWeight: 'bold',
          },
        }}
      />
      <TabTwoStack.Screen
        name="Children"
        component={Children}
        options={{ 
          title: 'Children',
          headerStyle: {
          backgroundColor: '#FFF',
          },
          headerTintColor: '#790C5A',
          headerTitleStyle: {
          color: "#790C5A",
          fontWeight: 'bold',
          },
        }}
      />

    </TabTwoStack.Navigator>
    
  );
}

const TabThreeStack = createStackNavigator();

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
          headerTintColor: '#790C5A',
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
          headerTintColor: '#790C5A',
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
          headerTintColor: '#790C5A',
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
          headerTintColor: '#790C5A',
          headerTitleStyle: {
          color: "#790C5A",
          fontWeight: 'bold',
          },
        }}
      />
      <TabThreeStack.Screen
        name="SupportGroups"
        component={SupportGroups}
        options={{ 
          title: 'Support Groups',
          headerStyle: {
          backgroundColor: '#FFF',
          },
          headerTintColor: '#790C5A',
          headerTitleStyle: {
          color: "#790C5A",
          fontWeight: 'bold',
          },
        }}
      />
      <TabThreeStack.Screen
        name="Chat"
        component={Chat}
        options={({route}) => ({ 
          title: route.params.name,
          headerStyle: {
          backgroundColor: '#FFF',
          },
          headerTintColor: '#790C5A',
          headerTitleStyle: {
          color: "#790C5A",
          fontWeight: 'bold',
          },
        })}
      />

    </TabThreeStack.Navigator>
  );
}

const TabFourStack = createStackNavigator();

function TabFourNavigator() {
  return (
    <TabFourStack.Navigator>
      <TabFourStack.Screen
        name="TabFourScreen"
        component={TabFourScreen}
        options={{ 
          title: 'Profile',
          headerStyle: {
          backgroundColor: '#FFF',
          },
          headerTintColor: '#790C5A',
          headerTitleStyle: {
          color: "#790C5A",
          fontWeight: 'bold',
          },
        }}
      />
      <TabFourStack.Screen
        name="Notfound"
        component={NotFoundScreen}
        options={{ 
          title: 'Notfound',
          headerStyle: {
          backgroundColor: '#FFF',
          },
          headerTintColor: '#790C5A',
          headerTitleStyle: {
          color: "#790C5A",
          fontWeight: 'bold',
          },
        }}
      />
      <TabFourStack.Screen
        name="Login"
        component={Login}
        options={{ 
          title: 'Login',
          headerStyle: {
          backgroundColor: '#FFF',
          },
          headerTintColor: '#790C5A',
          headerTitleStyle: {
          color: "#790C5A",
          fontWeight: 'bold',
          },
        }}
      />

    <TabFourStack.Screen
        name="addEmergencyContact"
        component={addEmergencyContact}
        options={{ 
          title: 'Emergency Contacts',
          headerStyle: {
          backgroundColor: '#FFF',
          },
          headerTintColor: '#790C5A',
          headerTitleStyle: {
          color: "#790C5A",
          fontWeight: 'bold',
          },
        }}
      />
    </TabFourStack.Navigator>
  );
}

