import React, { useState } from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity, FlatList } from "react-native";
import { iconPath } from "../../../../constants/Icon";
import { hp, wp } from "../../../../Helpers/Responsiveness";
import ResponsiveText from "../../../../components/RnText";
const Data = [
    { id: 1, name: 'HOME', iconLogo: iconPath.HomeIcon },
    { id: 2, name: 'OUR STORY', iconLogo: iconPath.Story },
    { id: 3, name: 'OUR DEVELOPMENTS', iconLogo: iconPath.Developmets },
    { id: 4, name: 'CONSTRUCTION UPDATES', iconLogo: iconPath.construction },
    { id: 5, name: 'NEWS, EVENTS AND BLOGS', iconLogo: iconPath.news },
    { id: 6, name: 'LEADERSHIP', iconLogo: iconPath.Developmets },
    { id: 7, name: 'AWARDS', iconLogo: iconPath.award },
    { id: 8, name: 'PARTNERS', iconLogo: iconPath.partners },
]
const Options = (props) => {
    const { onButtonPress } = props;
    const styles = makeStyles()

    const renderItem = ({ item }) => {
        return (
            <View style={[{ paddingVertical: wp(4), backgroundColor: "white" }, item.id == 8 ? { paddingBottom: wp(18) } : { marginBottom: 0 }]}>
                <TouchableOpacity onPress={onButtonPress} style={[styles.flatlistDiv,]}>
                    <Image source={item.iconLogo} style={styles.iconSize} />
                    <View style={{ marginLeft: 10 }}>
                        <ResponsiveText size={'h5'} color={'#4D4D4D'} >
                            {item.name}
                        </ResponsiveText>
                    </View>
                </TouchableOpacity>
            </View>
        )

    }
    return (
        <View style={styles.OptionContainer}>
            <FlatList
                data={Data}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}

            />

        </View>
    );
}
export default Options;

const makeStyles = () => StyleSheet.create({
    OptionContainer: {
        borderTopWidth: 1,
        borderTopColor: '#C7C7C7',
        flex: 1,
        marginBottom: 15,
        marginHorizontal: 10
    },
    flatlistDiv: {
        // borderWidth: 2,
        marginTop: 1,
        flexDirection: 'row',
        paddingLeft: 20,
        alignItems: 'center'

    },
    iconSize: {
        width: wp(6),
        height: wp(6),
        tintColor: '#4D4D4D'
    }

})

