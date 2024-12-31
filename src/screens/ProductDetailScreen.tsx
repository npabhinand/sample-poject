import { StyleSheet, TouchableOpacity, View, Text, Image, ScrollView } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { popularMenu, sections } from '../data/commonArray';
import { backIcon, locationIcon2, loveIcon, mapPin, starPin } from '../assets/icons';
import Testimonials from '../components/Testimonials';
import { HEIGHT, WIDTH } from '../global/dimensions';
import ViewMoreComponent from '../components/ViewMoreComponent';
import RestaurantRenderItems from '../components/RestaurantRenderItems';

const ProductDetailScreen = () => {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <ScrollView>


                {sections.map((section, index) => (
                    section.key === 'image' ? (
                        <>
                            <Image key={index} source={section.content} style={styles.imageContainer} />
                            <TouchableOpacity style={styles.backButton} onPress={() => { navigation.goBack(); }}>
                                <Image source={backIcon} />
                            </TouchableOpacity>
                        </>

                    ) : section.key === 'details' ? (
                        <View key={index} style={styles.cardContainer}>
                            <View style={styles.row}>
                                <Text style={styles.txt}>Popular</Text>
                                <View style={styles.icons}>
                                    <TouchableOpacity style={styles.right}>
                                        <Image source={locationIcon2} />
                                    </TouchableOpacity>
                                    <TouchableOpacity>
                                        <Image source={loveIcon} />
                                    </TouchableOpacity>
                                </View>
                            </View>
                            <Text style={styles.title}>{section.title}</Text>
                            <View style={styles.ratings}>
                                <Image source={starPin} />
                                <Text style={styles.rating}>{section.rating}</Text>
                                <Image source={mapPin} />
                                <Text style={styles.rating}>{section.location}</Text>
                            </View>
                            <Text style={styles.description}>{section.description}</Text>
                            <ViewMoreComponent navigate="MenuList" title="Popular Menu" />
                            <ScrollView horizontal style={styles.horizontalScroll}>
                                {popularMenu.slice(0, 3).map((item, index) => (
                                    <RestaurantRenderItems key={index} item={item} style={{ marginLeft: WIDTH * 0.02 }} />
                                ))}
                            </ScrollView>
                        </View>
                    ) : section.key === 'testimonials' ? (
                        <View key={index} style={styles.testimonialContainer}>
                            <Testimonials />
                        </View>
                    ) : null
                ))}
            </ScrollView>
        </View>
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
    },
    cardContainer: {
        padding: 20,
        backgroundColor: '#fff',
        borderRadius: 10,
        marginTop: HEIGHT * 0.35,
        borderTopLeftRadius: HEIGHT * 0.05,
        borderTopRightRadius: HEIGHT * 0.05,
        paddingLeft: WIDTH * 0.08,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: HEIGHT * 0.03,
    },
    txt: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#3FC87C',
        backgroundColor: '#EBFAF2',
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
        // marginLeft: 5,
        fontSize: 14,
        color: '#D3D3D3',
    },
    description: {
        fontSize: 13,
        marginVertical: 10,
        color: '#333',
    },
    recipeItem: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 5,
    },
    testimonialContainer: {
        paddingLeft: 10,
        backgroundColor: '#fff',
        // marginTop: 20,
        borderRadius: 10,
    }, horizontalScroll: {
        marginLeft: WIDTH * 0.03,
        marginRight: WIDTH * 0.02,
        marginTop: HEIGHT * 0.01,
    },
});
