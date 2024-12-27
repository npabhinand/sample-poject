import { View, Text, StyleSheet, Dimensions, Image } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { visaLogo } from '../assets/images';

const HEIGHT = Dimensions.get('screen').height;
const WIDTH = Dimensions.get('screen').width;

const PaymentCard = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <View style={styles.row}>
                <Text style={styles.orderName}>Deliver To</Text>
                <Text onPress={() => { navigation.navigate('EditLocationScreen') }} style={styles.editTxt}>Edit</Text>
            </View>
            <View style={[styles.row, styles.textContainer]}>
                <Image source={visaLogo} />
                {/* <Text style={styles.menuTitle} onPress={() => { navigation.navigate('ChatList') }}>{item.title}</Text> */}
                <Text style={styles.orderTitle}>4517 Washington Ave. Manchester, Kentucky 39495</Text>
            </View>
        </View>
    );
};

export default PaymentCard;

const styles = StyleSheet.create({
    container: {
        width: WIDTH * 0.9,
        height: HEIGHT * 0.15,
        marginBottom: 10,
        backgroundColor: '#FFFFFF',
        borderRadius: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        alignSelf: 'center',
        padding: 15,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: 10,
        // width: WIDTH * 0.9,
        // height: HEIGHT * 0.1,
    }, editTxt: {
        color: '#47DD86',
        fontSize: 15,
    },
    textContainer: {
        // marginLeft: 20,
        flex: 1,
    },
    orderTitle: {
        fontWeight: '600',
        fontSize: 15,
        margin: 10,
    },
    orderName: {
        color: '#888',
        fontWeight: '200',
        fontSize: 16,
    },
    orderText: {
        fontSize: 22,
        color: '#FEAD1D',
        fontWeight: 'bold',
        right: 15,
    },
});


