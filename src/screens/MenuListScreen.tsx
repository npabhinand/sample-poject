import { FlatList, StyleSheet, View, Text } from 'react-native';
import React from 'react';
import HomeTitleContainer from '../components/HomeTitleContainer';
import MenuRenderItems from '../components/MenuRenderItems';
import { menuArray } from '../data/commonArray';
import { HEIGHT } from '../global/dimensions';

const MenuListScreen = () => {
    return (
        <View style={styles.container}>
            <FlatList
                numColumns={1}
                data={menuArray}
                contentContainerStyle={styles.menuContainer}
                keyExtractor={item => item.id.toString()}
                renderItem={({ item }) => (
                    <MenuRenderItems item={item} />
                )}
                ListHeaderComponent={
                    <>
                        <HomeTitleContainer isFilterButton={true} />
                        <Text style={styles.heading2}>Popular Menu</Text>
                    </>
                }
                ListHeaderComponentStyle={styles.headerStyle}
            />
        </View>
    );
};

export default MenuListScreen;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F9FBFF',
    },
    menuContainer: {
        // justifyContent: 'center',
        alignItems: 'center',
    },
    heading2: {
        fontSize: 15,
        fontWeight: 'bold',
        margin: HEIGHT * 0.02,
    },
    headerStyle: {
        marginTop: HEIGHT * 0.05,
    },
});
