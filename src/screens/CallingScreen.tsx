import React, { useState, useEffect } from 'react';
import { Dimensions, TouchableOpacity, View, Image, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import CallingComponent from '../components/CallingComponent';
import BackgroundImage2 from '../components/ChatBackgroundImage';
import { closeIcon, volumeOffIcon, volumeUpIcon } from '../assets/icons';
import { personImage } from '../assets/images';

const HEIGHT = Dimensions.get('screen').height;
const WIDTH = Dimensions.get('screen').width;

const CallingScreen = () => {
    const [ended, setEnded] = useState(false);
    const [clicked, setClicked] = useState(false);
    const navigation = useNavigation();

    useEffect(() => {
        if (ended) {
            const timeout = setTimeout(() => {
                navigation.navigate('RatingDriverScreen'); // Navigate after 5 seconds
            }, 5000);

            return () => clearTimeout(timeout); // Cleanup timeout on component unmount
        }
    }, [ended, navigation]);

    return (
        <View style={styles.container}>
            <BackgroundImage2 />
            <CallingComponent name={"Courtney Henry"} isEnded={ended} image={personImage} />
            <View style={styles.buttonContainer}>
                <TouchableOpacity
                    style={[styles.buttonSize, styles.volumeButton]}
                    onPress={() => setClicked(!clicked)}
                >
                    <Image source={clicked ? volumeOffIcon : volumeUpIcon} />
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => setEnded(true)}
                    style={[styles.buttonSize, styles.closeButton]}
                >
                    <Image source={closeIcon} />
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default CallingScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    buttonContainer: {
        position: 'absolute',
        bottom: HEIGHT * 0.1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: WIDTH,
        gap: 20,
    },
    buttonSize: {
        justifyContent: 'center',
        width: 80,
        height: 80,
        borderRadius: 40,
        alignItems: 'center',
    },
    volumeButton: {
        backgroundColor: '#EAFAF2',
    },
    closeButton: {
        backgroundColor: '#FF4B4B',
    },
});
