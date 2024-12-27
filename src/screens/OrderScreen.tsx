import { View, FlatList, StyleSheet } from 'react-native';
import React from 'react';
import BackgroundImage from '../components/BackgroundImage';
import ChatTitleComponent from '../components/ChatTitleComponent';
import { orderContents } from '../data/commonArray';
import OrderRenderItems from '../components/OrderRenderItems';
import PriceCard from '../components/PriceCard';

// const HEIGHT = Dimensions.get('screen').height;
// const WIDTH = Dimensions.get('screen').width;

const OrderScreen = () => {
    return (
        <View style={styles.container}>
            <BackgroundImage />
            <ChatTitleComponent title="Order details" />
            <FlatList
                contentContainerStyle={styles.cards}
                data={orderContents}
                keyExtractor={item => item.id.toString()}
                renderItem={({ item }) => (
                    <OrderRenderItems item={item} onCardPress={() => { '' }} />
                )}
            />
            <PriceCard navigate="PaymentScreen" />
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
        // justifyContent: 'space-evenly',
        alignItems: 'center',
    },
});

