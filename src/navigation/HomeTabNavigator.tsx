import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { cartIcon, chatIcon, homeIcon, profileIcon } from '../assets/icons';
import ChatListScreen from '../screens/ChatListScreen';
import HomeScreen from '../screens/HomeScreen';
import OrderScreen from '../screens/OrderScreen';
import ProfileScreen from '../screens/ProfileScreen';
import { Image, StyleSheet, Text, View } from 'react-native';
import { HEIGHT, WIDTH } from '../global/dimensions';

const Tab = createBottomTabNavigator();

const tabData = [
    { name: 'Home', component: HomeScreen, icon: homeIcon },
    { name: 'Profile', component: ProfileScreen, icon: profileIcon },
    { name: 'Order', component: OrderScreen, icon: cartIcon },
    { name: 'Chat', component: ChatListScreen, icon: chatIcon },
];

interface tabBarProps {
    src?: any;
    label?: string;
    focused?: boolean;
}

const CustomTabBarIcon: React.FC<tabBarProps> = ({ src, label, focused }) => (
    <View style={[styles.tabContainer, focused ? styles.tabFocused : styles.tabUnfocused]}>
        <Image source={src} style={[styles.imageColor, focused ? styles.iconFocused : styles.iconUnfocused]} />
        {focused && <Text style={styles.tabLabel}>{label}</Text>}
    </View>
);

export const HomeTabNavigator = () => (
    <Tab.Navigator
        screenOptions={{
            tabBarShowLabel: false,
            tabBarStyle: styles.tabBar,
        }}
    >
        {tabData.map((tab) => (
            <Tab.Screen
                key={tab.name}
                name={tab.name}
                component={tab.component}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ focused }) => (
                        <CustomTabBarIcon src={tab.icon} label={tab.name} focused={focused} />
                    ),
                }}
            />
        ))}
    </Tab.Navigator>
);

const styles = StyleSheet.create({
    tabBar: {
        position: 'absolute',
        bottom: HEIGHT * 0.015,
        width: WIDTH * 0.95,
        height: HEIGHT * 0.08,
        borderRadius: WIDTH * 0.05,
        justifyContent: 'center',
        alignItems: 'center',
        margin: HEIGHT * 0.015,
        shadowOpacity: 0.5,
        flexDirection: 'row',

    },
    tabContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: WIDTH * 0.25,
        // marginBottom: HEIGHT * 0.01,
    },
    tabFocused: {
        backgroundColor: '#E4FDF2',
        borderRadius: 10,
        width: WIDTH * 0.25,
        height: HEIGHT * 0.06,
        justifyContent: 'space-evenly',
        marginLeft: WIDTH * 0.05,
        marginBottom: HEIGHT * 0.01,
    },
    tabUnfocused: {
        width: WIDTH * 0.15,
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 0,
    },
    tabLabel: {
        color: '#000',
        fontSize: 12,
        // marginLeft: 5,
        fontWeight: '500',
    },
    imageColor: {
        tintColor: '#42D180',
        width: 20,
        height: 20,
    },
    iconUnfocused: {
        tintColor: '#42D180',
    },
    iconFocused: {
        tintColor: '#42D180',
    },
});
