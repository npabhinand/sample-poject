import { View, StyleSheet } from 'react-native';
import React from 'react';
import BackgroundImage2 from '../components/ChatBackgroundImage';
import { rateDriver } from '../assets/images';
import RatingComponent from '../components/RatingComponent';
import { selectColorTheme } from '../reducers/colorThemeSlice';
import { useSelector } from 'react-redux';



const RateDriverScreen = () => {
    const currentTheme = useSelector(selectColorTheme);
    return (
        <View style={[styles.container, { backgroundColor: currentTheme.themeColor }]}>
            <BackgroundImage2 />
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
