import React from 'react';
import { StyleSheet, Text, FlatList, View, Pressable, Image, SafeAreaView } from 'react-native';
import RestaurantRenderItems from '../components/RestaurantRenderItems';
import HomeTitleContainer from '../components/HomeTitleContainer';
import { sections } from '../data/commonArray';

import { HEIGHT, WIDTH } from '../common/dimensions';
import { addButton, deleteButton } from '../reducers/filterSlice';
import { useDispatch, useSelector } from 'react-redux';
import { backIcon } from '../assets/icons';
import { useNavigation } from '@react-navigation/native';
import { selectColorTheme } from '../reducers/colorThemeSlice';


const FilterRestaurant = () => {
    const navigation = useNavigation();
    const dispatch = useDispatch();
    const currentTheme = useSelector(selectColorTheme);
    const selectedButtons = useSelector((state: any) => state.button.selectedButtons);

    const handleButtonPress = (buttonName: string) => {
        if (selectedButtons.includes(buttonName)) {
            dispatch(deleteButton(buttonName));
        } else {
            dispatch(addButton(buttonName));
        }
    };

    return (
        <View style={[styles.container, { backgroundColor: currentTheme.themeColor }]}>
            <FlatList
                numColumns={2}
                ListHeaderComponent={<>
                    <Pressable style={[styles.backButtonStyle, { backgroundColor: currentTheme.name === 'dark' ? '#251C13' : '#FDF5EB' }]} onPress={() => { navigation.goBack(); }}>
                        <Image source={backIcon} />
                    </Pressable>
                    {/* <View style={styles.titleContiner}> */}
                    <HomeTitleContainer isFilterButton={true} />
                    <View style={[styles.rowButtons, styles.marginLeft]}>
                        {selectedButtons.map((button: string, index: number) => (
                            <Pressable
                                key={index}
                                style={styles.buttonStyle}
                                onPress={() => handleButtonPress(button)}
                            >
                                <Text style={styles.buttonText}>
                                    {button} X
                                </Text>
                            </Pressable>
                        ))}
                    </View>
                    {/* </View> */}
                    <Text style={[styles.heading2, styles.marginLeft, { color: currentTheme.defaultTextColor }]}>Popular Restaurants</Text>
                </>}
                ListHeaderComponentStyle={styles.headerStyle}
                contentContainerStyle={styles.cards}
                data={sections}
                renderItem={({ item }) => <RestaurantRenderItems item={item} navigate="ProductDetailScreen" />}
            />
        </View>
    );
};

export default FilterRestaurant;

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        backgroundColor: '#F9FBFF',
    }, headerStyle: {
        marginTop: HEIGHT * 0.05,
        marginLeft: WIDTH * 0.04,
    },
    cards: {
        // alignSelf: 'center',
        // alignItems: 'center',
        justifyContent: 'space-between',
    },
    marginLeft: {
        marginLeft: WIDTH * 0.04,
    },
    heading2: {
        fontSize: 15,
        fontWeight: 'bold',
        marginTop: HEIGHT * 0.03,
        marginBottom: HEIGHT * 0.03,
    },
    rowButtons: {
        flexDirection: 'row',
        flexWrap: 'wrap',
    }, buttonStyle: {
        backgroundColor: '#FEF7E7',
        paddingVertical: 10,
        borderRadius: 10,
        padding: 20,
        marginRight: WIDTH * 0.02,
        marginTop: HEIGHT * 0.02,
    }, buttonText: {
        color: '#DA6317',
        textAlign: 'center',
        fontSize: 12,
    }, backButtonStyle: {
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
        marginLeft: WIDTH * 0.03,
    },
});
