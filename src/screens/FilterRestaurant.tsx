import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, FlatList, View } from 'react-native';
import RestaurantRenderItems from '../components/RestaurantRenderItems';
import HomeTitleContainer from '../components/HomeTitleContainer';
import FilterButton from '../components/FilterButton';
import { restaurantArray } from '../data/commonArray';
import { RouteProp } from '@react-navigation/native';

interface FilterRestaurantProps {
    route: RouteProp<any, any>;
}

const FilterRestaurant: React.FC<FilterRestaurantProps> = ({ route }) => {
    const { selectedButtons, setSelectedButtons } = route.params;
    const [clicked, setClicked] = useState('');

    const handleButtonPress = (index: string) => {
        const updatedButtons = selectedButtons.filter(button => button !== index);
        setSelectedButtons(updatedButtons);
    };

    return (
        <SafeAreaView style={styles.container}>
            <HomeTitleContainer />
            <View style={[styles.rowButtons, styles.marginLeft]}>
                {selectedButtons.map((button, index) => (
                    <FilterButton
                        key={index}
                        buttonName={button}
                        onPress={() => handleButtonPress(button)} 
                        isSelected={selectedButtons.includes(button)}
                    />
                ))}
            </View>
            <View>
                <Text style={[styles.heading2, styles.marginLeft]}>Popular Restaurants</Text>
                <FlatList
                    numColumns={2}
                    contentContainerStyle={styles.cards}
                    data={restaurantArray}
                    renderItem={({ item }) => <RestaurantRenderItems item={item} />}
                />
            </View>
        </SafeAreaView>
    );
};

export default FilterRestaurant;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F9FBFF',
    },
    cards: {
        justifyContent: 'space-around',
    },
    marginLeft: {
        padding: 10,
        marginLeft: 25,
    },
    heading2: {
        fontSize: 15,
        fontWeight: 'bold',
    },
    rowButtons: {
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
});
