import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { cartIcon, chatIcon, homeIcon, profileIcon } from '../assets/icons';
import ChatListScreen from '../screens/ChatListScreen';
import HomeScreen from '../screens/HomeScreen';
import OrderScreen from '../screens/OrderScreen';
import ProfileScreen from '../screens/ProfileScreen';
import { Image, StyleSheet, Text, View } from 'react-native';
import { HEIGHT, WIDTH } from '../common/dimensions';
import { useSelector } from 'react-redux';
import { selectColorTheme } from '../reducers/colorThemeSlice';

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

const CustomTabBarIcon: React.FC<tabBarProps> = (props) => {
    const { src, label, focused } = props;
    const currentTheme = useSelector(selectColorTheme);
    return (
        <View
            style={[
                focused && currentTheme.name === 'dark'
                    ? [styles.tabFocused, { backgroundColor: '#27372E' }]
                    : focused
                        ? [styles.tabFocused, { backgroundColor: '#E4FDF2' }]
                        : styles.tabUnfocused,
            ]}
        >
            <Image source={src} style={styles.imageColor} />
            {focused && <Text style={[styles.tabLabel, { color: currentTheme['defaultTextColor'] }]}>{label}</Text>}
        </View>
    );
};

export const HomeTabNavigator = () => {
    const currentTheme = useSelector(selectColorTheme);
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarShowLabel: false,
                tabBarStyle: {
                    ...styles.tabBar,
                    backgroundColor: currentTheme['lightWhite'],
                },
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
    )

};

const styles = StyleSheet.create({
    tabBar: {
        bottom: HEIGHT * 0.02,
        marginLeft: WIDTH * 0.02,
        width: WIDTH * 0.95,
        height: HEIGHT * 0.09,
        borderRadius: HEIGHT * 0.02,
        position: 'absolute',
        paddingTop: HEIGHT * 0.02,
        alignItems: 'center',
        paddingLeft: WIDTH * 0.06,
        paddingRight: WIDTH * 0.06,

    },
    tabFocused: {
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
