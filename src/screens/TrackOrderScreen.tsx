import { View, Text, Image, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import React from 'react';
import { darkMapImage2, deliveryBoyImage, greenCar, line, line2, mapImage, pattern2, track } from '../assets/images';
import ChatTitleComponent from '../components/ChatTitleComponent';
import { callIcon, clockIcon, mapIcon, pathIcon } from '../assets/icons';

const HEIGHT = Dimensions.get('screen').height;
const WIDTH = Dimensions.get('screen').width;
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../navigation/AppNavigator';
import { useSelector } from 'react-redux';
import { selectColorTheme } from '../reducers/colorThemeSlice';

const TrackOrderScreen = () => {
    const navigation = useNavigation<NavigationProp<RootStackParamList, 'HomeTab'>>();
    const currentTheme = useSelector(selectColorTheme);
    return (
        <View style={styles.container}>
            <Image style={styles.backgroundImage} source={currentTheme.name === 'dark' ? darkMapImage2 : mapImage} />
            <ChatTitleComponent />
            <View style={styles.track} >
                {currentTheme.name === 'dark' ?
                    <Image source={greenCar} style={{ marginBottom: HEIGHT * 0.07, marginLeft: 18 }} />
                    : <Image source={track} />
                }
                <View style={[styles.timeContainer, { bottom: currentTheme.name === 'dark' ? 25 : undefined }]}>
                    <Image source={clockIcon} />
                    <Text>25 min</Text>
                </View>
            </View>
            {currentTheme.name === 'dark' ?
                <Image style={styles.line2} source={line2} />
                : <Image style={styles.line} source={line} />
            }


            <View style={[styles.card, { backgroundColor: currentTheme['themeColor'] }]}>
                <Image source={pattern2} style={[styles.cardBackground,]} />
                <Text style={[styles.title, { color: currentTheme['defaultTextColor'] }]}>Track Orders</Text>
                <View style={[styles.locationContainer, { backgroundColor: currentTheme['lightWhite'] }]}>
                    <Image source={deliveryBoyImage} style={styles.locationIcon} />
                    <View >
                        <Text style={[styles.nameText, { color: currentTheme['defaultTextColor'] }]}>Mr Kemplas</Text>
                        <View style={styles.row}>
                            <Image source={mapIcon} />
                            <Text style={styles.text}>25 minutes on the way</Text>
                        </View>
                    </View>

                </View>
                <View style={styles.btnContainer}>
                    <TouchableOpacity style={[styles.callButton, { backgroundColor: currentTheme.name === "dark" ? "#45D984" : "#fff" }]} onPress={() => { navigation.navigate('HomeTab'); }}>
                        <Image source={callIcon} style={{ tintColor: currentTheme.name === "dark" ? "#fff" : "#45D984" }} />
                        <Text style={[styles.buttonText, { color: currentTheme.name === "dark" ? "#fff" : "#45D984" }]}>Call</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.MessageButton, { backgroundColor: currentTheme.name === "dark" ? "#fff" : "#45D984" }]}>
                        <View style={[styles.btnView, { backgroundColor: currentTheme.name === "dark" ? "#45D984" : "#fff" }]}>
                            <Image source={pathIcon} style={[styles.imagePosition, { tintColor: currentTheme.name === "dark" ? "#fff" : "#45D984" }]} />
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        </View >
    );
};

export default TrackOrderScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    backgroundImage: {
        resizeMode: 'cover',
        position: 'absolute',
        width: '100%',
        height: '100%',
        // marginTop: HEIGHT * 0.03,
    }, track: {
        marginLeft: WIDTH * 0.47,
        flexDirection: 'row',

    }, imagePosition: { position: 'absolute' },
    line: {
        marginLeft: WIDTH * 0.47,
        marginTop: HEIGHT * -0.034,
    },
    timeContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 10,
        gap: 10,
        padding: 10,
        backgroundColor: '#fff',
        height: HEIGHT * 0.05,
        borderRadius: HEIGHT * 0.02,
    },
    card: {
        backgroundColor: '#FAFDFF',
        width: WIDTH * 0.9,
        padding: 10,
        position: 'absolute',
        bottom: HEIGHT * 0.03,
        alignSelf: 'center',
        height: HEIGHT * 0.28,
        borderRadius: WIDTH * 0.05,
        // left: 20,
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
        margin: HEIGHT * 0.01,
        marginBottom: HEIGHT * 0.02,
        marginTop: HEIGHT * 0.01,

    },
    locationContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
        backgroundColor: '#fff',
        height: HEIGHT * 0.1,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.05,
        shadowRadius: 4,
        borderRadius: HEIGHT * 0.02,
        // margin: 10

    },
    cardBackground: {
        position: 'absolute',
        opacity: 1.5,
        overflow: 'hidden',
        alignSelf: 'center',

    },
    locationIcon: {
        // width: 20,
        // height: 20,
        margin: WIDTH * 0.02,
    },
    nameText: {
        fontSize: 15,
        color: '#333',
        fontWeight: 'bold',
    },
    row: { flexDirection: 'row', alignItems: 'center', marginTop: WIDTH * 0.02 }
    , callButton: {
        backgroundColor: '#fff',
        width: WIDTH * 0.67,
        height: HEIGHT * 0.07,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        flexDirection: 'row',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.05,
        shadowRadius: 4,
    },
    text: {
        marginLeft: WIDTH * 0.03,
        color: '#D3D3D3',
        fontSize: 15,
    },
    buttonText: {
        textAlign: 'center',
        color: '#45D984',
        fontSize: 14,
        fontWeight: '500',
        marginLeft: WIDTH * 0.03,
    },
    btnContainer: {
        flexDirection: 'row',
        marginTop: HEIGHT * 0.01,
        justifyContent: 'space-between',
        alignItems: 'center',
        // borderWidth: 1,
    }, MessageButton: {
        backgroundColor: '#45D984',
        height: HEIGHT * 0.07,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        width: WIDTH * 0.15,

    },
    btnView: {
        height: 20,
        width: 20,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
        // tint
    }, line2: {
        marginLeft: WIDTH * 0.55,
        bottom: WIDTH * 0.18,
    },
});


