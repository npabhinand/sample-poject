import { Dimensions, StyleSheet, TouchableOpacity, View, Text } from 'react-native';
import React from 'react';
import DetailComponent from '../components/DetailComponent';
import { useNavigation } from '@react-navigation/native';
import { menuSections } from '../data/commonArray';

const WIDTH = Dimensions.get('screen').width;
const MenuDetailScreen = () => {

    const navigation = useNavigation();
    return (
        <View>
            <DetailComponent sectionData={menuSections} />
            <TouchableOpacity
                style={styles.searchButton}
                onPress={() => { navigation.navigate('HomeTab'); }}
            >
                <Text style={styles.buttonText}>Add To Cart</Text>
            </TouchableOpacity>
        </View>
    );
};

export default MenuDetailScreen;
const styles = StyleSheet.create({
    searchButton: {
        backgroundColor: '#45D984',
        width: WIDTH * 0.85,
        borderRadius: 10,
        padding: 15,
        alignSelf: 'center',
        position: 'absolute',
        bottom: 20,
    },
    buttonText: {
        textAlign: 'center',
        color: '#fff',
        fontSize: 14,
    },
});

