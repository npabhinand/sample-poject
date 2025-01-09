import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import ChatBackgroundImage from '../components/ChatBackgroundImage';
import { logo } from '../assets/images';
import { HEIGHT } from '../common/dimensions';
import { selectColorTheme } from '../reducers/colorThemeSlice';
import { useSelector } from 'react-redux';
import { RootStackParamList } from '../navigation/AppNavigator';
const SplashScreen = () => {
    const navigation = useNavigation<NavigationProp<RootStackParamList, 'SignUpScreen'>>();
    useEffect(() => {
        setTimeout(() => {
            navigation.navigate('SignUpScreen');
        }, 2000);
    }, []);
    const currentTheme = useSelector(selectColorTheme);
    return (
        <View style={[styles.container, { backgroundColor: currentTheme.themeColor }]}>
            <ChatBackgroundImage />
            <Image source={logo} style={styles.logoImage} />
            <Text style={[styles.textColor, styles.title]}>FoodNinja</Text>
            <Text style={[styles.subText, { color: currentTheme.defaultTextColor }]}>Deliever Favorite Food</Text>
        </View>
    );
};
export default SplashScreen;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 31,
        fontWeight: 'bold',
        marginTop: HEIGHT * 0.01,
    },
    subText: {
        fontSize: 12,
        fontWeight: '600',
    },
    subTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: HEIGHT * 0.06,
    },
    textColor: {
        color: '#44D581',
    },
    backgroundImage: {
        position: 'absolute',
        opacity: 0.8,
    }, logoImage: {
        marginTop: HEIGHT * 0.03,
    },
});
