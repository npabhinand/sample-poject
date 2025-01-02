import { View, FlatList, StyleSheet } from 'react-native';
import React from 'react';
import BackgroundImage from '../components/BackgroundImage';
import ChatTitleComponent from '../components/ChatTitleComponent';
import OrderRenderItems from '../components/OrderRenderItems';
import PriceCard from '../components/PriceCard';
import { HEIGHT } from '../global/dimensions';
import { useDispatch, useSelector } from 'react-redux';
import { deleteCart, selectedCarts } from '../reducers/cartSlice';

const OrderScreen = () => {
    const dispatch = useDispatch();
    const selectedCart = useSelector(selectedCarts);

    const handleButtonDelete = (id: number) => {
        dispatch(deleteCart(id));
    };

    return (
        <View style={styles.container}>
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
                ListFooterComponent={<PriceCard navigate="PaymentScreen" />}
            />
        </View>
    );
};

export default OrderScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F9FBFF',
    },
    cards: {
        alignItems: 'center',
    },
    footerStyle: {
        marginTop: HEIGHT * 0.03,
        marginBottom: HEIGHT * 0.03,
    },
});
