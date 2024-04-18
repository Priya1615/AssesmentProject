import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginScreen from '../Screens/LoginScreen';
import SignUpScreen from '../Screens/SignUpScreen';
import HomeScreen from '../Screens/HomeScreen';
import SplashScreen from '../Screens/SplashScreen';
import ForgetPassScreen from '../Screens/ForgetPassScreen';
import NewPassScreen from '../Screens/NewPassScreen';
import SettingScreen from '../Screens/SettingScreen';
import TaskScreen from '../Screens/TaskScreen';




import OtpScreen from '../Screens/OtpScreen';

import {createDrawerNavigator} from '@react-navigation/drawer';
const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
const Home: React.FC = () => {
  return (
    <Drawer.Navigator
      // screenOptions={{
      //   headerShown: false,
      // }}
      initialRouteName="SplashScreen">
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="Settings" component={HomeScreen} />
      <Drawer.Screen name="Tasks" component={TaskScreen} />
      
      
    </Drawer.Navigator>
  );
};
const StackRoutes: React.FC = () => {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="SplashScreen">
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="SplashScreen" component={SplashScreen} />
      <Stack.Screen name="ForgetPassScreen" component={ForgetPassScreen} />
      <Stack.Screen name="NewPassScreen" component={NewPassScreen} />
      <Stack.Screen name="OtpScreen" component={OtpScreen} />
      <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
};

export default StackRoutes;
