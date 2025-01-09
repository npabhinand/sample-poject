import { FlatList, Image, Pressable, StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import HomeTitleContainer from '../components/HomeTitleContainer';
import { sections } from '../data/commonArray';
import RestaurantRenderItems from '../components/RestaurantRenderItems';
import { HEIGHT, WIDTH } from '../common/dimensions';
import { backIcon } from '../assets/icons';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import { selectColorTheme } from '../reducers/colorThemeSlice';

interface restaurantItem {
    id: number;
    name: string;
    time: number,
    title: string;
    imgURL: any;
    content: any;
    rating: string;
    description: string;
    location: string;
}

const RestaurantListScreen = () => {
    const currentTheme = useSelector(selectColorTheme);
    const navigation = useNavigation();
    const [searchData, setSearchData] = useState(sections);

    function handleSearchData(data: restaurantItem) {
        setSearchData(data);
    }
    return (
        <View style={[styles.container, styles.marginLeft, { backgroundColor: currentTheme.themeColor }]}>

            <FlatList
                numColumns={2}
                contentContainerStyle={styles.cards}
                data={searchData}
                keyExtractor={item => item.id.toString()}
                renderItem={({ item }) => (
                    <RestaurantRenderItems item={item} navigate={'ProductDetailScreen'} />
                )}
                ListHeaderComponent={<>
                    <Pressable style={[styles.buttonStyle, { backgroundColor: currentTheme.name === 'dark' ? '#251C13' : '#FDF5EB' }]} onPress={() => { navigation.goBack(); }}>
                        <Image source={backIcon} />
                    </Pressable>
                    <HomeTitleContainer isFilterButton={true} data={sections} sendSearchData={handleSearchData} />

                    <View style={styles.ViewMoreContainer}>
                        <Text style={[styles.heading2, { color: currentTheme.defaultTextColor }]}>Popular Restaurant</Text>
                    </View>
                </>}

                ListHeaderComponentStyle={styles.headerStyle}
            />
        </View>
    );
};

export default RestaurantListScreen;

const styles = StyleSheet.create({
    headerStyle: {
        marginTop: HEIGHT * 0.05,
        marginLeft: WIDTH * 0.05,
    },
    marginLeft: {
        // paddingLeft: WIDTH * 0.05,
        // marginVertical: HEIGHT * 0.02,
    },
    container: {
        flex: 1,
        // backgroundColor: '#F9FBFF',
    },
    cards: {
        // justifyContent: 'space-around',
        // paddingLeft: WIDTH * 0.05,
        // alignItems: 'center',
    },
    ViewMoreContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    heading2: {
        fontSize: 15,
        fontWeight: 'bold',
        marginVertical: HEIGHT * 0.02,
        paddingLeft: WIDTH * 0.03,
    },
    viewMoreMargin: {
        padding: 20,
        marginRight: 15,
    },
    viewMoreColor: {
        color: '#FF7C32',
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
        marginBottom: HEIGHT * -0.02,
        marginLeft: WIDTH * 0.04,
    },
});
