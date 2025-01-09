import { View, Text, Image, StyleSheet, Dimensions } from 'react-native';
import React from 'react';
import { selectColorTheme } from '../reducers/colorThemeSlice';
import { useSelector } from 'react-redux';
// import { useSelector } from 'react-redux';

const HEIGHT = Dimensions.get('screen').height;
const WIDTH = Dimensions.get('screen').width;

const NotificationRenderItems = ({ item }: any) => {
    const currentTheme = useSelector(selectColorTheme);
    return (
        <View style={[styles.notificationItems, { backgroundColor: currentTheme.lightWhite }]} >
            <Image source={item.imgURl} />
            <View style={styles.textContainer}>
                <Text style={[styles.notificationTitle, { color: currentTheme.defaultTextColor }]}>{item.content}</Text>
                <Text style={styles.notificationTime}>{item.time}</Text>
            </View>
        </View>
    );
};

export default NotificationRenderItems;

const styles = StyleSheet.create({
    notificationItems: {
        width: WIDTH * 0.9,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: HEIGHT * 0.02,
        backgroundColor: '#FFFFFF',
        padding: 20,
        borderRadius: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.03,
        shadowRadius: 4,
    },
    textContainer: {
        marginLeft: WIDTH * 0.07,
        flex: 1,
        // marginTop: HEIGHT * 0.05,
    },
    notificationTitle: {
        fontWeight: '500',
        fontSize: 15,
    },
    notificationTime: {
        color: '#CBCBCB',
        // fontWeight: '300',
        fontSize: 14,
        marginTop: HEIGHT * 0.005,
    },
});

