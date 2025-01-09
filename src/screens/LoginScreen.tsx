import { View, Text, Image, TextInput, StyleSheet, Pressable } from 'react-native';
import React from 'react';

import { HEIGHT, WIDTH } from '../common/dimensions';
import { facebookIcon, googleIcon } from '../assets/icons';
import LoginTitleComponent from '../components/LoginTitleComponent';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../navigation/AppNavigator';
import { useSelector } from 'react-redux';
import { selectColorTheme } from '../reducers/colorThemeSlice';
// import ToggleSwitch from 'toggle-switch-react-native';

const LoginScreen = () => {
    const navigation = useNavigation<NavigationProp<RootStackParamList, 'HomeTab'>>();
    const currentTheme = useSelector(selectColorTheme);
    return (
        <View style={[styles.container, { backgroundColor: currentTheme.themeColor }]}>
            <LoginTitleComponent title="Login To Your Account" />
            <View style={styles.inputContainer}>
                <TextInput placeholder="Email" style={[styles.input, { backgroundColor: currentTheme.lightWhite }]} placeholderTextColor={'#888'} />
                <TextInput placeholder="password" style={[styles.input, { backgroundColor: currentTheme.lightWhite }]} placeholderTextColor={'#888'} />
                <Text style={[styles.txt, { color: currentTheme.defaultTextColor }]}>Or Continue With</Text>
                <View style={styles.row}>
                    <Pressable style={[styles.buttonStyle, { backgroundColor: currentTheme.lightWhite }]}><Image source={facebookIcon} />
                        <Text style={{ color: currentTheme.defaultTextColor }}>FaceBook</Text></Pressable>
                    <Pressable style={[styles.buttonStyle, { backgroundColor: currentTheme.lightWhite }]}><Image source={googleIcon} />
                        <Text style={{ color: currentTheme.defaultTextColor }}>Google</Text></Pressable>
                </View>
                <Text style={styles.subTxt}>Forgot Your Password?</Text>

                <Pressable style={styles.submitBtn} onPress={() => navigation.navigate('HomeTab')}><Text style={styles.submitBtnText}
                >Login</Text></Pressable>
            </View>
        </View>
    );
};

export default LoginScreen;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5F6FE',
        // alignItems: 'center'
    },
    input: {
        width: WIDTH * 0.85,
        height: HEIGHT * 0.06,
        backgroundColor: '#fff',
        // shadowColor: '#F8F8FE',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.02,
        shadowRadius: 4,
        marginTop: HEIGHT * 0.02,
        borderRadius: WIDTH * 0.03,
        paddingLeft: WIDTH * 0.08,
    },
    inputContainer: {
        alignItems: 'center',
        marginTop: HEIGHT * 0.03,

    }, txt: {
        fontWeight: '600',
        marginVertical: HEIGHT * 0.03,
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        marginTop: HEIGHT * 0.02,
    },
    buttonStyle: {
        height: HEIGHT * 0.06,
        backgroundColor: '#fff',
        width: WIDTH * 0.35,
        marginRight: WIDTH * 0.05,
        alignItems: 'center',
        justifyContent: 'space-evenly',
        flexDirection: 'row',
        borderRadius: WIDTH * 0.03,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.05,
        shadowRadius: 4,
    }, subTxt: {
        color: '#44D581',
        // textDecorationLine: 'underline',
        marginTop: HEIGHT * 0.03,
        marginBottom: HEIGHT * 0.05,
    }, submitBtn: {
        backgroundColor: '#44D581',
        height: HEIGHT * 0.06,
        width: WIDTH * 0.4,
        borderRadius: WIDTH * 0.04,
        alignItems: 'center',
        justifyContent: 'center',
    },
    submitBtnText: {
        color: '#fff',
        fontWeight: 'bold',
    },
});


