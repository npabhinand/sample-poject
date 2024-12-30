import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

interface TitleComponentProps {
    title1?: string;
    title2?: string;
    size?: number;
}

const TitleComponent: React.FC<TitleComponentProps> = ({ title1, title2, size }) => {
    return (
        <View>
            <Text style={[styles.titleStyle, { fontSize: size }]}>{title1}</Text>
            <Text style={[styles.titleStyle, { fontSize: size }]}>{title2}</Text>
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
