import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { WIDTH } from '../global/dimensions';

interface navigateProps {
    navigate?: string,
    title?: string,
}


const ViewMoreComponent: React.FC<navigateProps> = ({ navigate, title }) => {
    const navigation = useNavigation();
    return (
        <View style={styles.ViewMoreContainer}>
            <Text style={[styles.heading2, styles.marginLeft]}>{title}</Text>
            <TouchableOpacity onPress={() => navigation.navigate(navigate)}>
                <Text style={[styles.viewMoreColor, styles.viewMoreMargin]}>
                    View More
                </Text>
            </TouchableOpacity>
        </View>
    );
};

export default ViewMoreComponent;

const styles = StyleSheet.create({
    marginLeft: {
        padding: WIDTH * 0.05,
        // marginLeft: WIDTH * 0.01,
    },
    ViewMoreContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    heading2: {
        fontSize: 15,
        fontWeight: 'bold',
    },
    viewMoreMargin: {
        padding: 20,
        marginRight: 15,
    },
    viewMoreColor: {
        color: '#FF7C32',
    },
});
