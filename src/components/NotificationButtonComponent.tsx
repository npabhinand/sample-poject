import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { notificationIcon } from '../assets/icons';
import { useNavigation } from '@react-navigation/native';

const NotificationButtonComponent = () => {
    const navigation = useNavigation();
    return (
        <View>
            <TouchableOpacity style={styles.notificationButton} onPress={() => { navigation.navigate('NotificationScreen') }}>
                <Image source={notificationIcon} />
            </TouchableOpacity>
        </View>
    );
};

export default NotificationButtonComponent;

const styles = StyleSheet.create({
    notificationButton: {
        borderRadius: 10,
        backgroundColor: '#fff',
        padding: 10,
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        right: 20,
    },
});
