import { View, Text, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native';
import React from 'react';
import { pattern } from '../assets/images';
import { useNavigation } from '@react-navigation/native';
import { HEIGHT, WIDTH } from '../common/dimensions';



interface navigateProps {
    navigate?: string;
    subTotal?: number;
    discount?: number;
    deliveryCharge?: number;
    total?: number
}

const PriceCard: React.FC<navigateProps> = ({ navigate, subTotal, discount, deliveryCharge, total }) => {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            {/* Background image */}
            <ImageBackground source={pattern} style={styles.backgroundImage} resizeMode="cover">
                <View style={styles.subContainer}>
                    <View style={styles.leftContainer}>
                        <Text style={styles.subText}>Sub-Total</Text>
                        <Text style={styles.subText}>Delivery Charge</Text>
                        <Text style={styles.subText}>Discount</Text>
                        <Text style={styles.TotalSubText}>Total</Text>
                    </View>
                    <View style={styles.rightContainer}>
                        <Text style={styles.RightSubText}>{subTotal}$</Text>
                        <Text style={styles.RightSubText}>{deliveryCharge}$</Text>
                        <Text style={styles.RightSubText}>{discount}$</Text>
                        <Text style={styles.TotalSubText}>{total}$</Text>
                    </View>
                </View>
                <TouchableOpacity
                    style={styles.btn}
                    onPress={() => { navigation.navigate(navigate); }}>
                    <Text style={styles.btnText}>Place My Order</Text>
                </TouchableOpacity>
            </ImageBackground>
        </View>
    );
};

export default PriceCard;

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        alignSelf: 'center',
        width: WIDTH * 0.9,
        height: WIDTH * 0.5,
        borderRadius: WIDTH * 0.05,
        // paddingLeft: HEIGHT * 0.03,
        // marginBottom: HEIGHT * 0.02,
        backgroundColor: '#43D380',
    },
    backgroundImage: {
        flex: 1,
        // justifyContent: 'center',
        borderRadius: 20,
        // padding: 10,
    },
    subContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    leftContainer: {
        marginTop: HEIGHT * 0.02,
        marginLeft: HEIGHT * 0.03,
    },
    rightContainer: {
        marginTop: HEIGHT * 0.02,
        marginRight: HEIGHT * 0.03,
    },
    RightSubText: {
        color: '#fff',
        fontSize: 14,
        textAlign: 'right',
    },
    subText: {
        color: '#fff',
        fontSize: 14,
        fontWeight: 'bold',
    },
    TotalSubText: {
        marginTop: HEIGHT * 0.02,
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
    btn: {
        backgroundColor: '#fff',
        alignSelf: 'center',
        width: WIDTH * 0.8,
        height: WIDTH * 0.13,
        marginTop: HEIGHT * 0.02,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: HEIGHT * 0.015,
        top: HEIGHT * 0.015,
    },
    btnText: {
        color: '#47DD86',
        fontSize: 14,
        fontWeight: 'bold',
    },
});
