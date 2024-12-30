import { FlatList, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import HomeTitleContainer from '../components/HomeTitleContainer';
import { restaurantArray } from '../data/commonArray';
import RestaurantRenderItems from '../components/RestaurantRenderItems';
import { HEIGHT, WIDTH } from '../global/dimensions';

const RestaurantListScreen = () => {
    return (
        <View style={[styles.container, styles.marginLeft]}>

            <FlatList
                numColumns={2}
                contentContainerStyle={styles.cards}
                data={restaurantArray}
                keyExtractor={item => item.id.toString()}
                renderItem={({ item }) => (
                    <RestaurantRenderItems item={item} />
                )}
                ListHeaderComponent={<><HomeTitleContainer isFilterButton={true} />

                    <View style={styles.ViewMoreContainer}>
                        <Text style={[styles.heading2, styles.marginLeft]} >Nearest Restaurant</Text>
                    </View> </>}
                ListHeaderComponentStyle={{ marginTop: HEIGHT * 0.05 }}
            />
        </View>
    );
};

export default RestaurantListScreen;

const styles = StyleSheet.create({
    marginLeft: {
        paddingLeft: WIDTH * 0.05,
        marginVertical: HEIGHT * 0.02,
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
