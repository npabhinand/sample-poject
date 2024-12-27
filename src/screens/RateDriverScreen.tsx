import { View, StyleSheet } from 'react-native';
import React from 'react';
import ChatBackgroundImage from '../components/ChatBackgroundImage';
import { rateDriver } from '../assets/images';
import RatingComponent from '../components/RatingComponent';



const RateDriverScreen = () => {
    return (
        <View style={styles.container}>
            <ChatBackgroundImage />
            <RatingComponent description1="Order Completed" description2="Please rate your last Driver" navigate="RateFoodScreen" image={rateDriver} />
        </View>
    );
};

export default RateDriverScreen;
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
