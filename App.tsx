import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, Image, Text, Dimensions, StyleSheet } from 'react-native';

import HomeScreen from './src/screens/HomeScreen';
import ProfileScreen from './src/screens/ProfileScreen';
import CartScreen from './src/screens/CartScreen';
import ChatListScreen from './src/screens/ChatListScreen';
import RestaurantListScreen from './src/screens/RestaurantListScreen';
import FilterScreen from './src/screens/FilterScreen';
import MenuListScreen from './src/screens/MenuListScreen';
import FilterRestaurant from './src/screens/FilterRestaurant';
import ChatScreen from './src/screens/ChatScreen';
import CallingScreen from './src/screens/CallingScreen';
import { homeIcon, profileIcon, cartIcon, chatIcon } from './src/assets/icons';
import RatingDriverScreen from './src/screens/RatingDriverScreen';
// import RatingFoodScreen from './src/screens/RatingFoodScreen';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const HEIGHT = Dimensions.get('screen').height;
const WIDTH = Dimensions.get('screen').width;


const tabData = [
  { name: 'Home', component: HomeScreen, icon: homeIcon },
  { name: 'Profile', component: ProfileScreen, icon: profileIcon },
  { name: 'Cart', component: CartScreen, icon: cartIcon },
  { name: 'Chat', component: ChatListScreen, icon: chatIcon },
];


const CustomTabBarIcon = ({ source, label, focused }) => (
  <View style={[styles.tabContainer, focused && styles.tabFocused]}>
    <Image source={source} style={{ tintColor: '#42D180' }} />
    {focused && <Text style={styles.tabLabel}>{label}</Text>}
  </View>
);

const HomeTabNavigator = () => (
  <>
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
              <CustomTabBarIcon source={tab.icon} label={tab.name} focused={focused} />
            ),
          }}
        />
      ))}
    </Tab.Navigator>
  </>
);


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="HomeTab"
          component={HomeTabNavigator}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="RestaurantList" component={RestaurantListScreen} options={{ headerShown: false }} />
        <Stack.Screen name="FilterScreen" component={FilterScreen} />
        <Stack.Screen name="MenuList" component={MenuListScreen} />
        <Stack.Screen name="FilterRestaurant" component={FilterRestaurant} />
        <Stack.Screen name="ChatScreen" component={ChatScreen} options={{ headerShown: false }} />
        <Stack.Screen name="CallingScreen" component={CallingScreen} />
        <Stack.Screen name="RatingDriverScreen" component={RatingDriverScreen} />
        {/* <Stack.Screen name="RatingFoodScreen" component={RatingFoodScreen} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    position: 'absolute',
    bottom: HEIGHT * 0.015,
    width: WIDTH * 0.96,
    height: HEIGHT * 0.08,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tabContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent:'center',
    width:'100%',  
  },
  tabFocused: {
    backgroundColor: '#E4FDF2',
    // paddingHorizontal: 8,
    borderRadius: 15,
    width:WIDTH*0.25,
    height:HEIGHT*0.05,
    justifyContent:'space-evenly'
  },
  tabLabel: {
    color: '#000',
    fontSize: 12,
    // marginLeft: 8,
    fontWeight: 'bold',
  },
});