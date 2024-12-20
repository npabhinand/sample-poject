import React from 'react';
import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { promoImage } from '../assets/images';

export function PromoComponent() {
    return (
        <View style={styles.imageContainer}>
            <Image source={promoImage} />
            <View style={styles.textContainer}>
                <Text style={styles.promoText}>Special Deal For</Text>
                <Text style={styles.promoText}>October</Text>
                <TouchableOpacity style={styles.promoButton}>
                    <Text style={styles.buttonText}>Buy Now</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}


// const HEIGHT = Dimensions.get('screen').height;
const WIDTH = Dimensions.get('screen').width;
const styles = StyleSheet.create({
    imageContainer: {
        width: WIDTH * 0.9,
        justifyContent: 'center',
        marginBottom: 10,
        backgroundColor: '#3DC279',
        borderRadius: 20,
        flexDirection: 'row',
        margin: 20,

    },
    textContainer: {
        position: 'absolute',
        top: 25,
        // left: 10,
        right: 15,
        // alignItems: 'center',
    },
    promoText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#fff',
        // textAlign: 'center',
    },
    promoButton: {
        backgroundColor: '#fff',
        paddingVertical: 10,
        borderRadius: 5,
        marginTop: 15,
        width: WIDTH * 0.2,
    },
    buttonText: {
        color: '#3DC279',
        fontWeight: '600',
        fontSize: 11,
        textAlign: 'center',
    },
});
