import { View, StyleSheet, Dimensions } from 'react-native';
import React from 'react';
import BackgroundImage from './BackgroundImage';
import TitleComponent from './TitleComponent';
import NotificationButtonComponent from './NotificationButtonComponent';
import SearchInputComponent from './SearchInputComponent';
import FilterButtonComponent from './FilterButtonComponent';

const HomeTitleContainer = () => {
    return (
        <View>
            <BackgroundImage />
            {/* Fixed Title Row */}
            <View style={[styles.titleRow, styles.marginLeft]}>
                <TitleComponent title1="Find Your" title2="Favorite Food" />
                <NotificationButtonComponent />
            </View>

            <View style={styles.searchRow}>
                <SearchInputComponent />
                <FilterButtonComponent />
            </View>
        </View>
    );
};

export default HomeTitleContainer;
const HEIGHT = Dimensions.get('screen').height;
// const WIDTH = Dimensions.get('screen').width;
const styles = StyleSheet.create({
    marginLeft: {
        padding: 20,
        marginLeft: 15,
    },
    titleRow: {
        padding: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: HEIGHT * 0.01,
    },
    searchRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        padding: 10,
        zIndex: 1,
        backgroundColor: 'white',
    },
});
