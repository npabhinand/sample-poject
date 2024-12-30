import { View, StyleSheet, FlatList, TouchableOpacity, Text } from 'react-native';
import React, { useState } from 'react';
import HomeTitleContainer from '../components/HomeTitleContainer';
import OrderRenderItems from '../components/OrderRenderItems';
import { orderContents } from '../data/commonArray';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { HEIGHT, WIDTH } from '../global/dimensions';
import { RootStackParamList } from '../navigation/AppNavigator';


const YourOrdersScreen = () => {
  const [selectedItemId, setSelectedItemId] = useState<null | number>(null);
  const navigation = useNavigation<NavigationProp<RootStackParamList, 'SetLocationScreen'>>();

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
            isSwipeable={false}
          />
        )}
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
  },
});
