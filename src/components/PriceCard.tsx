import { View, Text, StyleSheet, Dimensions, ImageBackground, TouchableOpacity } from 'react-native';
import React from 'react';
import { pattern } from '../assets/images';
import { useNavigation } from '@react-navigation/native';

const HEIGHT = Dimensions.get('screen').height;
const WIDTH = Dimensions.get('screen').width;

interface navigateProps {
    navigate?: string;
}
const PriceCard: React.FC<navigateProps> = ({
    navigate
}) => {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <ImageBackground source={pattern} style={{
                position: 'absolute', right: 0,
            }} />
            <View style={styles.subContainer}>
                <View style={styles.leftContainer}>
                    <Text style={styles.subText}>Sub-Total</Text>
                    <Text style={styles.subText}>Delivery Charge</Text>
                    <Text style={styles.subText}>Discount</Text>
                    <Text style={styles.TotalSubText}>Total</Text>
                </View>
                <View style={styles.rightContainer}>
                    <Text style={styles.subText}>120$</Text>
                    <Text style={styles.subText}>10$</Text>
                    <Text style={styles.subText}>20$</Text>
                    <Text style={styles.TotalSubText}>150$</Text>
                </View>

            </View>
            <View>
                <TouchableOpacity style={styles.btn} onPress={() => { navigation.navigate(navigate) }}>
                    <Text style={styles.btnText}>Place My Order</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default PriceCard;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignSelf: 'center',
        width: WIDTH * 0.9,
        height: HEIGHT * 0.25,
        backgroundColor: '#47DD86',
        borderRadius: 20,
        bottom: HEIGHT * 0.12,
    },
    subContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
    },
    leftContainer: {
        // Styling for the left side
        // flexDirection: 'row',
        // justifyContent: 'space-between',
    },
    rightContainer: {
        right: WIDTH * 0.01,
        justifyContent: 'flex-end',
    },
    subText: {
        color: '#fff',
    },
    TotalSubText: {
        marginTop: HEIGHT * 0.02,
        color: '#fff',
        fontSize: 16,

    },
    btn: {
        backgroundColor: '#fff',
        alignSelf: 'center',
        // padding: 10,
        width: WIDTH * 0.8,
        height: HEIGHT * 0.06,
        marginTop: HEIGHT * 0.01,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,

    },
    btnText: {
        color: '#47DD86',
        fontSize: 14,
        fontWeight: 'bold',
    },
});
