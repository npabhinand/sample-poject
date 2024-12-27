import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import ChatTitleComponent from '../components/ChatTitleComponent';
import BackgroundImage from '../components/BackgroundImage';

const EditLocationScreen = () => {
    return (
        <View style={styles.container}>
            <BackgroundImage />
            <ChatTitleComponent title="Shipping" />

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

