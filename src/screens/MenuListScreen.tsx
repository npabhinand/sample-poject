import { FlatList, StyleSheet, View, Text } from 'react-native';
import React from 'react';
import HomeTitleContainer from '../components/HomeTitleContainer';
import MenuRenderItems from '../components/MenuRenderItems';
import { menuArray } from '../data/commonArray';

const MenuListScreen = () => {
    return (
        <View style={styles.container}>
            <HomeTitleContainer />
            <View>
                <Text style={[styles.heading2, styles.marginLeft]}>Popular Restaurant</Text>
                <FlatList
                    numColumns={1}
                    data={menuArray}
                    contentContainerStyle={styles.menuContainer}
                    keyExtractor={item => item.id.toString()}
                    renderItem={({ item }) => (
                        <MenuRenderItems item={item} />
                    )}
                />
            </View>
        </View>
    );
};

export default MenuListScreen;
// const HEIGHT = Dimensions.get('screen').height;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F9FBFF',
    },
    marginLeft: {
        padding: 20,
        marginLeft: 15,
    },
    menuContainer: {
        // justifyContent: 'center',
        alignItems: 'center',
    },
    heading2: {
        fontSize: 15,
        fontWeight: 'bold',
    },
});
