import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import ChatTitleComponent from '../components/ChatTitleComponent';
import { voucherPromo } from '../data/commonArray';
import PromoComponent from '../components/PromoComponent';
import BackgroundImage from '../components/BackgroundImage';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { HEIGHT, WIDTH } from '../common/dimensions';
import { RootStackParamList } from '../navigation/AppNavigator';
import { useSelector } from 'react-redux';
import { selectColorTheme } from '../reducers/colorThemeSlice';




const VoucherPromoScreen = () => {
    const navigation = useNavigation<NavigationProp<RootStackParamList, 'HomeTab'>>();
    const currentTheme = useSelector(selectColorTheme);
    return (
        <View style={[styles.container, { backgroundColor: currentTheme['themeColor'] }]}>
            <BackgroundImage />
            <ChatTitleComponent title="Voucher Promo" />
            <View style={styles.promoContainer}>
                {voucherPromo.map((voucher, index) => (
                    <PromoComponent key={index} image={voucher.imageURL} btnText="Order Now" btnTextColor={voucher.btnTextColor} cardColor={voucher.cardColor} textColor={voucher.textColor} />
                ))}
            </View>
            <TouchableOpacity
                style={styles.searchButton}
                onPress={() => { navigation.navigate('HomeTab'); }}
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
    searchButton: {
        backgroundColor: '#45D984',
        width: WIDTH * 0.85,
        borderRadius: 10,
        padding: 15,
        alignSelf: 'center',
        position: 'absolute',
        bottom: HEIGHT * 0.05,
    },
    buttonText: {
        textAlign: 'center',
        color: '#fff',
        fontSize: 14,
    }, promoContainer: {
        marginLeft: WIDTH * 0.02,
    },

});

