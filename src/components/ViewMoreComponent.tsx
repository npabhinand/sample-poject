import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { HEIGHT, WIDTH } from '../common/dimensions';
import { useSelector } from 'react-redux';
import { selectColorTheme } from '../reducers/colorThemeSlice';


interface navigateProps {
    navigate?: string,
    title?: string,
}


const ViewMoreComponent: React.FC<navigateProps> = ({ navigate, title }) => {
    const navigation = useNavigation();
    const currentTheme = useSelector(selectColorTheme);
    return (
        <View style={styles.ViewMoreContainer}>
            <Text style={[styles.heading2, styles.marginLeft, { color: currentTheme['defaultTextColor'] }]}>{title}</Text>
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
        // padding: WIDTH * 0.05,
        marginLeft: WIDTH * 0.04,
    },
    ViewMoreContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: HEIGHT * 0.01,
        marginBottom: HEIGHT * 0.02,
    },
    heading2: {
        fontSize: 15,
        fontWeight: 'bold',
    },
    viewMoreMargin: {
        // padding: 20,
        marginRight: WIDTH * 0.09,
    },
    viewMoreColor: {
        color: '#FF7C32',
    },
});
