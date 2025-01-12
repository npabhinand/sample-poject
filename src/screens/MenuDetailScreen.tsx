import { StyleSheet, View, Text, Image, ScrollView, Pressable, Alert } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { backIcon, bagIcon, locationIcon2, loveIcon, starPin } from '../assets/icons';
import Testimonials from '../components/Testimonials';
import { HEIGHT, WIDTH } from '../common/dimensions';
import { useDispatch, useSelector } from 'react-redux';
import { addCart } from '../reducers/cartSlice';
import { selectColorTheme } from '../reducers/colorThemeSlice';


interface MenuItem {
    item: {
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
        quantity: number;
    },

}

interface MenuDetailScreenProps {
    route: { params: { section: MenuItem } };
}

const MenuDetailScreen: React.FC<MenuDetailScreenProps> = ({ route }) => {
    const { section } = route.params;
    const navigation = useNavigation();
    const currentTheme = useSelector(selectColorTheme);

    const dispatch = useDispatch();
    // const cartItems = useSelector(selectedCarts);

    const handlePress = () => {
        dispatch(addCart(section.item));
        Alert.alert('Item added to cart');
    };



    return (
        <View style={styles.container}>
            <Pressable style={styles.backButton} onPress={() => { navigation.goBack(); }}>
                <Image source={backIcon} />
            </Pressable>
            <Image source={section.item.content} style={styles.imageContainer} />

            <ScrollView bounces={false}>

                <View style={[styles.cardContainer, { backgroundColor: currentTheme.themeColor }]}>
                    <View style={styles.row}>
                        <View style={[styles.popularContainer, { backgroundColor: currentTheme.lightGreenButtonColor }]}>
                            <Text style={styles.txt}>Popular</Text>
                        </View>
                        <View style={styles.icons}>
                            <Pressable style={styles.right}>
                                <Image source={locationIcon2} />
                            </Pressable>
                            <Pressable>
                                <Image source={loveIcon} />
                            </Pressable>
                        </View>
                    </View>
                    <Text style={[styles.title, { color: currentTheme.defaultTextColor }]}>{section.item.title}</Text>
                    <View style={styles.ratings}>
                        <Image source={starPin} />
                        <Text style={styles.rating}>{section.item.rating}</Text>
                        <Image source={bagIcon} />
                        <Text style={styles.rating}>{section.item.orders}</Text>
                    </View>
                    <Text style={[styles.description, { color: currentTheme.defaultTextColor }]}>{section.item.description1}</Text>
                    {section.item.recipe && Array.isArray(section.item.recipe) && section.item.recipe.length > 0 ? (
                        section.item.recipe.map((item, index) => (
                            <View key={index} style={styles.recipeItem}>
                                <Text style={{ color: currentTheme.defaultTextColor }}>• {item}</Text>
                            </View>
                        ))
                    ) : (
                        <Text>No recipe available</Text>
                    )}
                    <Text style={[styles.description, { color: currentTheme.defaultTextColor }]}>{section.item.description2}</Text>
                    <View style={styles.testimonialContainer}>
                        <Testimonials />
                    </View>
                </View>
            </ScrollView>
            <Pressable
                style={styles.searchButton}
                onPress={() => handlePress()}
            >
                <Text style={styles.buttonText}>Add To Cart</Text>
            </Pressable>
        </View>
    );
};

export default MenuDetailScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F6F8FE',
    },
    imageContainer: {
        width: '100%',
        height: HEIGHT * 0.45,
        position: 'absolute',
        top: 0,
        // zIndex: 1,
    },
    backButton: {
        position: 'absolute',
        top: HEIGHT * 0.06,
        height: WIDTH * 0.1,
        width: WIDTH * 0.1,
        borderRadius: WIDTH * 0.03,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(255, 255, 255, 0.5)',
        left: 20,
        zIndex: 2,


    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: HEIGHT * 0.03,

        // backgroundColor: '#fff'
    },
    txt: {
        fontSize: 15,
        fontWeight: 'bold',
        color: '#3FC87C',
    },
    icons: {
        flexDirection: 'row',
    },
    right: {
        marginRight: 10,
    },
    title: {
        fontSize: 25,
        fontWeight: 'bold',
        marginVertical: 10,
    },
    ratings: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
        marginTop: HEIGHT * 0.01,
        marginBottom: HEIGHT * 0.01,
    },
    rating: {
        fontSize: 14,
        color: '#D3D3D3',
    },
    description: {
        fontSize: 14,
        marginVertical: 10,
        color: '#333',
    },
    recipeItem: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 5,
    },
    searchButton: {
        backgroundColor: '#45D984',
        width: WIDTH * 0.85,
        borderRadius: 10,
        padding: 15,
        alignSelf: 'center',
        position: 'absolute',
        bottom: HEIGHT * 0.04,
    }, buttonText: {
        textAlign: 'center',
        color: '#fff',
        fontSize: 14,
        fontWeight: 'bold',
    },
    testimonialContainer: {
        // paddingLeft: 10,
        backgroundColor: '#fff',
        // borderRadius: 10,
    }, cardContainer: {
        backgroundColor: '#fff',
        marginTop: HEIGHT * 0.35,
        padding: HEIGHT * 0.03,
        borderTopLeftRadius: HEIGHT * 0.05,
        borderTopRightRadius: HEIGHT * 0.05,
        zIndex: 1,
    }, popularContainer: {
        alignItems: 'center',
        height: HEIGHT * 0.04,
        width: WIDTH * 0.20,
        justifyContent: 'center',
        borderRadius: WIDTH * 0.05,
    },
});
