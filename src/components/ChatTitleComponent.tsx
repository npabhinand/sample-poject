/* eslint-disable react-native/no-inline-styles */
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';
import React from 'react';
import TitleComponent from '../components/TitleComponent';
import { backIcon } from '../assets/icons';
import { useNavigation } from '@react-navigation/native';
import { HEIGHT, WIDTH } from '../common/dimensions';
import { selectColorTheme } from '../reducers/colorThemeSlice';
import { useSelector } from 'react-redux';



interface TitleProps {
    title?: string;
}
const ChatTitleComponent: React.FC<TitleProps> = ({ title }) => {
    const navigation = useNavigation();
    const currentTheme = useSelector(selectColorTheme);
    return (
        <View style={[styles.marginLeft, styles.titleContainer]}>
            <TouchableOpacity style={[styles.buttonStyle, { backgroundColor: currentTheme.name === 'dark' ? '#251C13' : '#FDF5EB' }]} onPress={() => { navigation.goBack(); }}>
                <Image source={backIcon} />
            </TouchableOpacity>
            <TitleComponent title1={title} size={25} />
        </View>
    );
};

export default ChatTitleComponent;
const styles = StyleSheet.create({
    titleContainer: {
        marginTop: HEIGHT * 0.07,
    },
    buttonStyle: {
        // backgroundColor: '#FDF5EB',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 15,
        padding: 10,
        marginRight: 10,
        width: 45,
        height: 45,
        marginBottom: HEIGHT * 0.02,
    },
    marginLeft: {
        marginLeft: WIDTH * 0.06,
    },
});
