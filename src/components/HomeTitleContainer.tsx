/* eslint-disable react-native/no-inline-styles */
import { View, StyleSheet, TouchableOpacity, Image, TextInput } from 'react-native';
import React from 'react';
import BackgroundImage from './BackgroundImage';
import TitleComponent from './TitleComponent';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { filterIcon, notificationIcon, searchIcon } from '../assets/icons';
import { HEIGHT, WIDTH } from '../common/dimensions';
import { RootStackParamList } from '../navigation/AppNavigator';
import { selectColorTheme } from '../reducers/colorThemeSlice';
import { useSelector } from 'react-redux';
import { commonColor } from '../common/colors';


interface filterProps {
    isFilterButton?: boolean;
    data: any[];
    sendSearchData?: (filteredData: any[]) => void;
}

const HomeTitleContainer: React.FC<filterProps> = (props) => {
    const { isFilterButton, data, sendSearchData } = props;
    const navigation = useNavigation<NavigationProp<RootStackParamList, 'NotificationScreen', 'FilterScreen'>>();
    const currentTheme = useSelector(selectColorTheme);


    const onChangeSearch = (searchText: string) => {
        const filtered = data.filter(item =>
            item.title.toLowerCase().includes(searchText.toLowerCase()),
        );
        sendSearchData(filtered);
    };


    return (
        <View>
            <BackgroundImage />
            <View style={styles.titleRow}>
                <TitleComponent title1="Find Your" title2="Favorite Food" size={31} />
                <TouchableOpacity style={[styles.notificationButton, { backgroundColor: currentTheme.name === 'dark' ? `${commonColor.darkGray}40` : currentTheme.lightWhite }]} onPress={() => { navigation.navigate('NotificationScreen'); }}>
                    <Image source={notificationIcon} />
                </TouchableOpacity>
            </View>

            <View style={styles.searchRow}>
                {!(isFilterButton) ? <>
                    <View style={[styles.updatedContainer, {
                        backgroundColor: currentTheme.name === 'dark' ? currentTheme.lightWhite : '#FEF6ED',
                    }]}>
                        <Image style={[styles.searchIcon, { tintColor: currentTheme.name === 'dark' ? currentTheme.commonWhite : '#DB651B' }]} source={searchIcon} />
                        <TextInput
                            style={[isFilterButton ? styles.input : styles.inputUpdated, { backgroundColor: currentTheme.name === 'dark' ? currentTheme.lightWhite : '#FEF6ED' }]}
                            placeholderTextColor={currentTheme.name === 'dark' ? currentTheme.grayColor : '#F2C3A1'}
                            placeholder=" What do you want to order?"
                        />
                    </View>
                </> : <>
                    <View style={[styles.searchContainer, {
                        backgroundColor: currentTheme.name === 'dark' ? currentTheme.lightWhite : '#FEF6ED',
                    }]}>
                        <Image style={[styles.searchIcon, { tintColor: currentTheme.name === 'dark' ? currentTheme.commonWhite : '#DB651B' }]} source={searchIcon} />
                        <TextInput
                            style={[styles.input]}
                            placeholder=" What do you want to order?"
                            placeholderTextColor={currentTheme.name === 'dark' ? currentTheme.grayColor : '#F2C3A1'}
                            onChangeText={newText => onChangeSearch(newText)}
                        />
                    </View>
                    <TouchableOpacity style={[styles.filterButton, { backgroundColor: currentTheme.name === 'dark' ? currentTheme.lightWhite : '#FEF6ED' }]} onPress={() => navigation.navigate('FilterScreen')}>
                        <Image source={filterIcon} style={{ tintColor: currentTheme.name === 'dark' ? currentTheme.commonWhite : '#DB651B' }} />
                    </TouchableOpacity>
                </>}

            </View>
        </View>
    );
};

export default HomeTitleContainer;

const styles = StyleSheet.create({
    notificationButton: {
        borderRadius: WIDTH * 0.04,
        // backgroundColor: 'rgba(0,0,0,0)',
        // backgroundColor: 'rgba(255, 255, 255, 0.5)',
        alignItems: 'center',
        justifyContent: 'center',
        width: WIDTH * 0.12,
        height: WIDTH * 0.12,
        shadowOffset: { width: 0, height: 1 },
        // opacity: 0.4,
        // shadowColor: '#fff',
        shadowOpacity: 0.1,
        shadowRadius: 4,
        marginRight: WIDTH * 0.05,
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
        marginLeft: WIDTH * 0.03,
        marginBottom: HEIGHT * 0.01,
        zIndex: 1,
        gap: WIDTH * 0.03,
    },
    searchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        position: 'relative',
        // backgroundColor: '#FEF6ED',
        borderRadius: 15,
    },
    updatedContainer: {
        alignItems: 'center',
        backgroundColor: '#FEF6ED',
        borderRadius: 15,
        justifyContent: 'center',

    },
    inputUpdated: {
        width: WIDTH * 0.70,
        height: HEIGHT * 0.07,
        marginLeft: WIDTH * 0.15,
        borderRadius: 15,
        marginRight: WIDTH * 0.01,
    },
    input: {
        width: WIDTH * 0.55,
        height: HEIGHT * 0.07,
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
    filterButton: {
        backgroundColor: '#FDF5EB',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: HEIGHT * 0.02,
        height: HEIGHT * 0.07,
        width: HEIGHT * 0.065,
    },
});
