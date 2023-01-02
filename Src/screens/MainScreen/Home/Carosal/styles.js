import { StyleSheet } from "react-native";
import { wp } from "../../../../Helpers/Responsiveness";
const makeStyles = (colors) =>
    StyleSheet.create({
        contianer: {
            backgroundColor: "#fff",
            padding: 4,
            borderRadius: 10,
            top: 40,
            zIndex: 1,
            width: "28%",
            right: 28,
            top: 16,
            justifyContent: "flex-end",
            position: "absolute",
            justifyContent: "center",
            alignItems: "center",
        },
        aed: {
            color: "#000",
            fontWeight: "bold",
        },
        amount: {
            color: "#000",
        },
        top: {
            alignItems: "center",
            justifyContent: "center",
        },
        main: {
            flexDirection: "row",
            justifyContent: "space-between",
            width: "84%",
            // position: "absolute",
            top: 120,
            zIndex: 1,
            alignSelf: "center",
        },
        mainOne: {
            flexDirection: "row",
            justifyContent: "space-between",
            width: "84%",
            // position: "absolute",
            top: 160,
            zIndex: 1,
            alignSelf: "center",
        },
        arrow: {
            height: 20,
            width: 20,
            backgroundColor: "#fff",
            borderRadius: 100,
            justifyContent: "center",
            alignItems: "center",
        },
        arrowImgOne: {
            height: 10,
            width: 10,
            resizeMode: "contain",
            transform: [{ rotate: "180deg" }],
        },
        arrowImg: {
            height: 10,
            width: 10,
            resizeMode: "contain",
        },
        arrowImg: {
            height: 10,
            width: 10,
            resizeMode: "contain",
        },

        carousel: {
            borderRadius: 10,
            width: "90%",
            height: wp(62.2),
            resizeMode: "cover",
        },
        info: {
            backgroundColor: "#E9EEFF",
            width: "80%",
            borderRadius: 5,
            alignItems: "center",
            flexDirection: "row",
            justifyContent: "space-between",
            paddingHorizontal: 20,
            paddingVertical: 10,
            bottom: 30,
        },
        text: {
            color: "#000",
            textAlign: "center",
        },
        textOne: {
            color: "#000",
            textAlign: "center",
        },
        heading: {
            color: "#000",
            fontWeight: "500",
            fontSize: 16,
        },
        subheading: {
            color: "#000",
            fontWeight: "500",
            marginTop: 4,
        },
        detail: {
            color: "#000",
            marginTop: 10,
        },
        details: {
            color: "#000",
        },
        mainContainer: {
            borderRadius: 20,
            marginHorizontal: 16,
            paddingHorizontal: 16,
            paddingVertical: 16,
            marginVertical: -10,
            marginBottom: 20,
            backgroundColor: "#EAEAEA",
        },
        verticleLine: {
            height: "100%",
            width: 1,
            backgroundColor: "#909090",
        },
    });
export default makeStyles;
