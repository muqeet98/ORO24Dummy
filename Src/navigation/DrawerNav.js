import * as React from 'react';
import { Button, View, Image, StyleSheet, Text } from 'react-native';
import { useTheme } from '@react-navigation/native';
import { iconPath } from '../constants/Icon';
import Home from '../screens/MainScreen/Home/Index'
import Story from '../screens/MainScreen/Story/Index'
import Developments from '../screens/MainScreen/Developments/Index'
import { createDrawerNavigator } from '@react-navigation/drawer';
const Drawer = createDrawerNavigator();

const MainDrawer = (props) => {
    const { colors } = useTheme();
    const styles = makeStyles(colors)
    return (

        <Drawer.Navigator
            drawerContentOptions={{
                activeTintColor: '#fff', labelStyle: {
                    marginLeft: -20,

                }
            }}
        >
            <Drawer.Screen name="Home" component={Home} options={{

                drawerIcon: ({ color, focused, size, activeTintColor, }) => {
                    return (
                        <Image source={iconPath.HomeIcon} style={[styles.iconstyle]}
                            resizeMode='cover'
                        />
                    )
                },
            }} />

            <Drawer.Screen name="Story" component={Story} options={{

                drawerIcon: ({ color }) => {
                    return (
                        <Image source={iconPath.Story} style={[styles.iconstyle,]}
                            resizeMode='cover'
                        />
                    )
                },
            }} />
        </Drawer.Navigator>
    );
}

export default MainDrawer;

const makeStyles = (colors) => StyleSheet.create({
    container: {
        flex: 1,
    },
    iconstyle: {
        width: 25,
        height: 25
    }
})