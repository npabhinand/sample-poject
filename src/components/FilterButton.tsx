/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { Text, StyleSheet, Pressable } from 'react-native';
import { HEIGHT, WIDTH } from '../common/dimensions';
import { selectColorTheme } from '../reducers/colorThemeSlice';
import { useSelector } from 'react-redux';



interface FilterButtonProps {
    buttonName: string;
    onPress: (buttonName: string) => void;
    isSelected: boolean;
}

const FilterButton: React.FC<FilterButtonProps> = ({ buttonName, onPress, isSelected }) => {
    const currentTheme = useSelector(selectColorTheme);
    return (
        <Pressable
            style={[
                styles.buttonStyle,
                isSelected && { backgroundColor: '#DA6317' },
                !isSelected && { backgroundColor: currentTheme.name === 'dark' ? currentTheme.lightWhite : '#FEF6ED' },
            ]}
            onPress={() => onPress(buttonName)}
        >
            <Text style={[styles.buttonText, isSelected && styles.selectedTxt, { color: currentTheme.name === 'dark' ? '#FEF6ED' : currentTheme.lightWhite }]}>
                {buttonName}
            </Text>
        </Pressable>
    );
};

export default FilterButton;

const styles = StyleSheet.create({
    buttonStyle: {
        backgroundColor: '#FEF7E7',
        paddingVertical: 10,
        borderRadius: 10,
        padding: 20,
        marginRight: WIDTH * 0.02,
        marginTop: HEIGHT * 0.02,
    },
    selectedButton: {
        backgroundColor: '#DA6317',
    },
    selectedTxt: {
        color: '#FEF7E7',
        textAlign: 'center',
        fontSize: 12,
    },
    buttonText: {
        color: '#DA6317',
        textAlign: 'center',
        fontSize: 12,
    },
});
