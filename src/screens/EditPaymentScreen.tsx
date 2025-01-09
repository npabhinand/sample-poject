import { View, StyleSheet, TouchableOpacity, Image, Text } from 'react-native';
import React, { useState } from 'react';
import ChatTitleComponent from '../components/ChatTitleComponent';
import BackgroundImage from '../components/BackgroundImage';
import { paymentContent } from '../data/commonArray';
import { HEIGHT, WIDTH } from '../common/dimensions';
import { useSelector } from 'react-redux';
import { selectColorTheme } from '../reducers/colorThemeSlice';


const EditPaymentScreen = () => {
    const currentTheme = useSelector(selectColorTheme);
    const [selectedIndex, setSelectedIndex] = useState(null);

    const handlePress = (index: any) => {
        setSelectedIndex(index);
    };

    return (
        <View style={[styles.container, { backgroundColor: currentTheme.themeColor }]}>
            <BackgroundImage />
            <ChatTitleComponent title="Payment" />
            {paymentContent.map((payment, index) => (
                <TouchableOpacity
                    key={index}
                    style={[
                        styles.cardContainer,
                        selectedIndex === index ? styles.selected : styles.notSelected,
                        { backgroundColor: currentTheme.lightWhite }]}
                    onPress={() => handlePress(index)}
                >
                    <Image
                        source={payment.imgURL}
                        style={{
                            tintColor: currentTheme.name === 'dark' ? currentTheme.commonWhite : undefined,
                        }}
                    />

                    <Text style={{ color: currentTheme.defaultTextColor }}>{payment.cardNumber}</Text>
                </TouchableOpacity>
            ))}
        </View>
    );
};

export default EditPaymentScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F4F5FA',
    },
    cardContainer: {
        width: WIDTH * 0.9,
        height: HEIGHT * 0.09,
        marginTop: HEIGHT * 0.02,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#F3F3F6',
        padding: HEIGHT * 0.01,
        borderRadius: WIDTH * 0.05,
        alignSelf: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.04,
        shadowRadius: 4,
    },
    notSelected: {
        backgroundColor: '#F3F3F6',
    },
    selected: {
        backgroundColor: 'white',
    },
    // cardImage: {
    //     width: 30, // Adjust based on your image size
    //     height: 30, // Adjust based on your image size
    // },
});
