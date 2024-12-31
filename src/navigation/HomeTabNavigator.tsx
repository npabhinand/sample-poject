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

const CustomTabBarIcon: React.FC<tabBarProps> = ({ src, label, focused }) => {
    return (
        <View style={focused ? styles.tabFocused : styles.tabUnfocused}>
            <Image source={src} style={styles.imageColor} />
            {focused && <Text style={styles.tabLabel}>{label}</Text>}
        </View>
    );
};

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
        bottom: HEIGHT * 0.03,
        width: WIDTH * 0.95,
        height: HEIGHT * 0.09,
        borderRadius: HEIGHT * 0.02,
        alignSelf: 'center',
        shadowOpacity: 0.5,
        paddingTop: HEIGHT * 0.02,
        paddingLeft: WIDTH * 0.06,
        paddingRight: WIDTH * 0.06,

    },
    tabFocused: {
        backgroundColor: '#E4FDF2',
        borderRadius: 10,
        width: WIDTH * 0.25,
        height: HEIGHT * 0.05,
        justifyContent: 'space-evenly',
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: WIDTH * 0.2,
    },
    tabUnfocused: {
        flex: 1,
    },
    tabLabel: {
        color: '#000',
        fontSize: 12,
        fontWeight: '500',
    },
    imageColor: {
        tintColor: '#42D180',
        // width: HEIGHT * 0.03,
        // height: HEIGHT * 0.035,
    },
});
