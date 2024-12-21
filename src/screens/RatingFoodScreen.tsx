import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import ChatBackgroundImage from '../components/ChatBackgroundImage';
import { rateDriver, rateFood } from '../assets/images';
import RatingComponent from '../components/RatingComponent';

const RatingFoodScreen = () => {
    return (
        <View style={styles.container}>
            <ChatBackgroundImage />
            <RatingComponent description1='Enjoy Your Meal' description2='Please rate your last Food' navigate='rateRestaurant' image={rateFood}/>
        </View>
    );
};

export default RatingFoodScreen;
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
