import { View, Text, StyleSheet, Dimensions, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../navigation/AppNavigator';

const HEIGHT = Dimensions.get('screen').height;
const WIDTH = Dimensions.get('screen').width;

const ChatListRenderItem = ({ item }: any) => {
  const navigation = useNavigation<NavigationProp<RootStackParamList, 'ChatScreen'>>();
  return (
    <TouchableOpacity style={styles.chatList} onPress={() => { navigation.navigate('ChatScreen'); }}>
      <Image source={item.imageURL} />
      <View style={styles.textContainer}>
        <Text style={[styles.nameTitle, styles.marginTop]}
        //  onPress={() => { navigation.navigate('Chat') }}
        >{item.name}</Text>
        <Text style={styles.chatText}>Your Order Just Arrived!</Text>
      </View>
      <Text style={[styles.time, styles.marginTop]}>20.00</Text>
    </TouchableOpacity>
  );
};

export default ChatListRenderItem;



const styles = StyleSheet.create({
  chatList: {
    width: WIDTH * 0.9,
    height: 80,
    flexDirection: 'row',
    // alignItems: 'center',
    // justifyContent: 'space-between',
    marginBottom: HEIGHT * 0.02,
    backgroundColor: '#FFFFFF',
    padding: 10,
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
  },
  textContainer: {
    marginLeft: 20,
    // flex: 1,
  },
  marginTop: {
    marginTop: 10,
  },
  nameTitle: {
    fontWeight: 'bold',
    fontSize: 15,
  },
  chatText: {
    color: '#888',
    fontWeight: '300',
    fontSize: 14,
    marginTop: 5,
  },
  time: {
    fontSize: 14,
    color: '#888',
    fontWeight: '200',
    right: WIDTH * -0.12,
  },
});

