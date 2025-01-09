import { View, StyleSheet, FlatList, TouchableOpacity, Text } from 'react-native';
import React, { useState } from 'react';
import HomeTitleContainer from '../components/HomeTitleContainer';
import { orderContents } from '../data/commonArray';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { HEIGHT, WIDTH } from '../common/dimensions';
import { RootStackParamList } from '../navigation/AppNavigator';
import ProcessRender from '../components/ProcessRender';
import { useSelector } from 'react-redux';
import { selectColorTheme } from '../reducers/colorThemeSlice';



const YourOrdersScreen = () => {
  const currentTheme = useSelector(selectColorTheme);
  const [selectedItemId, setSelectedItemId] = useState<null | number>(null);
  const navigation = useNavigation<NavigationProp<RootStackParamList, 'SetLocationScreen'>>();

  const handleCardPress = (id: number) => {
    setSelectedItemId(selectedItemId === id ? null : id);
  };

  return (
    <View style={[styles.container, { backgroundColor: currentTheme.themeColor }]}>
      <FlatList
        contentContainerStyle={styles.cards}
        data={orderContents}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <ProcessRender
            order={item}
            isOnCardPress={true}
          />
        )}
        ListHeaderComponent={
          <><HomeTitleContainer isFilterButton={true} /></>}
        ListHeaderComponentStyle={styles.headerStyle}
      />
      <TouchableOpacity style={styles.checkoutButton} onPress={() => { navigation.navigate('SetLocationScreen'); }}>
        <Text style={styles.buttonText}>Check out</Text>
      </TouchableOpacity>
    </View>
  );
};

export default YourOrdersScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // paddingTop: HEIGHT * 0.04,
    // paddingLeft: WIDTH * 0.05,
    alignItems: 'center',
  },
  cards: {
    alignItems: 'center',
  }, headerStyle: {
    marginTop: HEIGHT * 0.05,
  },
  checkoutButton: {
    backgroundColor: '#45D984',
    width: WIDTH * 0.9,
    height: HEIGHT * 0.07,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: WIDTH * 0.04,
    alignSelf: 'center',
    position: 'absolute',
    bottom: HEIGHT * 0.04,
  },
  buttonText: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
  },
});
