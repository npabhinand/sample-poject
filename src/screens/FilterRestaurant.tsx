import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, FlatList, View, Dimensions } from 'react-native';
import RestaurantRenderItems from '../components/RestaurantRenderItems';
import HomeTitleContainer from '../components/HomeTitleContainer';
import FilterButton from '../components/FilterButton';
import { restaurantArray } from '../data/commonArray';
import { RouteProp } from '@react-navigation/native';
import { HomeTabNavigator } from '../../App';

interface FilterRestaurantProps {
    route: RouteProp<any, any>;
}
const HEIGHT = Dimensions.get('screen').height;
const WIDTH = Dimensions.get('screen').width;

const FilterRestaurant: React.FC<FilterRestaurantProps> = ({ route }) => {
    const { selectedButtons, setSelectedButtons } = route.params;
    const [clicked, setClicked] = useState('');

    const handleButtonPress = (index: string) => {
        const updatedButtons = selectedButtons.filter(button => button !== index);
        setSelectedButtons(updatedButtons);
    };

    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                numColumns={2}
                ListHeaderComponent={<>
                    <HomeTitleContainer isFilterButton={true} />
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
        flex: 1,
        backgroundColor: '#F9FBFF',
    },
    cards: {
        alignSelf: 'center',
        justifyContent: 'space-evenly',
    },
    marginLeft: {
        padding: 10,
        marginLeft: WIDTH * 0.02,
    },
    heading2: {
        fontSize: 15,
        fontWeight: 'bold',
    },
    rowButtons: {
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
});
