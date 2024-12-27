import { View, StyleSheet, FlatList, TouchableOpacity, Text, Dimensions } from 'react-native';
import React, { useState } from 'react';
import HomeTitleContainer from '../components/HomeTitleContainer';
import OrderRenderItems from '../components/OrderRenderItems';
import { orderContents } from '../data/commonArray';
import { useNavigation } from '@react-navigation/native';

const HEIGHT = Dimensions.get('screen').height;
const WIDTH = Dimensions.get('screen').width;

const YourOrdersScreen = () => {
  const [selectedItemId, setSelectedItemId] = useState(null);
  const navigation = useNavigation();

  const handleCardPress = (id: number) => {
    setSelectedItemId(selectedItemId === id ? null : id);
  };

  return (
    <View style={styles.container}>
      <HomeTitleContainer />
      <FlatList
        contentContainerStyle={styles.cards}
        data={orderContents}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <OrderRenderItems
            item={item}
            isSelected={selectedItemId === item.id}
            onCardPress={handleCardPress}
            isButtonView={true}
          />
        )}
      />
      <TouchableOpacity style={styles.checkoutButton} onPress={() => { navigation.navigate('SetLocationScreen') }}>
        <Text style={styles.buttonText}>Check out</Text>
      </TouchableOpacity>
    </View>
  );
};

export default YourOrdersScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  cards: {
    alignItems: 'center',
  },
  checkoutButton: {
    backgroundColor: '#45D984',
    width: WIDTH * 0.85,
    height: HEIGHT * 0.06,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    alignSelf: 'center',
    position: 'absolute',
    bottom: 20,
  },
  buttonText: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 14,
    fontWeight: '500',
  }, image: {
    width: 50,
    height: 50,
    borderRadius: 10,
  },
  textContainer: {
    marginLeft: 20,
    gap: 5,
    flex: 1,
  },
  orderTitle: {
    fontWeight: 'bold',
    fontSize: 15,
  },
  orderName: {
    color: '#888',
    fontWeight: '200',
    fontSize: 14,
  },
  orderPrice: {
    fontSize: 19,
    color: '#41CE7E',
    fontWeight: 'bold',
  },
});
