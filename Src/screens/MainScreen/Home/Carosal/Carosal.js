import React from "react";
import Carousel from "react-native-snap-carousel";
// import { iconPath } from "../../../../constants/Icon";
import {
    StyleSheet,
    View,
    Image,
    Text,
    TouchableOpacity,
    Dimensions,
} from "react-native";
import { wp } from "../../../../Helpers/Responsiveness";
import { iconPath } from "../../../../constants/Icon";
import { test, BottomBanner } from "../../../../constants/Staticdata";
const { width: screenWidth } = Dimensions.get("window");
import makeStyles from "./styles";

const renderItem = ({ item }) => {
    const styles = makeStyles();
    return (
        <>
            <View style={styles.contianer}>
                <Text style={styles.aed}>From Aed</Text>
                <Text style={styles.amount}>{item.aed}</Text>
            </View>
            <View style={styles.top}>
                <Image source={item.img} style={styles.carousel} />

                <View style={styles.info}>
                    <View>
                        <Text style={styles.textOne}>No. of Apartments</Text>
                        <Text style={styles.text}>{item.apartments}</Text>
                    </View>
                    <View style={styles.verticleLine} />
                    <View>
                        <Text style={styles.textOne}>Category</Text>
                        <Text style={styles.text}>{item.category}</Text>
                    </View>
                    <View style={styles.verticleLine} />

                    <View>
                        <Text style={styles.textOne}>Floors</Text>
                        <Text style={styles.text}>{item.floors}</Text>
                    </View>
                </View>
            </View>
        </>
    );
};

const renderItemOne = ({ item }) => {
    const styles = makeStyles();

    return (
        <>
            <View style={styles.top}>
                <Image source={item.img} style={styles.carousel} />
            </View>
        </>
    );
};

const CarosalDiv = () => {
    const carouselRef = React.useRef();
    const carouselBottom = React.useRef();
    const styles = makeStyles();

    return (
        <View>
            <View style={styles.main}>
                <TouchableOpacity
                    style={styles.arrow}
                    onPress={() => carouselRef.current.snapToPrev()}
                >
                    <Image
                        source={{
                            uri: "https://cdn-icons-png.flaticon.com/512/271/271228.png",
                        }}
                        style={styles.arrowImgOne}
                    />
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.arrow}
                    onPress={() => carouselRef.current.snapToNext()}
                >
                    <Image
                        source={{
                            uri: "https://cdn-icons-png.flaticon.com/512/271/271228.png",
                        }}
                        style={styles.arrowImg}
                    />
                </TouchableOpacity>
            </View>
            <Carousel
                ref={carouselRef}
                sliderWidth={screenWidth}
                // sliderHeight={100}
                itemWidth={screenWidth}
                data={test}
                // autoplay
                // loop
                enableSnap
                renderItem={renderItem}
                enableMomentum
                layout={"default"}
                decelerationRate={66}
                overScrollMode={"never"}
                // scrollEventThrottle={100}
                snapToAlignment={"center"}
                autoplayInterval={7000}
            />
            <View style={styles.mainContainer}>
                <Text style={styles.heading}>LEVANTO ORO24</Text>
                <Text style={styles.subheading}>REGISTRATION NUMBER ORX43</Text>
                <Text style={styles.details}>Dubai at Juvian Village</Text>

                <Text style={styles.detail}>
                    centuries, but also the leap into electro was popularised in the 1960s
                    with the release of Letm Ipsum passages, and more recently with
                    desktop publishing software like Aldus PageMaker including versions of
                    Lorem Ipsum.
                </Text>
                <Text style={styles.detail}>
                    centuries, but also the leap into electro was popularised in the 1960s
                    with the release of Letraset sheerecently with desktop publishing
                    software like Aldus PageMaker including versions of Lorem Ipsum.
                </Text>
            </View>
            <View style={styles.mainOne}>
                <TouchableOpacity
                    style={styles.arrow}
                    onPress={() => carouselBottom.current.snapToPrev()}
                >
                    <Image
                        source={{
                            uri: "https://cdn-icons-png.flaticon.com/512/271/271228.png",
                        }}
                        style={styles.arrowImgOne}
                    />
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.arrow}
                    onPress={() => carouselBottom.current.snapToNext()}
                >
                    <Image
                        source={{
                            uri: "https://cdn-icons-png.flaticon.com/512/271/271228.png",
                        }}
                        style={styles.arrowImg}
                    />
                </TouchableOpacity>
            </View>
            <Text style={[styles.heading, { textAlign: "center", marginBottom: 10 }]}>
                AMENTIES
            </Text>
            <Carousel
                ref={carouselBottom}
                sliderWidth={screenWidth}
                // sliderHeight={100}
                itemWidth={screenWidth}
                data={BottomBanner}
                // autoplay
                // loop
                enableSnap
                renderItem={renderItemOne}
                enableMomentum
                layout={"default"}
                decelerationRate={66}
                overScrollMode={"never"}
                // scrollEventThrottle={100}
                snapToAlignment={"center"}
                autoplayInterval={7000}
            />
        </View>
    );
}

export default CarosalDiv;
