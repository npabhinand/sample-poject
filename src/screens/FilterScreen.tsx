import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import FilterButton from '../components/FilterButton';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { foodButton, locationButton, typeButton } from '../data/commonArray';
import HomeTitleContainer from '../components/HomeTitleContainer';
import { HEIGHT, WIDTH } from '../global/dimensions';
import { useDispatch, useSelector } from 'react-redux';
import { addButton, deleteButton } from '../reducers/filterSlice';
import { RootStackParamList } from '../navigation/AppNavigator';



const FilterScreen = () => {
    const navigation = useNavigation<NavigationProp<RootStackParamList, 'FilterRestaurant'>>();
    const dispatch = useDispatch();
    const selectedButtons = useSelector((state: any) => state.button.selectedButtons);


    const handlePress = (buttonName: string) => {
        if (selectedButtons.includes(buttonName)) {
            dispatch(deleteButton(buttonName));
        } else {
            dispatch(addButton(buttonName));
        }
    };

    const handleSearch = () => {
        navigation.navigate('FilterRestaurant');
    };

    return (
        <View style={styles.container}>
            <View style={styles.titleView}>
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
        </View>
    );
};

export default FilterScreen;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F9FBFF',
        paddingBottom: 30,
        paddingTop: HEIGHT * 0.05,
    }, titleView: {
        marginLeft: WIDTH * 0.02,
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
        bottom: HEIGHT * 0.04,
    },
    buttonText: {
        textAlign: 'center',
        color: '#fff',
        fontSize: 14,
    },
});
