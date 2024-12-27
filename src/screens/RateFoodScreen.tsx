import { View, StyleSheet } from 'react-native';
import React from 'react';
import ChatBackgroundImage from '../components/ChatBackgroundImage';
import { rateFood } from '../assets/images';
import RatingComponent from '../components/RatingComponent';

const RateFoodScreen = () => {
    return (
        <View style={styles.container}>
            <ChatBackgroundImage />
            <RatingComponent description1="Enjoy Your Meal" description2="Please rate your last Food" navigate="RateRestaurantScreen" image={rateFood} />
        </View>
    );
};

export default RateFoodScreen;
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});