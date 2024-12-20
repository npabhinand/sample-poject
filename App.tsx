import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './src/screens/HomeScreen';
import ProfileScreen from './src/screens/ProfileScreen';
import FilterScreen from './src/screens/FilterScreen';
import MenuListScreen from './src/screens/MenuListScreen';
import FilterRestaurant from './src/screens/FilterRestaurant';
import ChatListScreen from './src/screens/ChatListScreen';
import ChatScreen from './src/screens/ChatScreen';
import CallingScreen from './src/screens/CallingScreen';
import CartScreen from './src/screens/CartScreen';
import { Image, Text, View } from 'react-native';
import { homeIcon, profileIcon, cartIcon, chatIcon } from './src/assets/icons';
import RestaurantListScreen from './src/screens/RestaurantListScreen';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

// Custom TabBar Icon Component
const CustomTabBarIcon = ({ source, label, color, size }) => (
  <View style={{ flexDirection: 'row', alignItems: 'center' }}>
    <Image
      source={source}
      style={{ width: size, height: size, tintColor: '#42D180' }}
    />
    <Text style={{ marginLeft: 8, color, fontSize: size * 0.35 }}>
      {label}
    </Text>
  </View>
);

function HomeTabNavigator() {
  const [selected, setSelected] = useState('Home');
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerShown: false,
          title: '',
          tabBarIcon: ({ color, size }) => (
            <CustomTabBarIcon
              source={homeIcon}
              label="Home"
              color={color}
              size={size}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          headerShown: false,
          title: '',
          tabBarIcon: ({ color, size }) => (
            <CustomTabBarIcon
              source={profileIcon}
              label="Profile"
              color={color}
              size={size}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Cart"
        component={CartScreen}
        options={{
          headerShown: false,
          title: '',
          tabBarIcon: ({ color, size }) => (
            <CustomTabBarIcon
              source={cartIcon}
              label="Cart"
              color={color}
              size={size}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Chat"
        component={ChatScreen}
        options={{
          headerShown: false,
          title: '',
          tabBarIcon: ({ color, size }) => (
            <CustomTabBarIcon
              source={chatIcon}
              label="chat"
              color={color}
              size={size}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

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
        <Stack.Screen name="ChatList" component={ChatListScreen} options={{ headerShown: false }} />
        <Stack.Screen name="ChatScreen" component={ChatScreen} options={{ headerShown: false }} />
        <Stack.Screen name="CallingScreen" component={CallingScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
