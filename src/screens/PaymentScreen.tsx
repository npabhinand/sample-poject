import { View, StyleSheet } from 'react-native';
import React from 'react';
import BackgroundImage from '../components/BackgroundImage';
import ChatTitleComponent from '../components/ChatTitleComponent';
import PriceCard from '../components/PriceCard';
import PaymentCard from '../components/PaymentCard';
import { locationIcon } from '../assets/icons';
import { paypalLogo } from '../assets/images';
import { useSelector } from 'react-redux';
import { selectColorTheme } from '../reducers/colorThemeSlice';

const PaymentScreen = () => {
    const currentTheme = useSelector(selectColorTheme);
    return (
        <View style={[styles.container, { backgroundColor: currentTheme.themeColor }]}>
            <BackgroundImage />
            <ChatTitleComponent title="Confirm Order" />
            <PaymentCard navigate="EditLocationScreen" title="Delivery To" description={'4517 Washington Ave. Manchester, Kentucky 39495'} descriptionTextWeight="bold" logo={locationIcon} />
            <PaymentCard navigate="EditPaymentScreen" title="Payment Method" description={'212163528465****'} descriptionTextWeight="200" logo={paypalLogo} />

            <View style={styles.priceCardContainer}>
                <PriceCard navigate="YourOrdersScreen" />
            </View>
        </View>
    );
};

export default PaymentScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F9FBFF',
        paddingBottom: 20,
    },
    priceCardContainer: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
});
