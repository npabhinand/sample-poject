import { ImageBackground, StyleSheet, Dimensions } from 'react-native';
import React from 'react';
import { backgroundImage1 } from '../assets/images';

const BackgroundImage = () => {
    return (
        <>
            <ImageBackground
                source={backgroundImage1}
                style={styles.backgroundImage} />
        </>
    );
};

export default BackgroundImage;
const HEIGHT = Dimensions.get('screen').height;
const WIDTH = Dimensions.get('screen').width;

const styles = StyleSheet.create({
    backgroundImage: {
        height: HEIGHT * 0.3,
        width: WIDTH * 1,
        opacity: 0.1,
        position: 'absolute',
        right: 0,
        resizeMode: 'cover',
        top: HEIGHT * -0.04,
    },
});
