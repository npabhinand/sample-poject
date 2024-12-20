import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    ScrollView,
    SafeAreaView,
    FlatList,
} from 'react-native';
import {
    restaurantImage1,
    restaurantImage2,
} from '../assets/images';
import RestaurantRenderItems from '../components/RestaurantRenderItems';
import MenuRenderItems from '../components/MenuRenderItems';
import { PromoComponent } from '../components/PromoComponent';
import { useNavigation } from '@react-navigation/native';
import HomeTitleContainer from '../components/HomeTitleContainer';
import { menuArray } from '../data/commonArray';

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


function HomeScreen() {
    const navigation = useNavigation();
    return (
        <SafeAreaView style={styles.container}>
            <HomeTitleContainer />

            {/* Scrollable Content */}
            <ScrollView style={{ flex: 1 }}>
                <ScrollView horizontal={true}>
                    <PromoComponent />
                    <PromoComponent />
                    <PromoComponent />
                </ScrollView>

                <View style={styles.ViewMoreContainer}>
                    <Text style={[styles.heading2, styles.marginLeft]} >Nearest Restaurant</Text>
                    <TouchableOpacity>
                        <Text style={[styles.heading2, styles.viewMoreColor, styles.viewMoreMargin]} onPress={() => navigation.navigate('RestaurantList')}>View More</Text>
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
                    <Text style={[styles.heading2, styles.marginLeft, { fontWeight: 'bold' }]}>Popular Menu</Text>
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
        justifyContent: 'space-around',
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
    },
    viewMoreMargin: {
        padding: 20,
        marginRight: 15,
    },
    viewMoreColor: {
        color: '#FF7C32',
    },
});
