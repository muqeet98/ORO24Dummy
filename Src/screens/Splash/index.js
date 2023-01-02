import React, { useEffect } from "react";
import { View, Text, Image } from "react-native";
import { iconPath } from "../../constants/Icon";
import { hp, wp } from "../../Helpers/Responsiveness";

const Index = (props) => {
    useEffect(() => {
        setTimeout(() => {
            props.navigation.navigate('Home', {
                screen: 'Home',
            });
        }, 2000);
    }, [])
    return (
        <View style={{ flex: 1 }}>
            <Image source={iconPath.Splash} style={{ height: hp(100), width: wp(100) }} />
        </View>
    );
}
export default Index;
