import { Image, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
import { filterIcon } from '../assets/icons';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { HEIGHT } from '../global/dimensions';
import { RootStackParamList } from '../navigation/AppNavigator';



const FilterButtonComponent = () => {
    const navigation = useNavigation<NavigationProp<RootStackParamList, 'FilterScreen'>>();
    return (
        <>
            <TouchableOpacity style={styles.filterButton} onPress={() => navigation.navigate('FilterScreen')}>
                <Image source={filterIcon} />
            </TouchableOpacity>
        </>
    );
};

export default FilterButtonComponent;

const styles = StyleSheet.create({
    filterButton: {
        backgroundColor: '#FDF5EB',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: HEIGHT * 0.02,
        height: HEIGHT * 0.07,
        width: HEIGHT * 0.065,
    },
});
