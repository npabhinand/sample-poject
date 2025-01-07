import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { HEIGHT, WIDTH } from '../common/dimensions';
import { useSelector } from 'react-redux';
import { selectColorTheme } from '../reducers/colorThemeSlice';


interface promoProps {
    image?: {},
    btnText?: string,
    btnTextColor?: string,
    cardColor?: string,
    textColor?: string,
}


const PromoComponent: React.FC<promoProps> = (props) => {
    const { image, btnText } = props;
    const currentTheme = useSelector(selectColorTheme);
    // btnTextColor, cardColor, textColor
    return (
        <View style={styles.imageContainer}>
            <Image source={image} />
            <View style={styles.textContainer}>
                <Text style={[styles.promoText, { color: currentTheme['themeColor'] }]}>Special Deal For</Text>
                <Text style={[styles.promoText, { color: currentTheme['themeColor'] }]}>October</Text>
                <TouchableOpacity style={styles.promoButton}>
                    <Text style={styles.buttonText}>{btnText}</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};


export default PromoComponent;

const styles = StyleSheet.create({
    imageContainer: {
        width: WIDTH * 0.87,
        alignSelf: 'center',
        marginBottom: HEIGHT * 0.02,
        backgroundColor: '#3DC279',
        borderRadius: WIDTH * 0.05,
        flexDirection: 'row',
        marginRight: WIDTH * 0.05,

    },
    textContainer: {
        position: 'absolute',
        top: 15,
        marginTop: HEIGHT * 0.01,
        right: 15,
        marginBottom: 20,
        // alignItems: 'center',
    },
    promoText: {
        fontSize: 18,
        fontWeight: 'bold',
        // color: '#fff',
        // textAlign: 'center',
    },
    promoButton: {
        backgroundColor: '#fff',
        paddingVertical: 10,
        borderRadius: 5,
        marginTop: HEIGHT * 0.02,
        width: WIDTH * 0.2,
        marginBottom: HEIGHT * 0.03,
    },
    buttonText: {
        color: '#3DC279',
        fontWeight: '600',
        fontSize: 11,
        textAlign: 'center',
    },
});
