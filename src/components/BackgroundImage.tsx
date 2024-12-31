import { ImageBackground, StyleSheet } from 'react-native';
import React from 'react';
import { backgroundImage1 } from '../assets/images';
import { HEIGHT, WIDTH } from '../global/dimensions';

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


const styles = StyleSheet.create({
    backgroundImage: {
        height: HEIGHT * 0.3,
        width: WIDTH * 1,
        opacity: 0.1,
        position: 'absolute',
        right: HEIGHT * 0,
        resizeMode: 'cover',
        top: HEIGHT * -0.08,
        tintColor: '#48E087',
    },
});
