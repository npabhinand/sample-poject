import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { HEIGHT } from '../common/dimensions';
import { useSelector } from 'react-redux';
import { selectColorTheme } from '../reducers/colorThemeSlice';
// import { personImage } from '../assets/images';

interface CallingProps {
    name?: string;
    isEnded: boolean;
    image?: any;
}


const CallingComponent: React.FC<CallingProps> = (props) => {
    const { name, isEnded, image } = props;
    const currentTheme = useSelector(selectColorTheme);
    return (
        <View style={[styles.container, {}]}>
            <Image source={image} style={styles.personImage} />
            <Text style={[styles.nameText, { color: currentTheme.defaultTextColor }]}>{name}</Text>
            <Text style={styles.subText}>{isEnded ? '15.23 Min' : 'Ringing . . . '}</Text>
        </View>
    );
};

export default CallingComponent;
const styles = StyleSheet.create({
    container: {
        top: HEIGHT * 0.24,
        alignItems: 'center',
    },
    personImage: {
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowColor: '#000',
    },
    nameText: {
        fontSize: 25,
        marginTop: HEIGHT * 0.05,
        fontWeight: 'bold',
    },
    subText: {
        fontSize: 19,
        color: '#C8C8C8',
        // fontWeight: '200',
        marginTop: HEIGHT * 0.02,
    },
});

