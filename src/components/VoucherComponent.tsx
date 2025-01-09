import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { HEIGHT, WIDTH } from '../common/dimensions';
import { useSelector } from 'react-redux';
import { selectColorTheme } from '../reducers/colorThemeSlice';

interface VoucherPromoProps {
    image?: any;
    btnText?: string;
    btnTextColor?: string;
    cardColor?: string;
    textColor?: string;
    background?: any;
}

const VoucherComponent: React.FC<VoucherPromoProps> = (props) => {
    const { image, btnText, background, textColor, btnTextColor } = props;
    const currentTheme = useSelector(selectColorTheme);

    return (
        <View style={styles.container}>
            <Image source={background} style={styles.backgroundImage} tintColor={currentTheme.themeColor} />

            {/* <View style={styles.contentContainer}> */}
            <Image source={image} style={styles.promoImage} />

            <View style={styles.textContainer}>
                <Text style={[styles.promoText, { color: textColor }]}>Special Deal For</Text>
                <Text style={[styles.promoText, { color: textColor }]}>October</Text>
                <TouchableOpacity style={styles.promoButton}>
                    <Text style={[styles.buttonText, { color: btnTextColor }]}>Order Now</Text>
                </TouchableOpacity>
                {/* </View> */}
            </View>
        </View>
    );
};


export default VoucherComponent;

const styles = StyleSheet.create({
    container: {
        width: WIDTH * 0.90,
        alignSelf: 'center',
        marginBottom: HEIGHT * 0.01,
        backgroundColor: '#3DC279',
        borderRadius: WIDTH * 0.05,
        overflow: 'hidden',
        height: HEIGHT * 0.16,
    },
    backgroundImage: {
        position: 'absolute',
        width: '110%',
        height: '105%',
        opacity: 0.3,
    },

    promoImage: {
        height: HEIGHT * 0.19,
        position: 'absolute',
        borderRadius: WIDTH * 0.05,
    },
    textContainer: {
        marginTop: HEIGHT * 0.02,
        marginLeft: WIDTH * 0.5,
        justifyContent: 'flex-end',
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

