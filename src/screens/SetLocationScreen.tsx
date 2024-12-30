import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native';
import React from 'react';
import { mapImage } from '../assets/images';
import { locationIcon, placeholder, searchIcon } from '../assets/icons';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { HEIGHT, WIDTH } from '../global/dimensions';
import { RootStackParamList } from '../navigation/AppNavigator';



const SetLocationScreen = () => {
    const navigation = useNavigation<NavigationProp<RootStackParamList, 'TrackOrderScreen'>>();

    return (
        <View style={styles.container}>
            <Image style={styles.backgroundImage} source={mapImage} />
            <View style={styles.searchContainer}>
                <Image style={styles.searchIcon} source={searchIcon} />
                <TextInput
                    style={styles.input}
                    placeholder="Find Your Location"
                    placeholderTextColor={'#F2C3A1'}
                />
            </View>

            <View style={styles.setLocationContainer}>
                <TouchableOpacity style={styles.setLocationButton}>
                    <Image source={placeholder} />
                </TouchableOpacity>
            </View>

            <View style={styles.card}>
                <Text style={styles.title}>Your Location</Text>
                <View style={styles.locationContainer}>
                    <Image source={locationIcon} style={styles.locationIcon} />
                    <Text style={styles.locationText}>4517 Washington Ave. Manchester, Kentucky 39495</Text>
                </View>

                <TouchableOpacity style={styles.checkoutButton} onPress={() => { navigation.navigate('TrackOrderScreen'); }}>
                    <Text style={styles.buttonText}>Set Location</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 10,
        marginTop: 10,
        position: 'relative',
    },
    backgroundImage: {
        resizeMode: 'repeat',
        position: 'absolute',
    },
    searchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        position: 'relative',
        backgroundColor: '#FFFFFF',
        borderRadius: 15,
        marginLeft: 10,
        marginTop: HEIGHT * 0.06,
        width: WIDTH * 0.9,
        height: HEIGHT * 0.1,
    },
    input: {
        paddingLeft: WIDTH * 0.2,
    },
    title: {
        color: '#888',
        padding: 10,
    },
    searchIcon: {
        position: 'absolute',
        left: WIDTH * 0.06,
        top: '50%',
        transform: [{ translateY: -12 }],
        width: 24,
        height: 24,
    },
    card: {
        backgroundColor: '#fff',
        width: WIDTH * 0.9,
        padding: 10,
        borderRadius: 10,
        position: 'absolute',
        bottom: 20,
        alignSelf: 'center',
        // left: 20,
    },
    locationContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
        // margin: 10

    },
    locationIcon: {
        // width: 20,
        // height: 20,
        marginRight: 10,
    },
    locationText: {
        fontSize: 15,
        marginLeft: 10,
        color: '#333',
        fontWeight: 'bold',
    },
    checkoutButton: {
        backgroundColor: '#45D984',
        width: WIDTH * 0.85,
        height: HEIGHT * 0.06,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
    },
    buttonText: {
        textAlign: 'center',
        color: '#fff',
        fontSize: 14,
        fontWeight: '500',
    },
    setLocationButton: {
        backgroundColor: '#B7EAD9',
        height: WIDTH * 0.2,
        width: WIDTH * 0.2,
        borderRadius: '50%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    setLocationContainer: {
        backgroundColor: '#E0F4F3',
        height: WIDTH * 0.6,
        width: WIDTH * 0.6,
        borderRadius: '50%',
        opacity: 0.6,
        alignItems: 'center',
        justifyContent: 'center',
        top: HEIGHT * 0.1,
        alignSelf: 'center',
    },

});


export default SetLocationScreen;

