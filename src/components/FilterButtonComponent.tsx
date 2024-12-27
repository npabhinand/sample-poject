import { View, Image, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import React from 'react';
import { filterIcon } from '../assets/icons';
import { useNavigation } from '@react-navigation/native';


// const WIDTH = Dimensions.get('screen').width;
const HEIGHT = Dimensions.get('screen').height;
const FilterButtonComponent = () => {
    const navigation = useNavigation();
    return (
        <View>
            <TouchableOpacity style={styles.filterButton} onPress={() => navigation.navigate('FilterScreen')}>
                <Image source={filterIcon} />
            </TouchableOpacity>
        </View>
    );
};

export default FilterButtonComponent;

const styles = StyleSheet.create({
    filterButton: {
        backgroundColor: '#FDF5EB',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        height: HEIGHT * 0.07,
        width: HEIGHT * 0.07,
    },
});
