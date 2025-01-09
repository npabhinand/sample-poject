import React from 'react';
import { Text, StyleSheet, View } from 'react-native';
import { useSelector } from 'react-redux';
import { selectColorTheme } from '../reducers/colorThemeSlice';

interface TitleComponentProps {
    title1?: string;
    title2?: string;
    size?: number;
}

const TitleComponent: React.FC<TitleComponentProps> = ({ title1, title2, size }) => {
    const currentTheme = useSelector(selectColorTheme);
    return (
        <View>
            <Text style={[styles.titleStyle, { fontSize: size }, { color: currentTheme.defaultTextColor }]}>{title1}</Text>
            <Text style={[styles.titleStyle, { fontSize: size }, { color: currentTheme.defaultTextColor }]}>{title2}</Text>
        </View>
    );
};

export default TitleComponent;

const styles = StyleSheet.create({
    titleStyle: {
        fontFamily: 'BentonSans Bold',
        fontWeight: 'bold',
    },
});
