import React, { useEffect, useState, useRef } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar, View, Appearance, AppState } from 'react-native'
import { useTheme } from '@react-navigation/native';
import Splash from '../screens/Splash/index';
import Home from '../screens/MainScreen/Home/Index'
import MainDrawer from './DrawerNav';
const Stack = createStackNavigator();
const colorSchemee = Appearance.getColorScheme();

function MainNav(props) {
    const navigationRef = React.useRef();
    return (
        <NavigationContainer
            ref={navigationRef}
        >
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name="Splash" component={Splash} />
                <Stack.Screen name="Home" component={Home} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
export default MainNav;