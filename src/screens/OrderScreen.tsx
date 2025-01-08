import { View, FlatList, StyleSheet, Text } from 'react-native';
import React, { useEffect, useState } from 'react';
import BackgroundImage from '../components/BackgroundImage';
import ChatTitleComponent from '../components/ChatTitleComponent';
import OrderRenderItems from '../components/OrderRenderItems';
import PriceCard from '../components/PriceCard';
import { HEIGHT } from '../common/dimensions';
import { useDispatch, useSelector } from 'react-redux';
import { deleteCart, selectedCarts } from '../reducers/cartSlice';
import { selectColorTheme } from '../reducers/colorThemeSlice';

const OrderScreen = () => {
    const [subTotal, setSubTotal] = useState(0);
    const [total, setTotal] = useState(0);
    const dispatch = useDispatch();
    const selectedCart = useSelector(selectedCarts);
    const currentTheme = useSelector(selectColorTheme);
    const discount: number = 5;
    const deliveryCharge: number = 10;
    const handleButtonDelete = (id: number) => {
        dispatch(deleteCart(id));
    };
    useEffect(() => {
        const sub_Total = selectedCart.reduce((sum, item) => {
            return sum + item.price * item.quantity;
        }, 0);
        setSubTotal(sub_Total);
        setTotal(sub_Total + deliveryCharge - discount);
    }, [selectedCart]);

    if (selectedCart.length === 0) {
        return (
            <View style={[styles.container, { backgroundColor: currentTheme['themeColor'] }]}>
                <BackgroundImage />
                <ChatTitleComponent title="Order details" />
                <Text style={styles.title}>No items added to orders</Text>
            </View>
        );
    }

    return (
        <View style={[styles.container, { backgroundColor: currentTheme['themeColor'] }]}>
            <BackgroundImage />
            <ChatTitleComponent title="Order details" />
            <FlatList
                contentContainerStyle={styles.cards}
                data={selectedCart}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <OrderRenderItems
                        item={item}
                        handleDelete={() => handleButtonDelete(item.id)}
                    />
                )}
                pagingEnabled
                horizontal={false}
                ListFooterComponentStyle={styles.footerStyle}
                ListFooterComponent={<PriceCard navigate="PaymentScreen" subTotal={subTotal} deliveryCharge={deliveryCharge} discount={discount} total={total} />}
            />
        </View>
    );
};

export default OrderScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F9FBFF',
    }, title: { textAlign: 'center', marginTop: HEIGHT * 0.3, color: '#F8A778', fontSize: 16, fontWeight: '600' },
    cards: {
        alignItems: 'center',
    },
    footerStyle: {
        marginTop: HEIGHT * 0.03,
        marginBottom: HEIGHT * 0.03,
    },
});
