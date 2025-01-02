import { FlatList, Image, Pressable, StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import HomeTitleContainer from '../components/HomeTitleContainer';
import { sections } from '../data/commonArray';
import RestaurantRenderItems from '../components/RestaurantRenderItems';
import { HEIGHT, WIDTH } from '../global/dimensions';
import { backIcon } from '../assets/icons';
import { useNavigation } from '@react-navigation/native';

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
    const navigation = useNavigation();
    const [searchData, setSearchData] = useState(sections);

    function handleSearchData(data: restaurantItem) {
        setSearchData(data);
    }

    return (
        <View style={[styles.container, styles.marginLeft]}>

            <FlatList
                numColumns={2}
                contentContainerStyle={styles.cards}
                data={searchData}
                keyExtractor={item => item.id.toString()}
                renderItem={({ item }) => (
                    <RestaurantRenderItems item={item} navigate={'ProductDetailScreen'} />
                )}
                ListHeaderComponent={<>
                    <Pressable style={styles.buttonStyle} onPress={() => { navigation.goBack(); }}>
                        <Image source={backIcon} />
                    </Pressable>
                    <HomeTitleContainer isFilterButton={true} data={sections} sendSearchData={handleSearchData} />

                    <View style={styles.ViewMoreContainer}>
                        <Text style={[styles.heading2, styles.marginLeft]}>Nearest Restaurant</Text>
                    </View>
                </>}

                ListHeaderComponentStyle={{ marginTop: HEIGHT * 0.05 }}
            />
        </View>
    );
};

export default RestaurantListScreen;

const styles = StyleSheet.create({
    marginLeft: {
        paddingLeft: WIDTH * 0.05,
        marginVertical: HEIGHT * 0.02,
    },
    container: {
        flex: 1,
        backgroundColor: '#F9FBFF',
    },
    cards: {
        justifyContent: 'space-around',
    },
    ViewMoreContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    heading2: {
        fontSize: 15,
        fontWeight: 'bold',
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
