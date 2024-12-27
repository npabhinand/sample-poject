import { View, StyleSheet, Dimensions, TouchableOpacity, Image, TextInput } from 'react-native';
import React from 'react';
import BackgroundImage from './BackgroundImage';
import TitleComponent from './TitleComponent';
import FilterButtonComponent from './FilterButtonComponent';
import { useNavigation } from '@react-navigation/native';
import { notificationIcon, searchIcon } from '../assets/icons';


const WIDTH = Dimensions.get('screen').width;
const HEIGHT = Dimensions.get('screen').height;
const HomeTitleContainer = ({ isFilterButton }: any) => {
    const navigation = useNavigation();
    return (
        <View>
            <BackgroundImage />
            <View style={[styles.titleRow, styles.marginLeft]}>
                <TitleComponent title1="Find Your" title2="Favorite Food" size={31} />
                <TouchableOpacity style={styles.notificationButton} onPress={() => { navigation.navigate('NotificationScreen') }}>
                    <Image source={notificationIcon} />
                </TouchableOpacity>
            </View>

            <View style={styles.searchRow}>
                {!(isFilterButton) ? <>
                    <View style={styles.updatedContainer}>
                        <Image style={styles.searchIcon} source={searchIcon} />
                        <TextInput
                            style={isFilterButton ? styles.input : styles.inputUpdated}
                            placeholder="What do you want to order?"
                            placeholderTextColor={'#F2C3A1'}
                        />
                    </View>
                </> : <>
                    <View style={styles.searchContainer}>
                        <Image style={styles.searchIcon} source={searchIcon} />
                        <TextInput
                            style={styles.input}
                            placeholder=" What do you want to order?"
                            placeholderTextColor={'#F2C3A1'}
                        />
                    </View>
                    <FilterButtonComponent />
                </>}

            </View>
        </View>
    );
};

export default HomeTitleContainer;

const styles = StyleSheet.create({
    notificationButton: {
        borderRadius: WIDTH * 0.03,
        backgroundColor: '#fff',
        padding: 10,
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.05,
        shadowRadius: 4,
        right: 20,
    },
    marginLeft: {
        marginTop: HEIGHT * 0.05,
        padding: 20,
        marginLeft: WIDTH * 0.03,
    },
    titleRow: {
        padding: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: HEIGHT * 0.01,
    },
    searchRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        marginLeft: HEIGHT * 0.01,
        zIndex: 1,
        // backgroundColor: 'white',
    }, searchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        position: 'relative',
        backgroundColor: '#FEF6ED',
        borderRadius: 15,
        // marginLeft: 10,
    },
    updatedContainer: {
        alignItems: 'center',
        // alignSelf: 'center',
        backgroundColor: '#FEF6ED',
        borderRadius: 15,
        // marginLeft: 10,
        justifyContent: 'center',
        // width: WIDTH * 1,
    },
    inputUpdated: {
        width: WIDTH * 0.72,
        height: HEIGHT * 0.07,
        marginLeft: WIDTH * 0.15,
    },
    input: {
        width: WIDTH * 0.55,
        height: HEIGHT * 0.07,
        // paddingLeft: 35,
        marginLeft: WIDTH * 0.15,
    },
    searchIcon: {
        position: 'absolute',
        left: 20,
        top: '50%',
        transform: [{ translateY: -12 }],
        width: 24,
        height: 24,
    },
});
