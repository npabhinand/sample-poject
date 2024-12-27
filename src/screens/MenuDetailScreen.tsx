import { Dimensions, StyleSheet, TouchableOpacity, View, Text } from 'react-native';
import React from 'react';
import DetailComponent from '../components/DetailComponent';
import { DetailImage } from '../assets/images';
import { useNavigation } from '@react-navigation/native';

const WIDTH = Dimensions.get('screen').width;
const MenuDetailScreen = () => {

    const menuSections = [
        {
            key: 'image',
            type: 'image',
            content: DetailImage,
        },
        {
            key: 'details',
            type: 'details',
            title: 'Rainbow Sandwich Sugarless',
            orders: '2000 + orders',
            rating: '4.9 Rating',
            description1: 'Nulla occaecat velit laborum exercitation ullamco. Elit labore eu aute elit nostrud culpa velit excepteur deserunt sunt.',
            recipe: ['Strawberry', 'Cream', 'Wheat'],
            description2: 'Nulla occaecat velit laborum exercitation ullamco. Elit labore eu aute elit nostrud culpa velit excepteur deserunt sunt.',
        },
        {
            key: 'testimonials',
            type: 'testimonials',
        }
    ];
    const navigation = useNavigation();
    return (
        <View>
            <DetailComponent sectionData={menuSections} />
            <TouchableOpacity
                style={styles.searchButton}
                onPress={() => { navigation.navigate('HomeTab') }}
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

