import { StyleSheet, TouchableOpacity, View, Text, Image, ScrollView } from 'react-native';
import React from 'react';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { menuSections } from '../data/commonArray';
import { backIcon, locationIcon2, loveIcon, mapPin, starPin } from '../assets/icons';
import Testimonials from '../components/Testimonials';
import { HEIGHT, WIDTH } from '../common/dimensions';
import RestaurantRenderItems from '../components/RestaurantRenderItems';
import { RootStackParamList } from '../navigation/AppNavigator';
import { useSelector } from 'react-redux';
import { selectColorTheme } from '../reducers/colorThemeSlice';


interface productItem {
    item: {
        id: number;
        title: string;
        imgURL: any;
        content: any;
        // orders: string;
        location: string;
        description: string;
        rating: string;
        price: number;
        restaurantName: string;
    },

}
interface ProductDetailScreenProps {
    route: { params: { section: productItem } };
}
const ProductDetailScreen: React.FC<ProductDetailScreenProps> = ({ route }) => {
    const { section } = route.params;
    const navigation = useNavigation<NavigationProp<RootStackParamList, 'MenuDetailScreen'>>();
    const currentTheme = useSelector(selectColorTheme);

    // console.log(section.item);

    return (
        <View style={styles.container}>
            <Image source={section.item.content} style={styles.imageContainer} />
            <TouchableOpacity style={styles.backButton} onPress={() => { navigation.goBack(); }}>
                <Image source={backIcon} />
            </TouchableOpacity>
            <ScrollView bounces={false}>
                <View style={[styles.cardContainer, { backgroundColor: currentTheme.themeColor }]}>
                    <View style={styles.row}>
                        <View style={[styles.popularContainer, { backgroundColor: currentTheme.lightGreenButtonColor }]}>
                            <Text style={styles.txt}>Popular</Text>
                        </View>
                        <View style={styles.icons}>
                            <TouchableOpacity style={styles.right}>
                                <Image source={locationIcon2} />
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <Image source={loveIcon} />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <Text style={[styles.title, { color: currentTheme.defaultTextColor }]}>{section.item.title}</Text>
                    <View style={styles.ratings}>
                        <Image source={mapPin} />
                        <Text style={styles.rating}>{section.item.location}</Text>
                        <Image source={starPin} />
                        <Text style={styles.rating}>{section.item.rating}</Text>
                    </View>
                    <Text style={styles.description}>{section.item.description}</Text>
                    <View style={styles.ViewMoreContainer}>
                        <Text style={[styles.heading2, { color: currentTheme.defaultTextColor }]}>Popular Menu</Text>
                        <TouchableOpacity onPress={() => navigation.navigate('MenuList')}>
                            <Text style={styles.textColor}>
                                View All
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <ScrollView horizontal style={styles.horizontalScroll}>
                        {menuSections.slice(3, 6).map((item, index) => (
                            <RestaurantRenderItems key={index} item={item} navigate="MenuDetailScreen" />
                        ))}
                    </ScrollView>
                </View>
                <View style={styles.testimonialContainer}>
                    <Testimonials />
                </View>
            </ScrollView>
        </View >
    );
};

export default ProductDetailScreen;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F6F8FE',
    },
    imageContainer: {
        width: '100%',
        height: HEIGHT * 0.45,
        position: 'absolute',
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
        zIndex: 1,
        // overlayColor: '#fff'
        overflow: 'hidden',
    },
    cardContainer: {
        marginTop: HEIGHT * 0.35,
        borderTopLeftRadius: HEIGHT * 0.05,
        borderTopRightRadius: HEIGHT * 0.05,
        // paddingLeft: WIDTH * 0.08,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: HEIGHT * 0.03,
        margin: HEIGHT * 0.03,
    },
    txt: {
        fontSize: 15,
        fontWeight: 'bold',
        color: '#3FC87C',
        // padding: 10,
        borderRadius: 20,
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
        marginLeft: WIDTH * 0.08,
    },
    ratings: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
        paddingLeft: WIDTH * 0.07,
        marginTop: HEIGHT * 0.01,
        // marginBottom: HEIGHT * 0.01,
    },
    rating: {
        // marginLeft: 5,
        fontSize: 14,
        color: '#D3D3D3',
    },
    description: {
        fontSize: 13,
        marginVertical: 10,
        color: '#333',
        paddingHorizontal: WIDTH * 0.07,
    },
    recipeItem: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 5,
    }, horizontalScroll: {
        marginLeft: WIDTH * 0.03,
        marginRight: WIDTH * 0.02,
        marginTop: HEIGHT * 0.01,
    }, ViewMoreContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: HEIGHT * 0.01,
        paddingHorizontal: WIDTH * 0.07,
    }, heading2: {
        fontWeight: 'bold',
    },
    testimonialContainer: {
        // paddingLeft: 10,
        backgroundColor: '#fff',
        borderRadius: 10,
    },
    textColor: {
        marginRight: WIDTH * 0.03,
        color: '#F78C4C',
    }, popularContainer: {
        alignItems: 'center',
        height: HEIGHT * 0.04,
        width: WIDTH * 0.20,
        justifyContent: 'center',
        borderRadius: WIDTH * 0.05,
    },
});
