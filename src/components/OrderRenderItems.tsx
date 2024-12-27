import React, { useState } from 'react';
import { Dimensions, StyleSheet, View, Image, Text, TouchableOpacity } from 'react-native';
import { GestureHandlerRootView, Swipeable } from 'react-native-gesture-handler';
import Reanimated, { SharedValue, useAnimatedStyle, withSpring } from 'react-native-reanimated';
import { bagIcon, mapIcon } from '../assets/icons';
// import { MaterialIcons } from '@expo/vector-icons';

const HEIGHT = Dimensions.get('screen').height;
const WIDTH = Dimensions.get('screen').width;

function RightAction(prog: SharedValue<number>, drag: SharedValue<number>) {
    const styleAnimation = useAnimatedStyle(() => {
        console.log('showRightProgress:', prog.value);
        console.log('appliedTranslation:', drag.value);

        return {
            transform: [{ translateX: drag.value + 50 }],
        };
    });

    return (
        <Reanimated.View style={[styles.rightAction, styleAnimation]}>
            <Image source={bagIcon} size={30} color="#FFF" />
        </Reanimated.View>
    );
}

function OrderRenderItems({ item, onCardPress, isSelected, isButtonView }: any) {
    const [counter, setCounter] = useState(1);

    const handleIncrease = () => {
        setCounter(counter + 1);
    };

    const handleDecrease = () => {
        if (counter > 1) {
            setCounter(counter - 1);
        }
    };

    const renderRightActions = () => (
        <View style={[styles.rightActionWrapper, { backgroundColor: '#F8AD1E' }]}>
            <Image source={mapIcon} />
        </View>
    );

    return (
        <GestureHandlerRootView style={styles.orderItems}>
            <Swipeable renderRightActions={renderRightActions} friction={2} rightThreshold={WIDTH * 0.3}>
                <TouchableOpacity
                    style={[styles.orderItems, isSelected && styles.selectedCard]}
                    onPress={() => onCardPress(item.id)}
                >
                    <Image source={item.imgURL} style={styles.image} />
                    <View style={styles.textContainer}>
                        <Text style={styles.orderTitle}>{item.DishName}</Text>
                        <Text style={styles.orderName}>{item.restaurantName}</Text>
                        <Text style={styles.orderPrice}>$ {item.price}</Text>
                    </View>

                    {isButtonView ? (
                        <TouchableOpacity style={[styles.processButton, isSelected && styles.selectedButton]}>
                            <Text style={styles.processButtonText}>Process</Text>
                        </TouchableOpacity>
                    ) : (
                        <View style={styles.counterContainer}>
                            <TouchableOpacity onPress={handleDecrease} style={styles.reduceButton}>
                                <Text style={styles.reduceText}>-</Text>
                            </TouchableOpacity>
                            <Text>{counter}</Text>
                            <TouchableOpacity onPress={handleIncrease} style={styles.addButton}>
                                <Text style={styles.addText}>+</Text>
                            </TouchableOpacity>
                        </View>
                    )}
                </TouchableOpacity>
            </Swipeable>
        </GestureHandlerRootView>
    );
}

export default OrderRenderItems;

const styles = StyleSheet.create({
    orderItems: {
        width: WIDTH * 0.90,
        height: HEIGHT * 0.12,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: HEIGHT * 0.03,
        backgroundColor: '#FFFFFF',
        padding: 10,
        borderRadius: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.04,
        shadowRadius: 4,
    },
    selectedCard: {
        backgroundColor: '#F1F1F1',
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
    processButton: {
        marginTop: 10,
        backgroundColor: '#41CE7E',
        padding: 10,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    processButtonText: {
        color: '#fff',
        fontWeight: 'bold',
    },
    selectedButton: {
        backgroundColor: '#D9D9D9',
    },
    rightActionWrapper: {
        width: WIDTH * 0.5,
        height: HEIGHT * 0.12,
        justifyContent: 'center',
        alignItems: 'center',
        borderTopRightRadius: 20,
        borderBottomRightRadius: 20,
    },
    separator: {
        width: '100%',
        borderTopWidth: 1,
    },
    swipeable: {
        height: 50,
        backgroundColor: 'papayawhip',
        alignItems: 'center',
    },
});
