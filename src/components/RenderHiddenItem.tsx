import { View, Image, Pressable, StyleSheet } from 'react-native';
import React from 'react';
import { trashIcon } from '../assets/icons';
import { HEIGHT, WIDTH } from '../common/dimensions';

const RenderHiddenItem = () => {
    return (
        <View style={styles.rightActionWrapper} >
            <Pressable>
                <Image source={trashIcon} />
            </Pressable>
        </View>
    );
}

export default RenderHiddenItem;

const styles = StyleSheet.create({
    rightActionWrapper: {
        width: WIDTH * 0.3,
        height: HEIGHT * 0.12,
        justifyContent: 'center',
        alignItems: 'center',
        borderTopRightRadius: 20,
        borderBottomRightRadius: 20,
        marginTop: HEIGHT * 0.02,
        backgroundColor: '#F8AD1E',
        flexDirection: 'row',
    },

})