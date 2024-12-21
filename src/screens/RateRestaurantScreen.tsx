import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import ChatBackgroundImage from '../components/ChatBackgroundImage';
import { rateDriver, rateFood, rateRestaurant } from '../assets/images';
import RatingComponent from '../components/RatingComponent';

const RateRestaurantScreen = () => {
    return (
        <View style={styles.container}>
            <ChatBackgroundImage />
            <RatingComponent description1='Enjoy Your Meal' description2='Please rate your last Food' navigate='rateRestaurant' image={rateRestaurant}/>
        </View>
    );
};

export default RateRestaurantScreen;
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
