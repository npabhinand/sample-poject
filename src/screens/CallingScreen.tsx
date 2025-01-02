import React, { useState, useEffect } from 'react';
import { TouchableOpacity, View, Image, StyleSheet, ImageBackground } from 'react-native';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import CallingComponent from '../components/CallingComponent';
import { closeIcon, volumeOffIcon, volumeUpIcon } from '../assets/icons';
import { backgroundImage2, personImage } from '../assets/images';
import { HEIGHT, WIDTH } from '../global/dimensions';
import { RootStackParamList } from '../navigation/AppNavigator';


const CallingScreen = () => {
    const [ended, setEnded] = useState(false);
    const [muted, setMuted] = useState(false);
    const navigation = useNavigation<NavigationProp<RootStackParamList, 'MenuDetailScreen'>>();

    useEffect(() => {
        if (ended) {
            const timeout = setTimeout(() => {
                navigation.navigate('RateDriverScreen');
            }, 5000);

            return () => clearTimeout(timeout);
        }
    }, [ended, navigation]);

    return (
        <View style={styles.container}>
            <ImageBackground source={backgroundImage2}>
                <CallingComponent name={'Courtney Henry'} isEnded={ended} image={personImage} />
                <View style={styles.buttonContainer}>
                    <TouchableOpacity
                        style={[styles.buttonSize, styles.volumeButton]}
                        onPress={() => setMuted(!muted)}
                    >
                        <Image source={muted ? volumeOffIcon : volumeUpIcon} />
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => setEnded(true)}
                        style={[styles.buttonSize, styles.closeButton]}
                    >
                        <Image source={closeIcon} />
                    </TouchableOpacity>
                </View>
            </ImageBackground>
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
        top: HEIGHT * 0.8,
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
