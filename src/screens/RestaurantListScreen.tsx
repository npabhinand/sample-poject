import { FlatList, SafeAreaView, StyleSheet, Text, TouchableOpacity, View, } from 'react-native';
import React from 'react';
import HomeTitleContainer from '../components/HomeTitleContainer';
import { restaurantArray } from '../data/commonArray';
import RestaurantRenderItems from '../components/RestaurantRenderItems';

const RestaurantListScreen = () => {
    return (
        <SafeAreaView style={styles.container}>
            <HomeTitleContainer />

            <View style={styles.ViewMoreContainer}>
                <Text style={[styles.heading2, styles.marginLeft]} >Nearest Restaurant</Text>
                {/* <TouchableOpacity>
                    <Text style={[styles.heading2, styles.viewMoreColor, styles.viewMoreMargin]} onPress={() => navigation.navigate('RestaurantList')}>View More</Text>
                </TouchableOpacity> */}
            </View>
            <FlatList
                numColumns={2}
                contentContainerStyle={styles.cards}
                data={restaurantArray}
                keyExtractor={item => item.id.toString()}
                renderItem={({ item }) => (
                    <RestaurantRenderItems item={item} />
                )}
            />
        </SafeAreaView>
    );
};

export default RestaurantListScreen;

const styles = StyleSheet.create({
    marginLeft: {
        padding: 20,
        marginLeft: 15,
    },
    container: {
        flex: 1,
        backgroundColor: '#F9FBFF',
    },
    cards: {
        justifyContent: 'space-around',
    },
    ViewMoreContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    heading2: {
        fontSize: 15,
        fontWeight: 'bold',
    },
    viewMoreMargin: {
        padding: 20,
        marginRight: 15,
    },
    viewMoreColor: {
        color: '#FF7C32',
    },
});
