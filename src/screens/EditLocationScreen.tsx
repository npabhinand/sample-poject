import { View, StyleSheet } from 'react-native';
import React from 'react';
import ChatTitleComponent from '../components/ChatTitleComponent';
import BackgroundImage from '../components/BackgroundImage';
import ShippingComponent from '../components/ShippingComponent';

const EditLocationScreen = () => {
    return (
        <View style={styles.container}>
            <BackgroundImage />
            <ChatTitleComponent title="Shipping" />
            <ShippingComponent />
        </View>
    );
};

export default EditLocationScreen;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F9FBFF',
    },
});

