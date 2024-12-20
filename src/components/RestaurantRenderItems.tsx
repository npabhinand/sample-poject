import React from 'react';
import { Dimensions, Image, StyleSheet, Text, View } from 'react-native';

function RestaurantRenderItems({ item }: any) {

    return (
        <View style={styles.card}>
            <Image style={styles.image} source={item.imgURL} />
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.time}>{item.time} mins</Text>
        </View>
    );
}

export default RestaurantRenderItems;

const HEIGHT = Dimensions.get('screen').height;
const WIDTH = Dimensions.get('screen').width;
const styles = StyleSheet.create({
    card: {
        width: WIDTH * 0.4,
        height: HEIGHT * 0.22,
        marginBottom: 15,
        backgroundColor: '#FFFFFF',
        padding: 10,
        borderRadius: 20,
        // shadowColor: '#F6F7FE',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.02,
        shadowRadius: 4,
        elevation: 3,
        marginLeft: WIDTH * 0.05,
    },
    image: {
        // width: '100%',
        height: HEIGHT * 0.1,
        alignSelf: 'center',
    },
    name: {
        fontSize: 16,
        fontWeight: 'bold',
        marginVertical: 5,
        textAlign: 'center',
        marginTop: HEIGHT * 0.02,
    },
    time: {
        fontSize: 14,
        color: '#888',
        textAlign: 'center',
    },
});

