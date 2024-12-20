import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

// Define types for props
interface TitleComponentProps {
    title1?: string;  // Optional prop
    title2?: string;  // Optional prop
}

const TitleComponent: React.FC<TitleComponentProps> = ({ title1, title2 }) => {
    return (
        <View>
            <Text style={styles.titleStyle}>{title1}</Text>
            <Text style={styles.titleStyle}>{title2}</Text>
        </View>
    );
};

export default TitleComponent;
const styles = StyleSheet.create({
    titleStyle: {
        fontFamily: 'BentonSans Bold',
        fontSize: 31,
        fontWeight: 'bold',
    },
}
);
