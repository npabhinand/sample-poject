import { Image, StyleSheet, TextInput, View } from 'react-native';
import React from 'react';
import { searchIcon } from '../assets/icons';
import { HEIGHT, WIDTH } from '../global/dimensions';



const SearchInputComponent = () => {
  return (
    <View style={styles.searchContainer}>
      <Image style={styles.searchIcon} source={searchIcon} />
      <TextInput
        style={styles.input}
        placeholder=" What do you want to order?"
        placeholderTextColor={'#F2C3A1'}
      />
    </View>
  );
};

export default SearchInputComponent;


const styles = StyleSheet.create({
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'relative',
    backgroundColor: '#FEF6ED',
    borderRadius: 15,
    marginLeft: 10,
  },
  input: {
    width: WIDTH * 0.7,
    height: HEIGHT * 0.06,
    paddingLeft: 35,
  },
  searchIcon: {
    position: 'absolute',
    left: 10,
    top: '50%',
    transform: [{ translateY: -12 }],
    width: 24,
    height: 24,
  },
});
