import React from 'react';
import { Image, StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';
import { ProfileImage } from '../assets/images';
import { EditIcon1, VoucherIcon } from '../assets/icons';
import { orderContents } from '../data/commonArray';
import { HEIGHT, WIDTH } from '../global/dimensions';
// import OrderRenderItems from '../components/OrderRenderItems';



function ProfileScreen() {

    return (
        <ScrollView style={styles.container}>
            <Image source={ProfileImage} style={styles.imageContainer} />
            <View style={styles.cardContainer}>
                <Text style={styles.txt}>Member Gold</Text>
                <View style={styles.row}>
                    <Text style={styles.title}>Anam Wusono</Text>
                    <Image source={EditIcon1} />
                </View>
                <Text style={styles.subTxt}>anamwp66@gmail.com</Text>
                <View style={styles.voucherRow}>
                    <Image source={VoucherIcon} />
                    <Text style={styles.voucherTxt}>You Have 3 Voucher</Text>
                </View>
            </View>
            {/*  */}
            <View style={styles.alignContainer}>
                <Text style={styles.voucherTxt}>Favorite</Text>
                {orderContents.map((order, index) => (
                    <View key={index} style={styles.orderItems}>
                        <Image source={order.imgURL} style={styles.image} />
                        <View style={styles.textContainer}>
                            <Text style={styles.orderTitle}>{order.DishName}</Text>
                            <Text style={styles.orderName}>{order.restaurantName}</Text>
                            <Text style={styles.orderPrice}>$ {order.price}</Text>
                        </View>
                        <TouchableOpacity style={styles.processButton}>
                            <Text style={styles.processButtonText}>Buy Again</Text>
                        </TouchableOpacity>
                    </View>
                ))}
            </View>
        </ScrollView>
    );
}

export default ProfileScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F8F9FE',
        marginBottom: HEIGHT * 0.1,
    },
    alignContainer: {
        alignSelf: 'center',
    },
    imageContainer: {
        width: WIDTH * 1.0,
        height: HEIGHT * 0.4,
        resizeMode: 'cover',
        position: 'absolute',
    },
    txt: {
        backgroundColor: '#FEF7E7',
        color: '#F8B12B',
        padding: 10,
        width: WIDTH * 0.30,
        borderRadius: WIDTH * 0.05,
    }, cardContainer: {
        marginTop: HEIGHT * 0.35,
        backgroundColor: '#fff',
        padding: WIDTH * 0.05,
        // paddingBottom: WIDTH * 0.05,
        // borderTopLeftRadius: WIDTH * 0.1,
        borderRadius: WIDTH * 0.1,
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: HEIGHT * 0.02,
    },
    title: {
        fontSize: 25,
        fontWeight: 'bold',
    }, subTxt: {
        // fontWeight: '300',
        color: '#D3D3D3',
        marginTop: WIDTH * 0.03,
    },
    voucherRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: HEIGHT * 0.04,
    },
    voucherTxt: {
        fontWeight: 'bold',
        margin: WIDTH * 0.07,
    }, orderItems: {
        width: WIDTH * 0.90,
        height: HEIGHT * 0.12,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 10,
        backgroundColor: '#FFFFFF',
        padding: 10,
        borderRadius: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.04,
        shadowRadius: 4,
    }, image: {
        width: 50,
        height: 50,
        borderRadius: 10,
    },
    textContainer: {
        marginLeft: 20,
        gap: 5,
        flex: 1,
    },
    orderTitle: {
        fontWeight: 'bold',
        fontSize: 15,
    },
    orderName: {
        color: '#888',
        fontWeight: '200',
        fontSize: 14,
    },
    orderPrice: {
        fontSize: 19,
        color: '#41CE7E',
        fontWeight: 'bold',
    }, processButton: {
        marginTop: 10,
        backgroundColor: '#41CE7E',
        width: WIDTH * 0.25,
        height: HEIGHT * 0.04,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    processButtonText: {
        color: '#fff',
        fontWeight: 'bold',
    },

});

