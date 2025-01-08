import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { HEIGHT, WIDTH } from '../common/dimensions';
import { useSelector } from 'react-redux';
import { selectColorTheme } from '../reducers/colorThemeSlice';
import { dark, light } from '../common/colors';

interface promoProps {
    image?: string,
    btnText?: string,
    btnTextColor?: string,
    cardColor?: string,
    textColor?: string,
    background?: string
}

const PromoComponent: React.FC<promoProps> = (props) => {
    const { image, btnText, background } = props;
    const currentTheme = useSelector(selectColorTheme);
    const style1 = currentTheme === "dark" ? dark : light;

    return (
        <View style={styles.container}>
            <Image source={background} style={styles.backgroundImage} />

            <Image source={image} style={styles.promoImage} />
            <View style={styles.textContainer}>
                <Text style={[styles.promoText, { color: style1?.themeColor }]}>Special Deal For</Text>
                <Text style={[styles.promoText, { color: style1?.themeColor }]}>October</Text>
                <TouchableOpacity style={styles.promoButton}>
                    <Text style={styles.buttonText}>{btnText}</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default PromoComponent;
const styles = StyleSheet.create({
    container: {
        width: WIDTH * 0.87,
        alignSelf: 'center',
        marginBottom: HEIGHT * 0.02,
        backgroundColor: '#3DC279',
        borderRadius: WIDTH * 0.05,
        overflow: 'hidden',
        flexDirection: 'column',
        position: 'relative',
        height: HEIGHT * 0.2,
        marginRight: WIDTH * 0.05,
    },
    backgroundImage: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        width: '100%',
        height: '100%',
        opacity: 0.3,
        zIndex: 1,
    },


    promoImage: {
        width: '100%',
        height: HEIGHT * 0.3,
        position: 'absolute',
        left: -90,
        zIndex: 2,
        borderRadius: WIDTH * 0.05,
    },

    textContainer: {
        zIndex: 3,
        marginLeft: WIDTH * 0.45,
        marginTop: HEIGHT * 0.05,
    },

    promoText: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: HEIGHT * 0.01,
        // textAlign: 'right',
    },

    promoButton: {
        backgroundColor: '#fff',
        paddingVertical: 10,
        borderRadius: 5,
        marginTop: HEIGHT * 0.01,
        padding: 10,
        marginBottom: HEIGHT * 0.03,
        alignSelf: 'flex-start',
    },

    buttonText: {
        color: '#3DC279',
        fontWeight: '600',
        fontSize: 14,
        textAlign: 'center',
    },
});
