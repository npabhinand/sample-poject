import React, { useState } from 'react';
import { Dimensions, StyleSheet, View, Image, Text, TouchableOpacity } from 'react-native';

const HEIGHT = Dimensions.get('screen').height;
const WIDTH = Dimensions.get('screen').width;

function OrderRenderItems({ item }: any) {
    const [counter, setCounter] = useState(1);

    const handleIncrease = () => {
        setCounter(counter + 1);
    };

    const handleDecrease = () => {
        if (counter > 1) {
            setCounter(counter - 1);
        }
    };

    return (
        <View style={styles.orderItems}>
            <Image source={item.imgURL} style={styles.image} />
            <View style={styles.textContainer}>
                <Text style={styles.orderTitle}>{item.DishName}</Text>
                <Text style={styles.orderName}>{item.restaurantName}</Text>
                <Text style={styles.orderPrice}>$ {item.price}</Text>
            </View>
            <View style={styles.counterContainer}>
                <TouchableOpacity onPress={handleDecrease} style={styles.reduceButton}>
                    <Text style={styles.reduceText}>-</Text>
                </TouchableOpacity>
                <Text>{counter}</Text>
                <TouchableOpacity onPress={handleIncrease} style={styles.addButton}>
                    <Text style={styles.addText}>+</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}


export default OrderRenderItems;

const styles = StyleSheet.create({
    orderItems: {
        width: WIDTH * 0.95,
        height: HEIGHT * 0.11,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 10,
        backgroundColor: '#FFFFFF',
        padding: 10,
        borderRadius: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.04,
        shadowRadius: 4,
    },
    image: {
        width: 50,
        height: 50,
        borderRadius: 10,
    },
    textContainer: {
        marginLeft: 20,
        gap: 5,
        flex: 1,
    },
    orderTitle: {
        fontWeight: 'bold',
        fontSize: 15,
    },
    orderName: {
        color: '#888',
        fontWeight: '200',
        fontSize: 14,
    },
    orderPrice: {
        fontSize: 19,
        color: '#41CE7E',
        fontWeight: 'bold',
    },
    counterContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 15,
    },
    addButton: {
        backgroundColor: '#41CE7E',
        width: 25,
        height: 25,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
    },
    addText: {
        fontSize: 20,
        color: '#fff',
        // color: '#000000',
        // fontWeight: 'bold',
    },
    reduceText: {
        fontSize: 20,
        color: '#41CE7E',

    },
    reduceButton: {
        backgroundColor: '#ECFBF3',
        width: 25,
        height: 25,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
    },
});
