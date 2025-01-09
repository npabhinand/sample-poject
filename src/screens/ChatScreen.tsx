/* eslint-disable react-native/no-inline-styles */
import React, { useState } from 'react';
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { profile1 } from '../assets/images';
import { callIcon, dotIcon, sendIcon } from '../assets/icons';
import { ChatContent } from '../data/commonArray';
import ChatTitleComponent from '../components/ChatTitleComponent';
import ChatBubble from '../components/ChatBubble';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import BackgroundImage2 from '../components/ChatBackgroundImage';
import { HEIGHT, WIDTH } from '../common/dimensions';
import { RootStackParamList } from '../navigation/AppNavigator';
import { useSelector } from 'react-redux';
import { selectColorTheme } from '../reducers/colorThemeSlice';
import { commonColor } from '../common/colors';



const ChatScreen = () => {
    const navigation = useNavigation<NavigationProp<RootStackParamList, 'CallingScreen'>>();
    const [message, setMessage] = useState('');
    const currentTheme = useSelector(selectColorTheme);


    const sendMessage = () => {
        if (message.trim() !== '') {
            console.log('Message sent:', message);
            setMessage('');
        }
    };

    return (
        <View style={[styles.container, { backgroundColor: currentTheme.themeColor }]}>
            <BackgroundImage2 />
            <ChatTitleComponent title="Chat" />

            <View style={[styles.profileContainer, { backgroundColor: currentTheme.name === 'dark' ? `${commonColor.darkGray}40` : currentTheme.lightWhite }]}>
                <View style={styles.profileRow}>
                    <Image source={profile1} />
                    <View style={styles.textContainer}>
                        <Text style={[styles.nameTitle, styles.marginTop, { color: currentTheme.defaultTextColor }]}>Dianne Russell</Text>
                        <View style={styles.profileRow}>
                            <Image source={dotIcon} />
                            <Text style={styles.chatText}> online</Text>
                        </View>
                    </View>
                </View>
                <TouchableOpacity style={[styles.iconButton, { backgroundColor: currentTheme.name === 'dark' ? `${commonColor.darkGray}40` : '#EAFAF2' }]} onPress={() => navigation.navigate('CallingScreen')}>
                    <Image source={callIcon} style={{ tintColor: currentTheme.name === 'dark' ? currentTheme.commonWhite : '#40C97C' }} />
                </TouchableOpacity>
            </View>


            <View style={styles.chatContainer}>
                {ChatContent.map((chat, id) => (
                    <ChatBubble
                        key={id}
                        isSent={id % 2 === 0}
                        content={chat.content}
                    />
                ))}
            </View>


            <View style={[styles.inputContainer, { backgroundColor: currentTheme.lightWhite }]}>
                <TextInput
                    value={message}
                    onChangeText={setMessage}
                    style={[styles.inputField, { color: currentTheme.defaultTextColor }]}
                    placeholder="Type a message..."
                    placeholderTextColor={currentTheme.defaultTextColor}
                />
                <TouchableOpacity onPress={sendMessage} style={styles.sendButton}>
                    <Image source={sendIcon} />
                </TouchableOpacity>
            </View>
        </View>
    );
};


export default ChatScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: '#FEFEFF',
    },

    profileContainer: {
        width: WIDTH * 0.9,
        height: 80,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: HEIGHT * 0.02,
        backgroundColor: '#FFFFFF',
        padding: 10,
        borderRadius: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.05,
        shadowRadius: 4,
        alignSelf: 'center',
        marginTop: HEIGHT * -0.02,
    },
    profileRow: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    textContainer: {
        marginLeft: 20,
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
    },
    iconButton: {
        // backgroundColor: '#EAFAF2',
        padding: 10,
        borderRadius: '50%',
        marginRight: WIDTH * 0.03,
    },
    chatContainer: {
        flex: 1,
        paddingBottom: 20,
        marginTop: 10,
    },

    inputContainer: {
        flexDirection: 'row',
        padding: 10,
        alignItems: 'center',
        marginBottom: HEIGHT * 0.02,
        shadowColor: '#000',
        shadowOffset: { width: 10, height: 10 },
        shadowOpacity: 0.05,
        width: WIDTH * 0.95,
        height: HEIGHT * 0.1,
        alignSelf: 'center',
        borderRadius: 20,
    },
    inputField: {
        flex: 1,
        height: 40,
        borderRadius: 20,
        // borderWidth: 1,
        borderColor: '#E5E5E5',
        paddingLeft: 15,
        fontSize: 16,

    },
    sendButton: {
        padding: 10,
        marginLeft: 10,
        borderRadius: 50,
    },
});
