import { FlatList, StyleSheet, View, Text, Pressable, Image } from 'react-native';
import React, { useState } from 'react';
import HomeTitleContainer from '../components/HomeTitleContainer';
import MenuRenderItems from '../components/MenuRenderItems';
import { menuSections } from '../data/commonArray';
import { HEIGHT, WIDTH } from '../common/dimensions';
import { backIcon } from '../assets/icons';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import { selectColorTheme } from '../reducers/colorThemeSlice';

interface menuItem {
    id: number;
    title: string;
    imgURL: any;
    content: any;
    orders: string;
    rating: string;
    description1: string;
    recipe: string[];
    description2: string;
    type: string;
    price: number;
    restaurantName: string;
}
const MenuListScreen = () => {
    const currentTheme = useSelector(selectColorTheme);
    const navigation = useNavigation();
    const [searchData, setSearchData] = useState(menuSections);

    function handleSearchData(data: menuItem[]) {
        setSearchData(data);
    }

    return (
        <View style={[styles.container, { backgroundColor: currentTheme['themeColor'] }]}>
            <FlatList
                numColumns={1}
                data={searchData}
                bounces={false}
                contentContainerStyle={styles.menuContainer}
                keyExtractor={item => item.id.toString()}
                renderItem={({ item }) => (
                    <MenuRenderItems item={item} />
                )}
                ListHeaderComponent={
                    <>
                        <Pressable style={styles.buttonStyle} onPress={() => { navigation.goBack(); }}>
                            <Image source={backIcon} />
                        </Pressable>

                        <HomeTitleContainer isFilterButton={true} data={menuSections} sendSearchData={handleSearchData} />
                        <Text style={[styles.heading2, { color: currentTheme['defaultTextColor'] }]}>Popular Menu</Text>
                    </>
                }
                ListHeaderComponentStyle={styles.headerStyle}
            />
        </View>
    );
};

export default MenuListScreen;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F9FBFF',
    },
    menuContainer: {
        // justifyContent: 'center',
        alignItems: 'center',
    },
    heading2: {
        fontSize: 15,
        fontWeight: 'bold',
        margin: HEIGHT * 0.02,
    },
    headerStyle: {
        marginTop: HEIGHT * 0.05,
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
        zIndex: 1,
        marginTop: HEIGHT * 0.01,
        marginBottom: HEIGHT * -0.02,
        marginLeft: WIDTH * 0.04,
    },
});
