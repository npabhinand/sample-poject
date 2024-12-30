import { View, Text, StyleSheet, Image } from 'react-native';
import React from 'react';
import { address } from '../data/commonArray';
import { locationIcon } from '../assets/icons';
import { HEIGHT, WIDTH } from '../global/dimensions';


const ShippingComponent = () => {
    return (
        <>
            {address.map((location, index) => (
                <View style={styles.container} key={index}>
                    <Text style={styles.orderName}>
                        {location.set}
                    </Text>
                    <View style={styles.row}>
                        <Image source={locationIcon} />
                        <Text style={styles.orderTitle}>{location.name}</Text>
                    </View>
                    {location.id === 1 ? (
                        <></>
                    ) : (
                        <Text style={styles.setTxt}>Set Location</Text>
                    )}
                </View>
            ))
            }
        </>
    );
};


export default ShippingComponent;

const styles = StyleSheet.create({
    container: {
        width: WIDTH * 0.9,
        // height: 100,
        marginTop: HEIGHT * 0.03,
        backgroundColor: '#FFFFFF',
        borderRadius: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.05,
        shadowRadius: 4,
        alignSelf: 'center',
        padding: 15,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: 0,
        marginTop: HEIGHT * 0.02,
        // padding: 10,
    },
    orderTitle: {
        // fontSize: 15,
        // paddingRight: 10,
        // marginTop: 20,
        fontSize: 15,
        marginLeft: 5,
        fontWeight: '600',
        paddingLeft: WIDTH * 0.02,
        paddingRight: WIDTH * 0.1,
    },
    orderName: {
        color: '#888',
        fontWeight: '200',
        // fontSize: 14,
    },
    setTxt: {
        color: '#4DD395',
        marginTop: HEIGHT * 0.02,
        marginLeft: WIDTH * 0.1,
    },
});
