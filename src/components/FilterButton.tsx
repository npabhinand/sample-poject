import React from 'react';
import { Text, StyleSheet, Pressable } from 'react-native';
import { HEIGHT, WIDTH } from '../global/dimensions';



interface FilterButtonProps {
    buttonName: string;
    onPress: (buttonName: string) => void;
    isSelected: boolean;
}

const FilterButton: React.FC<FilterButtonProps> = ({ buttonName, onPress, isSelected }) => {
    return (
        <Pressable
            style={[styles.buttonStyle, isSelected && styles.selectedButton]}
            onPress={() => onPress(buttonName)}
        >
            <Text style={[styles.buttonText, isSelected && styles.selectedTxt]}>
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
