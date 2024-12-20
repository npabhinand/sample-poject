import { Dimensions, FlatList, StyleSheet, View } from 'react-native';
import React from 'react';
import BackgroundImage from '../components/BackgroundImage';
import { chatList } from '../data/commonArray';
import ChatListRenderItem from '../components/ChatListRenderItem';
import ChatTitleComponent from '../components/ChatTitleComponent';


const HEIGHT = Dimensions.get('screen').height;
const WIDTH = Dimensions.get('screen').width;

const ChatListScreen = () => {
    return (
        <View style={styles.container}>
            <BackgroundImage />
            <ChatTitleComponent />
            <FlatList
                contentContainerStyle={styles.cards}
                data={chatList}
                keyExtractor={item => item.id.toString()}
                renderItem={({ item }) => (
                    <ChatListRenderItem item={item} />
                )}
            />
        </View >
    );
};

export default ChatListScreen;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FCFCFF',
    },
    cards: {
        alignItems: 'center',
    },
    titleContainer: {
        marginTop: HEIGHT * 0.07,
    },
    buttonStyle: {
        backgroundColor: '#FDF5EB',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 15,
        padding: 10,
        marginRight: 10,
        width: 45,
        height: 45,
        marginBottom: HEIGHT * 0.02,
    },
    marginLeft: {
        // padding: 50,
        marginLeft: WIDTH * 0.06,
    },
});

