import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Dimensions, StyleSheet, View, Image, Text, TouchableOpacity } from 'react-native';

const HEIGHT = Dimensions.get('screen').height;
const WIDTH = Dimensions.get('screen').width;

function MenuRenderItems({ item }: any) {
    const navigation = useNavigation();
    return (
        <TouchableOpacity style={styles.menuItems}
            onPress={() => { navigation.navigate('ProductDetailScreen') }}
        >
            <Image source={item.imgURL} />
            <View style={styles.textContainer}>
                <Text style={styles.menuTitle} >{item.title}</Text>
                <Text style={styles.menuName}>{item.restaurantName}</Text>
            </View>
            <Text style={styles.menuPrice}>${item.price}</Text>
        </TouchableOpacity>
    );
}

export default MenuRenderItems;



const styles = StyleSheet.create({
    menuItems: {
        width: WIDTH * 0.9,
        height: HEIGHT * 0.1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 10,
        backgroundColor: '#FFFFFF',
        padding: 10,
        borderRadius: 20,
        shadowColor: '#F7F8FE',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 1,
        shadowRadius: 4,
    },
    textContainer: {
        marginLeft: 20,
        flex: 1,
    },
    menuTitle: {
        fontWeight: 'bold',
        fontSize: 15,
    },
    menuName: {
        color: '#888',
        fontWeight: '200',
        fontSize: 14,
    },
    menuPrice: {
        fontSize: 22,
        color: '#FEAD1D',
        fontWeight: 'bold',
        right: 15,
    },
});
