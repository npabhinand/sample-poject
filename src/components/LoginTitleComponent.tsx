import { View, Text, Image, StyleSheet } from 'react-native';
import React from 'react';
import { backgroundImage2, logo } from '../assets/images';
import { HEIGHT } from '../common/dimensions';

interface TitleProps {
    title: string;
}
const LoginTitleComponent: React.FC<TitleProps> = ({ title }) => {
    return (
        <View style={styles.container}>
            <Image source={backgroundImage2} style={styles.backgroundImage} />
            <Image source={logo} style={styles.logoImage} />
            <Text style={[styles.textColor, styles.title]}>FoodNinja</Text>
            <Text style={styles.subText}>Deliever Favorite Food</Text>
            <Text style={styles.subTitle}>{title}</Text>
        </View>
    );
};

export default LoginTitleComponent;

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        backgroundColor: '#F5F6FE',
    },
    title: {
        fontSize: 31,
        fontWeight: 'bold',
        marginTop: HEIGHT * 0.01,
    },
    subText: {
        fontSize: 12,
        fontWeight: '600',
    },
    subTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: HEIGHT * 0.08,
    },
    textColor: {
        color: '#44D581',
    },
    backgroundImage: {
        position: 'absolute',
        opacity: 0.8,
    }, logoImage: {
        marginTop: HEIGHT * 0.05,
    },
});
