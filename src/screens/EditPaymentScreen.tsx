import { View, StyleSheet, TouchableOpacity, Image, Text, Dimensions } from 'react-native';
import React, { useState } from 'react';
import ChatTitleComponent from '../components/ChatTitleComponent';
import BackgroundImage from '../components/BackgroundImage';
import { paymentContent } from '../data/commonArray';

const HEIGHT = Dimensions.get('screen').height;
const WIDTH = Dimensions.get('screen').width;

const EditPaymentScreen = () => {
    const [selectedIndex, setSelectedIndex] = useState(null);

    const handlePress = (index) => {
        setSelectedIndex(index);
    };

    return (
        <View style={styles.container}>
            <BackgroundImage />
            <ChatTitleComponent title="Payment" />
            {paymentContent.map((payment, index) => (
                <TouchableOpacity
                    key={index}
                    style={[
                        styles.cardContainer,
                        { backgroundColor: selectedIndex === index ? 'white' : '#F3F3F6' },
                    ]}
                    onPress={() => handlePress(index)}
                >
                    <Image source={payment.imgURL} style={styles.cardImage} />
                    <Text>{payment.cardNumber}</Text>
                </TouchableOpacity>
            ))}
        </View>
    );
};

export default EditPaymentScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F4F5FA',
    },
    cardContainer: {
        width: WIDTH * 0.9,
        height: HEIGHT * 0.09,
        marginTop: HEIGHT * 0.02,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#F3F3F6',
        padding: HEIGHT * 0.01,
        borderRadius: WIDTH * 0.05,
        alignSelf: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.04,
        shadowRadius: 4,
    },
    // cardImage: {
    //     width: 30, // Adjust based on your image size
    //     height: 30, // Adjust based on your image size
    // },
});
