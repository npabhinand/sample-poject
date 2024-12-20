import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import ChatBackgroundImage from '../components/ChatBackgroundImage';
import CallingComponent from '../components/CallingComponent';
import { rateDriver } from '../assets/images';

const RatingDriver = () => {
    return (
        <View style={styles.container}>
            <ChatBackgroundImage />
            <CallingComponent name={"Thank You!"} isEnded={ended} image={rateDriver} />
        </View>
    );
};

export default RatingDriver;
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
