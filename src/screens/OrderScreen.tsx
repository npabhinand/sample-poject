import { View, StyleSheet, Text, Pressable, Image, ScrollView } from 'react-native';
import React, { useEffect, useState } from 'react';
import BackgroundImage from '../components/BackgroundImage';
import ChatTitleComponent from '../components/ChatTitleComponent';
import PriceCard from '../components/PriceCard';
import { HEIGHT, WIDTH } from '../common/dimensions';
import { useDispatch, useSelector } from 'react-redux';
import { deleteCart, selectedCarts } from '../reducers/cartSlice';
import { selectColorTheme } from '../reducers/colorThemeSlice';
import { SwipeListView } from 'react-native-swipe-list-view';
import OrderRenderItems from '../components/OrderRenderItems';
import { trashIcon } from '../assets/icons';


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
            <View style={[styles.container, { backgroundColor: currentTheme.themeColor }]}>
                <BackgroundImage />
                <ChatTitleComponent title="Order details" />
                <Text style={styles.title}>No items added to orders</Text>
            </View>
        );
    }


    const onRowDidOpen = (rowKey: string | number) => {
        handleButtonDelete(Number(rowKey));
    };

    return (
        <View style={[styles.container, { backgroundColor: currentTheme.themeColor }]}>
            {/* <ScrollView> */}
            <BackgroundImage />

            <SwipeListView
                ListHeaderComponent={<ChatTitleComponent title="Order details" />}
                keyExtractor={(item, index) => item.id.toString()}
                data={selectedCart}
                renderItem={({ item }) => (
                    <OrderRenderItems
                        item={item}
                    />
                )}
                renderHiddenItem={() => (
                    <View style={styles.rightActionWrapper
                    } >
                        <Pressable style={styles.deleteButton}>
                            <Image source={trashIcon} />
                        </Pressable>
                    </View>
                )}
                ListFooterComponent={<PriceCard navigate="PaymentScreen" subTotal={subTotal} deliveryCharge={deliveryCharge} discount={discount} total={total} />}
                ListFooterComponentStyle={styles.footerStyle}
                // leftOpenValue={WIDTH * 0.6}
                rightOpenValue={-WIDTH * 0.8}
                disableRightSwipe={true}
                onRowDidOpen={(rowKey) => onRowDidOpen(rowKey)}
            />

            {/* </ScrollView> */}
        </View>
    );
};

export default OrderScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F9FBFF',
    },
    footerStyle: {
        marginBottom: HEIGHT * 0.12,
    },
    title: { textAlign: 'center', marginTop: HEIGHT * 0.3, color: '#F8A778', fontSize: 16, fontWeight: '600' },
    cards: {
        alignItems: 'center',
    },
    hiddenContainer: {
        flex: 1,
        backgroundColor: '#FF6B6B',
        justifyContent: 'center',
        alignItems: 'flex-end',
        paddingRight: 15,
    },
    deleteButton: {
        marginRight: WIDTH * 0.1,
    }, rightActionWrapper: {
        width: WIDTH * 0.9,
        height: HEIGHT * 0.12,
        justifyContent: 'flex-end',
        alignItems: 'center',
        borderRadius: 20,
        marginBottom: HEIGHT * 0.01,
        backgroundColor: '#F8AD1E',
        flexDirection: 'row',
        alignSelf: 'center',
    },
});
