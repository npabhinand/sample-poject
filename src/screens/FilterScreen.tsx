import { View, StyleSheet, SafeAreaView, Dimensions, Text, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import BackgroundImage from '../components/BackgroundImage';
import TitleComponent from '../components/TitleComponent';
import FilterButtonComponent from '../components/FilterButtonComponent';
import FilterButton from '../components/FilterButton';
import { useNavigation } from '@react-navigation/native';
import { foodButton, locationButton, typeButton } from '../data/commonArray';
import HomeTitleContainer from '../components/HomeTitleContainer';


const HEIGHT = Dimensions.get('screen').height;
const WIDTH = Dimensions.get('screen').width;

const FilterScreen = () => {
    const navigation = useNavigation();
    const [selectedButtons, setSelectedButtons] = useState<string[]>([]);

    const handlePress = (buttonName: string) => {
        setSelectedButtons(prevState => {
            if (prevState.includes(buttonName)) {
                return prevState.filter(item => item !== buttonName);
            } else {
                return [...prevState, buttonName];
            }
        });
    };

    const handleSearch = () => {
        navigation.navigate('FilterRestaurant', navigation.setOptions = {
            selectedButtons,
            setSelectedButtons,
        });
    };
    console.log(selectedButtons);
    return (
        <SafeAreaView style={styles.container}>
            <View >
                <HomeTitleContainer isFilterButton={false} />
            </View>

            <View style={styles.marginLeft}>
                <Text style={styles.heading2}>Type</Text>
                <View style={styles.rowButtons}>
                    {typeButton.map((buttonName, id) => (
                        <FilterButton
                            key={id}
                            buttonName={buttonName.buttonName}
                            onPress={handlePress}
                            isSelected={selectedButtons.includes(buttonName.buttonName)}
                        />
                    ))}
                </View>
            </View>

            <View style={styles.marginLeft}>
                <Text style={styles.heading2}>Location</Text>
                <View style={styles.rowButtons}>
                    {locationButton.map((buttonName, id) => (
                        <FilterButton
                            key={id}
                            buttonName={buttonName.buttonName}
                            onPress={handlePress}
                            isSelected={selectedButtons.includes(buttonName.buttonName)}
                        />
                    ))}
                </View>
            </View>

            <View style={styles.marginLeft}>
                <Text style={styles.heading2}>Food</Text>
                <View style={styles.rowButtons}>
                    {foodButton.map((buttonName, id) => (
                        <FilterButton
                            key={id}
                            buttonName={buttonName.buttonName}
                            onPress={handlePress}
                            isSelected={selectedButtons.includes(buttonName.buttonName)}
                        />
                    ))}
                </View>
            </View>

            <TouchableOpacity
                style={styles.searchButton}
                onPress={handleSearch}
            >
                <Text style={styles.buttonText}>Search</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
};

export default FilterScreen;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F9FBFF',
        paddingBottom: 30,
    },
    marginLeft: {
        padding: 10,
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
    heading2: {
        fontSize: 15,
        fontWeight: 'bold',
    },
    rowButtons: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginRight: WIDTH * 0.03,
    },
    searchButton: {
        backgroundColor: '#45D984',
        width: WIDTH * 0.85,
        borderRadius: 10,
        padding: 15,
        alignSelf: 'center',
        position: 'absolute',
        bottom: 20,
    },
    buttonText: {
        textAlign: 'center',
        color: '#fff',
        fontSize: 14,
    },
});
