import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useSelector } from 'react-redux';
import { selectColorTheme } from '../reducers/colorThemeSlice';

interface chatProps {
    content?: string;
    isSent?: boolean
}

const ChatBubble: React.FC<chatProps> = (props) => {
    const { content, isSent } = props;
    const currentTheme = useSelector(selectColorTheme);
    return (
        <View style={[styles.chatBubbleContainer, isSent ? styles.leftAlign : styles.rightAlign]} >
            <View style={[styles.chatBubble, isSent ? [{ backgroundColor: currentTheme.name === 'dark' ? currentTheme.lightWhite : '#F6F6F6' }] : styles.sentBubble]} >
                <Text style={isSent ? styles.receivedText : styles.sendText}>{content}</Text>
            </View>
        </View>
    );
};

export default ChatBubble;

const styles = StyleSheet.create({
    chatBubbleContainer: {
        flexDirection: 'row',
        marginVertical: 10,
        paddingHorizontal: 15,
    },
    leftAlign: {
        justifyContent: 'flex-start',
    },
    rightAlign: {
        justifyContent: 'flex-end',
    },
    chatBubble: {
        padding: 10,
        borderRadius: 10,
        maxWidth: '70%',
    },
    sentBubble: {
        backgroundColor: '#42D180',
    },
    receivedBubble: {
        backgroundColor: '#F6F6F6',

    },
    receivedText: {
        color: '#929292',
        fontSize: 14,
    },
    sendText: {
        color: '#fff',
    },
});
