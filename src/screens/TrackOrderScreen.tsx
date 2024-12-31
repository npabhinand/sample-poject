import { View, Text, Image, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import React from 'react';
import { deliveryBoyImage, line, mapImage, pattern2, track } from '../assets/images';
import ChatTitleComponent from '../components/ChatTitleComponent';
import { callIcon, clockIcon, mapIcon, pathIcon } from '../assets/icons';

const HEIGHT = Dimensions.get('screen').height;
const WIDTH = Dimensions.get('screen').width;
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../navigation/AppNavigator';

const TrackOrderScreen = () => {
    const navigation = useNavigation<NavigationProp<RootStackParamList, 'HomeTab'>>();
    return (
        <View style={styles.container}>
            <Image style={styles.backgroundImage} source={mapImage} />
            <ChatTitleComponent />
            <View style={styles.track} >

                <Image source={track} />
                <View style={styles.timeContainer}>
                    <Image source={clockIcon} />
                    <Text>25 min</Text>
                </View>
            </View>

            <Image source={line} style={styles.line} />

            <View style={styles.card}>
                <Image source={pattern2} style={styles.cardBackground} />
                <Text style={styles.title}>Track Orders</Text>
                <View style={styles.locationContainer}>
                    <Image source={deliveryBoyImage} style={styles.locationIcon} />
                    <View>
                        <Text style={styles.nameText}>Mr Kemplas</Text>
                        <View style={styles.row}>
                            <Image source={mapIcon} />
                            <Text style={styles.text}>25 minutes on the way</Text>
                        </View>
                    </View>

                </View>
                <View style={styles.btnContainer}>
                    <TouchableOpacity style={styles.callButton} onPress={() => { navigation.navigate('HomeTab'); }}>
                        <Image source={callIcon} />
                        <Text style={styles.buttonText}>Call</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.MessageButton}>
                        <View style={styles.btnView}>
                            <Image source={pathIcon} style={styles.imagePosition} />
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

export default TrackOrderScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 10,
        marginTop: 10,
        position: 'relative',
    },
    backgroundImage: {
        resizeMode: 'repeat',
        position: 'absolute',
        marginTop: HEIGHT * 0.03,
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
        bottom: 20,
        alignSelf: 'center',
        height: HEIGHT * 0.28,
        borderRadius: WIDTH * 0.03,
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
        width: WIDTH * 0.6,
        height: HEIGHT * 0.06,
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
        height: HEIGHT * 0.06,
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
    },
});


