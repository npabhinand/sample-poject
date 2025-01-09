import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { HEIGHT, WIDTH } from '../common/dimensions';
import { useSelector } from 'react-redux';
import { selectColorTheme } from '../reducers/colorThemeSlice';

interface promoProps {
    image?: any;
    btnText?: string;
    btnTextColor?: string;
    cardColor?: string;
    textColor?: string;
    background?: any;
}

const PromoComponent: React.FC<promoProps> = (props) => {
    const { image, btnText, background } = props;
    const currentTheme = useSelector(selectColorTheme);

    return (
        <View style={styles.container}>
            <Image source={background} style={styles.backgroundImage} tintColor={currentTheme.themeColor} />

            <View style={styles.contentContainer}>
                <Image source={image} style={styles.promoImage} />

                <View style={styles.textContainer}>
                    <Text style={[styles.promoText, { color: currentTheme.themeColor }]}>Special Deal For</Text>
                    <Text style={[styles.promoText, { color: currentTheme.themeColor }]}>October</Text>
                    <TouchableOpacity style={styles.promoButton}>
                        <Text style={styles.buttonText}>{btnText}</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

export default PromoComponent;

const styles = StyleSheet.create({
    container: {
        width: WIDTH * 0.88,
        marginBottom: HEIGHT * 0.01,
        backgroundColor: '#3DC279',
        borderRadius: WIDTH * 0.05,
        overflow: 'hidden',
        height: HEIGHT * 0.19,
        marginLeft: WIDTH * 0.05,
    },
    backgroundImage: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        opacity: 0.3,
        // bottom: -50
    },
    contentContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingHorizontal: WIDTH * 0.03,
        height: '100%',
    },
    promoImage: {
        height: HEIGHT * 0.45,
        width: HEIGHT * 0.20,
        borderRadius: WIDTH * 0.05,
        // marginRight: WIDTH * 0.04,
        marginTop: HEIGHT * 0.1,
    },
    textContainer: {
        justifyContent: 'flex-end',
        // marginLeft: WIDTH * 0.1,
        alignItems: 'flex-start',
    },
    promoText: {
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'left',
    },
    promoButton: {
        backgroundColor: '#fff',
        paddingVertical: 10,
        borderRadius: 5,
        marginTop: HEIGHT * 0.02,
        padding: 5,
        width: WIDTH * 0.2,
    },
    buttonText: {
        color: '#3DC279',
        fontWeight: '600',
        fontSize: 12,
        textAlign: 'center',
    },
});
