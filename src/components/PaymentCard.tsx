import { View, Text, StyleSheet, Image } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { WIDTH } from '../common/dimensions';
import { useSelector } from 'react-redux';
import { selectColorTheme } from '../reducers/colorThemeSlice';


interface ItemsProps {
    title?: string;
    description?: string;
    logo?: any;
    navigate?: string;
    descriptionTextWeight?: string;
}

const PaymentCard: React.FC<ItemsProps> = (props) => {
    const { title, description, logo, navigate, descriptionTextWeight } = props;
    const currentTheme = useSelector(selectColorTheme);
    const navigation = useNavigation();

    const handleNavigate = () => {
        if (navigate) {
            navigation.navigate(navigate);
        }
    };

    return (
        <View style={[styles.container, { backgroundColor: currentTheme.lightWhite }]} >
            <View style={styles.row}>
                <Text style={styles.orderName}>{title}</Text>
                <Text onPress={handleNavigate} style={styles.editTxt}>Edit</Text>
            </View>
            <View style={[styles.row, styles.textContainer]}>
                <Image source={logo} />
                <Text style={[styles.orderTitle, descriptionTextWeight === 'bold' ? styles.boldTitle : styles.normalTitle, { color: currentTheme.defaultTextColor }]}>
                    {description}
                </Text>
            </View>
        </View >
    );
};

export default PaymentCard;

const styles = StyleSheet.create({
    container: {
        width: WIDTH * 0.9,
        height: 100,
        marginBottom: 10,
        backgroundColor: '#FFFFFF',
        borderRadius: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        alignSelf: 'center',
        padding: 15,
    }, boldTitle: {
        fontWeight: 'bold',
    }, normalTitle: {
        fontWeight: '300',
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: 0,
        // padding: 10,
    },
    editTxt: {
        color: '#47DD86',
        fontSize: 15,
    },
    textContainer: {
        paddingTop: 20,
        overflow: 'visible',
    },
    orderTitle: {
        // fontSize: 15,
        // paddingRight: 10,
        // marginTop: 20,
        marginLeft: 5,
        marginRight: 20,
    },
    orderName: {
        color: '#888',
        fontWeight: '200',
        // fontSize: 14,
    },
    orderText: {
        fontSize: 22,
        color: '#FEAD1D',
        fontWeight: 'bold',
        right: 15,
    },
});
