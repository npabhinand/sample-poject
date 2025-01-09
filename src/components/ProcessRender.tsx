import { View, Text, StyleSheet, TouchableOpacity, Image, Pressable } from 'react-native';
import React from 'react';
import { selectColorTheme } from '../reducers/colorThemeSlice';
import { useSelector } from 'react-redux';
import { HEIGHT, WIDTH } from '../common/dimensions';

interface fadeProps {
  order?: any;
  orderStatus: boolean;
  isOnCardPress?: boolean
}
const ProcessRender: React.FC<fadeProps> = (props) => {
  // const [fade, setFade] = useState('')
  const { order, orderStatus, isOnCardPress } = props;
  const currentTheme = useSelector(selectColorTheme);
  // const onCardPress =
  return (

    <Pressable
      style={[
        styles.orderItems,
        { backgroundColor: currentTheme.lightWhite },
      ]}
    // onPress={!(isOnCardPress ? ()=>onCardPress() : undefined)}
    >
      <Image source={order.imgURL} style={styles.image} />
      <View style={styles.textContainer}>
        <Text
          style={[
            styles.orderTitle,
            { color: currentTheme.defaultTextColor },
          ]}>
          {order.DishName}
        </Text>
        <Text style={styles.orderName}>{order.restaurantName}</Text>
        <Text style={styles.orderPrice}>$ {order.price}</Text>
      </View>
      {!(orderStatus) ? <TouchableOpacity style={styles.processButton}>
        <Text style={styles.processButtonText}>Process</Text>
      </TouchableOpacity> :
        <TouchableOpacity style={styles.processButton}>
          <Text style={styles.processButtonText}>Buy Again</Text>
        </TouchableOpacity>}

    </Pressable >
  );
};

export default ProcessRender;

const styles = StyleSheet.create({
  orderItems: {
    width: WIDTH * 0.9,
    height: HEIGHT * 0.12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: HEIGHT * 0.025,
    backgroundColor: '#FFFFFF',
    padding: 10,
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.04,
    shadowRadius: 4,
  },
  image: {
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
  processButton: {
    marginTop: 10,
    backgroundColor: '#41CE7E',
    width: WIDTH * 0.25,
    height: HEIGHT * 0.04,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  processButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
