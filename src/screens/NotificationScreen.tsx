import { View, StyleSheet, FlatList } from 'react-native';
import React from 'react';
import BackgroundImage from '../components/BackgroundImage';
import ChatTitleComponent from '../components/ChatTitleComponent';
import { NotificationContent } from '../data/commonArray';
import NotificationRenderItems from '../components/NotificationRenderItems';
import { selectColorTheme } from '../reducers/colorThemeSlice';
import { useSelector } from 'react-redux';


const NotificationScreen = () => {
    const currentTheme = useSelector(selectColorTheme);
    return (
        <View style={[styles.container, { backgroundColor: currentTheme['themeColor'] }]}>
            <BackgroundImage />
            <ChatTitleComponent title="Notification" />
            <View>
                <FlatList
                    numColumns={1}
                    data={NotificationContent}
                    contentContainerStyle={styles.notificationContainer}
                    keyExtractor={item => item.status}
                    renderItem={({ item }) => (
                        <NotificationRenderItems item={item} />
                    )}
                />
            </View>
        </View>
    );
};

export default NotificationScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: '#F6F8FF',
    },
    notificationContainer: {
        // justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: '#FEFEFF',

    },
});
