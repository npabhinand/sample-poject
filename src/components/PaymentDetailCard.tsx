import { View, Text, StyleSheet, Image } from 'react-native';
import React, { useState } from 'react';
import { locationIcon } from '../assets/icons';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { WIDTH } from '../common/dimensions';
import { RootStackParamList } from '../navigation/AppNavigator';



interface navigateProps {
    navigate?: string;
    isEdit?: boolean;
}

const PaymentDetailCard: React.FC<navigateProps> = ({ navigate, isEdit }) => {
    const [location, setLocation] = useState('4517 Washington Ave. Manchester, Kentucky 39495');
    const navigation = useNavigation<NavigationProp<RootStackParamList, 'EditLocationScreen'>>();

    return (
        <View style={styles.container}>
            <View style={styles.row}>
                <Text style={styles.orderName}>Deliver To</Text>
                <Text onPress={() => { navigation.navigate('EditLocationScreen') }} style={styles.editTxt}>Edit</Text>
            </View>
            <View style={[styles.row, styles.textContainer]}>
                <Image source={locationIcon} />
                {/* <Text style={styles.menuTitle} onPress={() => { navigation.navigate('ChatList') }}>{item.title}</Text> */}
                <Text style={styles.orderTitle}>{location}</Text>
            </View>

        </View>
    );
};


export default PaymentDetailCard;

const styles = StyleSheet.create({
    container: {
        width: WIDTH * 0.9,
        height: 100,
        marginBottom: 10,
        backgroundColor: '#FFFFFF',
        borderRadius: WIDTH * 0.04,
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
        // flex: 1,
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

