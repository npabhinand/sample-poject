import { Dimensions, Image, StyleSheet, TouchableOpacity, View } from 'react-native';
import React from 'react';
import TitleComponent from '../components/TitleComponent';
import { backIcon } from '../assets/icons';
import { useNavigation } from '@react-navigation/native';

const HEIGHT = Dimensions.get('screen').height;
const WIDTH = Dimensions.get('screen').width;

interface TitleProps {
    title?: string;
}
const ChatTitleComponent: React.FC<TitleProps> = ({ title }) => {
    const navigation = useNavigation();
    return (
        <View style={[styles.marginLeft, styles.titleContainer]}>
            <TouchableOpacity style={styles.buttonStyle} onPress={() => { navigation.goBack(); }}>
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
        backgroundColor: '#FDF5EB',
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
