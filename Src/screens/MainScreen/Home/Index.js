import React, { useState } from "react";
import { View, Text, Image, StyleSheet, Modal, Alert, Button } from "react-native";
import { iconPath } from "../../../constants/Icon";
import { hp, wp } from "../../../Helpers/Responsiveness";
import ResponsiveText from "../../../components/RnText";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import Options from "./Options/Option";
// import Carosal from "./Carosal/Carosal";
import Carosal from "./Carosal/Carosal";
const Index = () => {
    const [opened, setOpened] = useState(false)
    const styles = makeStyles()
    const [modalVisible, setModalVisible] = useState(false);
    const closeModal = () => {
        setModalVisible(false);
    };

    const handleButtonPress = () => {
        setModalVisible(false);
    };
    return (
        <View style={styles.container}>
            <View style={styles.headercontainer}>
                <View>
                    <TouchableOpacity onPress={() => setModalVisible(!modalVisible)}>
                        <Image source={opened ? iconPath.close : iconPath.Menu} style={styles.headericon} />
                    </TouchableOpacity>
                </View>
                <View>
                    <TouchableOpacity onPress={() => setModalVisible(!modalVisible)}>
                        <Image source={iconPath.OroLogo} style={styles.headerLogo} />
                    </TouchableOpacity>
                </View>
            </View>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onDismiss={closeModal}
                onRequestClose={() => {
                    Alert.alert('Modal has been closed.');
                }}
            >
                <View style={{ marginTop: wp(15), width: wp(100), height: hp(100) }}>
                    <Options onButtonPress={handleButtonPress} />
                </View>
            </Modal>

            <ScrollView>

                {/* {opened ?
                    <Options />
                    : null} */}

                <Carosal />
                <View style={styles.marginTop} />

            </ScrollView>
            {/* <View style={}>

            </View> */}
            <Image source={iconPath.bottombar_new} style={styles.barstyle} />

        </View>
    );
}
export default Index;

const makeStyles = () => StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#F2F2F2",
        // alignItems: 'center',
    },
    headercontainer: {
        // height: wp(20),
        alignSelf: 'center',
        width: wp(95),
        borderRadius: 10,
        backgroundColor: 'white',
        marginTop: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: wp(3),
        paddingHorizontal: wp(2)
    },
    headericon: {
        height: wp(9),
        width: wp(9),
        marginLeft: wp(1)
    },
    headericon: {
        height: wp(7),
        width: wp(7),
        marginLeft: wp(1)
    },
    headerLogo: {
        height: 29,
        width: 70,
        resizeMode: 'contain',
    },
    marginTop: {
        marginTop: wp(10)
    },
    barstyle: {
        width: wp(100),
        height: wp(17),
        // resizeMode: 'contain'
    }
})

