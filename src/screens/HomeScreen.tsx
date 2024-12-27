import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    ScrollView,
    SafeAreaView,
    FlatList,
    Dimensions,
} from 'react-native';
import {
    promoImage,
    restaurantImage1,
    restaurantImage2,
} from '../assets/images';
import RestaurantRenderItems from '../components/RestaurantRenderItems';
import MenuRenderItems from '../components/MenuRenderItems';
import { useNavigation } from '@react-navigation/native';
import HomeTitleContainer from '../components/HomeTitleContainer';
import { menuArray } from '../data/commonArray';
import PromoComponent from '../components/PromoComponent';

interface card {
    id: number,
    name: string;
    time: number;
    imgURL: any;
}

export const restaurantCards: card[] = [
    {
        id: 1,
        name: 'Vegan Resto',
        time: 12,
        imgURL: restaurantImage1,
    },
    {
        id: 2,
        name: 'Healthy Food',
        time: 8,
        imgURL: restaurantImage2,
    },
];


const HEIGHT = Dimensions.get('screen').height;
const WIDTH = Dimensions.get('screen').width;
function HomeScreen() {
    const navigation = useNavigation();
    return (
        <SafeAreaView style={styles.container}>
            <HomeTitleContainer isFilterButton={true} />

            <ScrollView >
                <ScrollView horizontal={true} contentContainerStyle={styles.scrollStyle}>
                    {[1, 2, 3].map((promo) => (
                        <View key={promo}>
                            <PromoComponent image={promoImage} btnText="Buy Now" />
                        </View>
                    ))}
                </ScrollView>

                <View style={styles.ViewMoreContainer}>
                    <Text style={[styles.heading2, styles.marginLeft]} >Nearest Restaurant</Text>
                    <TouchableOpacity>
                        <Text style={[styles.viewMoreColor, styles.viewMoreMargin]} onPress={() => navigation.navigate('RestaurantList')}>View More</Text>
                    </TouchableOpacity>
                </View>

                {/* Restaurant List */}
                <FlatList
                    numColumns={2}
                    contentContainerStyle={styles.cards}
                    data={restaurantCards}
                    keyExtractor={item => item.id.toString()}
                    renderItem={({ item }) => (
                        <RestaurantRenderItems item={item} />
                    )}
                />

                <View style={styles.ViewMoreContainer}>
                    <Text style={[styles.heading2, styles.marginLeft]}>Popular Menu</Text>
                    <TouchableOpacity onPress={() => navigation.navigate('MenuList')}>
                        <Text style={[styles.viewMoreColor, styles.viewMoreMargin]}>
                            View More
                        </Text>
                    </TouchableOpacity>
                </View>

                {/* Menu List */}
                <FlatList
                    numColumns={1}
                    data={menuArray}
                    contentContainerStyle={styles.menuContainer}
                    keyExtractor={item => item.id.toString()}
                    renderItem={({ item }) => (
                        <MenuRenderItems item={item} />
                    )}
                />
            </ScrollView>
        </SafeAreaView>
    );
}

export default HomeScreen;


const styles = StyleSheet.create({
    marginLeft: {
        padding: 20,
        marginLeft: 15,
    },
    container: {
        flex: 1,
        backgroundColor: '#F9FBFF',
    },
    cards: {
        justifyContent: 'space-evenly',
        marginLeft: 15,
    },
    menuContainer: {
        // justifyContent: 'center',
        alignItems: 'center',
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
    scrollStyle: {
        marginLeft: WIDTH * 0.05,
        gap: 10,
        marginTop: 10,
    },
});
