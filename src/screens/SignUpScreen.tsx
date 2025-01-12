import { View, SafeAreaView, Text, Image, TextInput, StyleSheet, Pressable } from 'react-native';
import React from 'react';
import { HEIGHT, WIDTH } from '../common/dimensions';
import { checkedIcon, emailIcon, passwordIcon, profileIcon, showIcon } from '../assets/icons';
import LoginTitleComponent from '../components/LoginTitleComponent';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../navigation/AppNavigator';
import { useSelector } from 'react-redux';
import { selectColorTheme } from '../reducers/colorThemeSlice';


const SignUpScreen = () => {
    const navigation = useNavigation<NavigationProp<RootStackParamList, 'LoginScreen'>>();
    const currentTheme = useSelector(selectColorTheme);
    return (
        <SafeAreaView style={[styles.container, { backgroundColor: currentTheme.themeColor }]}>
            <LoginTitleComponent title="Sign Up For Free" />
            <View style={styles.inputContainer}>
                <View style={styles.row}>
                    <TextInput placeholder="Name" style={[styles.input, { backgroundColor: currentTheme.lightWhite }]} placeholderTextColor={'#888'} />
                    <Image source={profileIcon} style={styles.iconStyle} />
                </View>
                <View style={styles.row}>
                    <TextInput placeholder="Email" style={[styles.input, { backgroundColor: currentTheme.lightWhite }]} placeholderTextColor={'#888'} />
                    <Image source={emailIcon} style={styles.iconStyle} />
                </View>
                <View style={styles.row}>
                    <TextInput placeholder="Password" style={[styles.input, { backgroundColor: currentTheme.lightWhite }]} placeholderTextColor={'#888'} />
                    <Image source={passwordIcon} style={styles.iconStyle} />
                    <Image source={showIcon} style={[styles.visibleIcon, { tintColor: currentTheme.name === 'dark' ? currentTheme.commonWhite : currentTheme.commonBlack }]} />
                </View>
            </View>
            <View style={styles.checkList}>
                <Image source={checkedIcon} style={styles.checkedIcon} />
                <Text style={styles.txt}>Keep Me Signed In</Text>
            </View>
            <View style={styles.checkList}>
                <Image source={checkedIcon} style={styles.checkedIcon} />
                <Text style={styles.txt}>Email Me About Special Pricing</Text>
            </View>
            <Pressable style={styles.submitBtn} onPress={() => navigation.navigate('LoginScreen')}><Text style={styles.submitBtnText}
            >Create Account</Text></Pressable>
            <Text style={styles.subTxt}>already have an account?</Text>
        </SafeAreaView>
    );
};

export default SignUpScreen;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5F6FE',
        // alignItems: 'center'
    },
    input: {
        width: WIDTH * 0.85,
        height: HEIGHT * 0.07,
        alignItems: 'center',
        // borderWidth: 1,
        // marginLeft: WIDTH * 0.15,
        // backgroundColor: '#fff',
        // shadowColor: '#F8F8FE',
        // shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.03,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 4,
        marginTop: HEIGHT * 0.02,
        borderRadius: WIDTH * 0.03,
        paddingLeft: WIDTH * 0.14,
    },
    inputContainer: {
        alignItems: 'center',
        marginTop: HEIGHT * 0.03,

    },
    submitBtn: {
        backgroundColor: '#44D581',
        height: HEIGHT * 0.06,
        width: WIDTH * 0.4,
        borderRadius: WIDTH * 0.04,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        marginTop: HEIGHT * 0.05,
    },
    submitBtnText: {
        color: '#fff',
        fontWeight: 'bold',
        // marginTop: HEIGHT *
    },
    iconStyle: {
        position: 'absolute',
        alignSelf: 'center',
        left: WIDTH * 0.05,
        bottom: HEIGHT * 0.022,
    },
    txt: {
        fontWeight: '300',
        color: '#8C8D8F',
        // textAlign: 'left',
        marginLeft: WIDTH * 0.03,

    },
    checkedIcon: {
        height: WIDTH * 0.05,
        width: WIDTH * 0.05,
    },
    row: {
        flexDirection: 'row',
        // alignItems: 'center',
        // justifyContent: 'center',

        // marginTop: HEIGHT * 0.02,
    }, checkList: {
        marginTop: HEIGHT * 0.02,
        flexDirection: 'row',
        paddingLeft: HEIGHT * 0.02,
        // alignItems: 'flex-start',
        justifyContent: 'flex-start',
    }, subTxt: {
        color: '#44D581',
        textDecorationLine: 'underline',
        marginTop: HEIGHT * 0.03,
        // marginBottom: HEIGHT * 0.05,
        textAlign: 'center',
    },
    visibleIcon: {
        position: 'absolute',
        right: WIDTH * 0.05,
        bottom: HEIGHT * 0.02,
    }
});


