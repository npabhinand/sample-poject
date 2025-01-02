import React from 'react';
import { Image, Pressable, StyleSheet, Text } from 'react-native';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { HEIGHT, WIDTH } from '../global/dimensions';
import { RootStackParamList } from '../navigation/AppNavigator';


interface renderProps {
    item?: {
        imgURL: string,
        name?: string,
        time?: number,
        price?: number,
        title?: string,

    },
    navigate?: string
}


const RestaurantRenderItems: React.FC<renderProps> = (props) => {

    const { item, navigate } = props;
    const navigation = useNavigation<NavigationProp<RootStackParamList>>();

    return (
        <Pressable style={styles.card} onPress={() => {
            navigation.navigate(navigate, {
                section: { item },
            });
        }}>
            <Image style={styles.image} source={item.imgURL} />
            <Text style={styles.name}>
                {item.name ? item.name : item.title}
            </Text>

            <Text style={styles.time}>
                {item.time ? `${item.time} Mins` : `${item.price}$`}
            </Text>
        </Pressable>

    );
}

export default RestaurantRenderItems;

const styles = StyleSheet.create({
    card: {
        width: WIDTH * 0.4,
        height: HEIGHT * 0.22,
        marginBottom: 15,
        backgroundColor: '#FFFFFF',
        padding: 10,
        borderRadius: 20,
        // shadowColor: '#F6F7FE',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.02,
        shadowRadius: 4,
        elevation: 5,
        marginRight: WIDTH * 0.05,
    },
    image: {
        // width: '100%',
        height: HEIGHT * 0.1,
        alignSelf: 'center',
    },
    name: {
        fontSize: 16,
        fontWeight: 'bold',
        marginVertical: 5,
        textAlign: 'center',
        marginTop: HEIGHT * 0.02,
    },
    time: {
        fontSize: 14,
        color: '#888',
        textAlign: 'center',
    },
});

