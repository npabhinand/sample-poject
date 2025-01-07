import React from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import { promoImage } from '../assets/images';
import RestaurantRenderItems from '../components/RestaurantRenderItems';
import MenuRenderItems from '../components/MenuRenderItems';
import HomeTitleContainer from '../components/HomeTitleContainer';
import { menuSections, sections } from '../data/commonArray';
import PromoComponent from '../components/PromoComponent';
import ViewMoreComponent from '../components/ViewMoreComponent';
import { HEIGHT, WIDTH } from '../common/dimensions';
import { useSelector } from 'react-redux';
import { selectColorTheme } from '../reducers/colorThemeSlice';


function HomeScreen() {
    const currentTheme = useSelector(selectColorTheme);
    return (
        <View style={[styles.container, { backgroundColor: currentTheme['themeColor'] }]}>
            <ScrollView contentContainerStyle={styles.scrollViewContainer} bounces={false}>
                <HomeTitleContainer isFilterButton={true} />

                <ScrollView horizontal style={styles.horizontalScroll}>
                    {[1, 2, 3].map((item, index) => (
                        <PromoComponent key={index} image={promoImage} btnText="Buy Now" />
                    ))}
                </ScrollView>

                <ViewMoreComponent title="Nearest Restaurant" navigate="RestaurantListScreen" />
                <ScrollView horizontal style={styles.horizontalScroll}>
                    {sections.slice(0, 3).map((item, index) => (
                        <RestaurantRenderItems key={index} item={item} navigate={'ProductDetailScreen'} />
                    ))}
                </ScrollView>

                <ViewMoreComponent title="Popular Menu" navigate="MenuList" />
                <ScrollView style={styles.verticalScroll}>
                    {menuSections.slice(0, 3).map((item, index) => (
                        <MenuRenderItems key={index} item={item} />
                    ))}
                </ScrollView>

            </ScrollView>
        </View>
    );

}

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: '#F9FBFF',

    }, horizontalScroll: {
        marginLeft: WIDTH * 0.03,
        marginRight: WIDTH * 0.02,
        marginTop: HEIGHT * 0.01,
    },
    scrollViewContainer: {
        paddingBottom: HEIGHT * 0.05,
        marginLeft: WIDTH * 0.03,
        marginTop: HEIGHT * 0.05,
    },
    scrollStyle: {
        marginLeft: WIDTH * 0.02,
        gap: 10,
        marginTop: 10,
    },
    verticalScroll: {
        alignSelf: 'center',
    },
});
