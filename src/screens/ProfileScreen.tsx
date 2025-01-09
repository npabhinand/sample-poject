import React from 'react';
import { Image, StyleSheet, Text, View, ScrollView } from 'react-native';
import { ProfileImage } from '../assets/images';
import { EditIcon1, VoucherIcon } from '../assets/icons';
import { HEIGHT, WIDTH } from '../common/dimensions';
import { useSelector } from 'react-redux';
import { selectColorTheme } from '../reducers/colorThemeSlice';
import ProcessRender from '../components/ProcessRender';
import { orderContents } from '../data/commonArray';

function ProfileScreen() {
    const currentTheme = useSelector(selectColorTheme);
    return (
        <View>
            <Image source={ProfileImage} style={styles.imageContainer} />
            <ScrollView contentContainerStyle={[styles.scrollContent, { backgroundColor: currentTheme.themeColor }]} nestedScrollEnabled={true} bounces={false}>
                <View style={styles.cardContainer}>
                    <Text style={styles.txt}>Member Gold</Text>
                    <View style={styles.row}>
                        <Text style={[styles.title, { color: currentTheme.defaultTextColor }]}>Anam Wusono</Text>
                        <Image source={EditIcon1} />
                    </View>
                    <Text style={styles.subTxt}>anamwp66@gmail.com</Text>
                    <View style={[styles.voucherRow, { backgroundColor: currentTheme.lightWhite }]}>
                        <Image source={VoucherIcon} />
                        <Text style={[styles.voucherTxt, { color: currentTheme.defaultTextColor }]}>You Have 3 Voucher</Text>
                    </View>
                </View>

                <View style={styles.alignContainer}>
                    <Text style={[styles.voucherTxt, { color: currentTheme.defaultTextColor }]}>Favorite</Text>
                    {orderContents.map((item, index) => (
                        <ProcessRender
                            order={item} key={index}
                            isOnCardPress={false} />
                        // isSelected={selectedItemId === item.id}

                    ))}
                </View>
            </ScrollView>
        </View>
    );
}

export default ProfileScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F8F9FE',
    },
    alignContainer: {
        alignSelf: 'center',
        paddingBottom: HEIGHT * 0.05,

    },
    imageContainer: {
        width: WIDTH * 1.0,
        height: HEIGHT * 0.4,
        resizeMode: 'cover',
        position: 'absolute',
        top: 0,
        left: 0,
    },
    scrollContent: {
        marginTop: HEIGHT * 0.35,
        zIndex: 1,
        backgroundColor: '#F8F9FE',
        borderTopLeftRadius: HEIGHT * 0.05,
        borderTopRightRadius: HEIGHT * 0.05,

    },
    txt: {
        backgroundColor: '#FEF7E7',
        color: '#F8B12B',
        padding: 10,
        width: WIDTH * 0.30,
        borderRadius: WIDTH * 0.05,
        marginTop: HEIGHT * 0.03,
    },
    cardContainer: {
        // backgroundColor: '#fff',
        padding: WIDTH * 0.05,
        marginBottom: 20,
        borderRadius: WIDTH * 0.1,
        zIndex: 0,
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: HEIGHT * 0.01,
    },
    title: {
        fontSize: 25,
        fontWeight: 'bold',
    },
    subTxt: {
        color: '#D3D3D3',
        marginTop: WIDTH * 0.03,
    },
    voucherRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: HEIGHT * 0.04,
        padding: HEIGHT * 0.02,
        borderRadius: WIDTH * 0.05,
    },
    voucherTxt: {
        fontWeight: 'bold',
        marginLeft: WIDTH * 0.05,
    },
});
