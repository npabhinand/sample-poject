import { Dimensions, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import ChatTitleComponent from '../components/ChatTitleComponent';
import { voucherPromo } from '../data/commonArray';
import PromoComponent from '../components/PromoComponent';
import BackgroundImage from '../components/BackgroundImage';
import { useNavigation } from '@react-navigation/native';


// const HEIGHT = Dimensions.get('screen').height;
const WIDTH = Dimensions.get('screen').width;

const VoucherPromoScreen = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <BackgroundImage />
            <ChatTitleComponent title="Voucher Promo" />
            {/* <View> */}
            {voucherPromo.map((voucher, index) => (
                <PromoComponent key={index} image={voucher.imageURL} btnText="Order Now" btnTextColor={voucher.btnTextColor} cardColor={voucher.cardColor} textColor={voucher.textColor} />
            ))}
            {/* </View> */}
            <TouchableOpacity
                style={styles.searchButton}
                onPress={() => { navigation.navigate('HomeTab') }}
            >
                <Text style={styles.buttonText}>Checkout</Text>
            </TouchableOpacity>
        </View>
    );
};

export default VoucherPromoScreen;
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    voucherCard: {
        marginTop: 10,
    },
    searchButton: {
        backgroundColor: '#45D984',
        width: WIDTH * 0.85,
        borderRadius: 10,
        padding: 15,
        alignSelf: 'center',
        position: 'absolute',
        bottom: 20,
    },
    buttonText: {
        textAlign: 'center',
        color: '#fff',
        fontSize: 14,
    },

});

