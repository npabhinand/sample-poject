import { View, StyleSheet } from 'react-native';
import React from 'react';
import BackgroundImage from '../components/BackgroundImage';
import ChatTitleComponent from '../components/ChatTitleComponent';
import OrderDetailCard from '../components/OrderDetailCard';

const PaymentScreen = () => {
    return (
        <View style={styles.container}>
            <BackgroundImage />
            <ChatTitleComponent title="Confirm Order" />
            <OrderDetailCard navigate="EditLocationScreen" isEdit={true} />
        </View>
    );
};

export default PaymentScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F9FBFF',
    },
    cards: {
        // justifyContent: 'space-evenly',
        alignItems: 'center',
    },
});
