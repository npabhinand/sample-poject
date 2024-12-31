import React from 'react';
import { SafeAreaView, StyleSheet, Text, FlatList, View, Pressable } from 'react-native';
import RestaurantRenderItems from '../components/RestaurantRenderItems';
import HomeTitleContainer from '../components/HomeTitleContainer';
import { restaurantArray } from '../data/commonArray';

import { HEIGHT, WIDTH } from '../global/dimensions';
import { addButton, deleteButton } from '../reducers/filterSlice';
import { useDispatch, useSelector } from 'react-redux';





const FilterRestaurant = () => {
    const dispatch = useDispatch();
    const selectedButtons = useSelector((state: any) => state.button.selectedButtons);

    const handleButtonPress = (buttonName: string) => {
        if (selectedButtons.includes(buttonName)) {
            dispatch(deleteButton(buttonName));
        } else {
            dispatch(addButton(buttonName));
        }
    };

    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                numColumns={2}
                ListHeaderComponent={<>
                    <HomeTitleContainer isFilterButton={true} />
                    <View style={[styles.rowButtons, styles.marginLeft]}>
                        {selectedButtons.map((button: string, index: number) => (
                            <Pressable
                                key={index}
                                style={styles.buttonStyle}
                                onPress={() => handleButtonPress(button)}
                            >
                                <Text style={styles.buttonText}>
                                    {button} X
                                </Text>
                            </Pressable>
                        ))}
                    </View>
                    <Text style={[styles.heading2, styles.marginLeft]}>Popular Restaurants</Text>
                </>}
                contentContainerStyle={styles.cards}
                data={restaurantArray}
                renderItem={({ item }) => <RestaurantRenderItems item={item} />}
            />
        </SafeAreaView>
    );
};

export default FilterRestaurant;

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        backgroundColor: '#F9FBFF',
    },
    cards: {
        alignSelf: 'center',
        justifyContent: 'space-evenly',
    },
    marginLeft: {
        marginLeft: WIDTH * 0.05,
    },
    heading2: {
        fontSize: 15,
        fontWeight: 'bold',
        marginTop: HEIGHT * 0.03,
        marginBottom: HEIGHT * 0.03,
    },
    rowButtons: {
        flexDirection: 'row',
        flexWrap: 'wrap',
    }, buttonStyle: {
        backgroundColor: '#FEF7E7',
        paddingVertical: 10,
        borderRadius: 10,
        padding: 20,
        marginRight: WIDTH * 0.02,
        marginTop: HEIGHT * 0.02,
    }, buttonText: {
        color: '#DA6317',
        textAlign: 'center',
        fontSize: 12,
    },
});
