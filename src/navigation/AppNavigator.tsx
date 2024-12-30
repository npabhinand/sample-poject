// src/navigation/AppNavigator.js

import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

// Import all screens here
import FilterScreen from '../screens/FilterScreen';
import MenuListScreen from '../screens/MenuListScreen';
import FilterRestaurant from '../screens/FilterRestaurant';
import ChatScreen from '../screens/ChatScreen';
import CallingScreen from '../screens/CallingScreen';
import RateDriverScreen from '../screens/RateDriverScreen';
import RateFoodScreen from '../screens/RateFoodScreen';
import RateRestaurantScreen from '../screens/RateRestaurantScreen';
import NotificationScreen from '../screens/NotificationScreen';
import PaymentScreen from '../screens/PaymentScreen';
import EditLocationScreen from '../screens/EditLocationScreen';
import YourOrdersScreen from '../screens/YourOrdersScreen';
import TrackOrderScreen from '../screens/TrackOrderScreen';
import VoucherPromoScreen from '../screens/VoucherPromoScreen';
import SetLocationScreen from '../screens/SetLocationScreen';
import MenuDetailScreen from '../screens/MenuDetailScreen';
import ProductDetailScreen from '../screens/ProductDetailScreen';
import EditPaymentScreen from '../screens/EditPaymentScreen';
import { HomeTabNavigator } from './HomeTabNavigator';
import RestaurantListScreen from '../screens/RestaurantListScreen';

// Type definition for all routes
export type RootStackParamList = {
    HomeTab: undefined;
    FilterScreen: undefined;
    MenuList: undefined;
    FilterRestaurant: undefined;
    ChatScreen: undefined;
    CallingScreen: undefined;
    RateDriverScreen: undefined;
    RateFoodScreen: undefined;
    RateRestaurantScreen: undefined;
    NotificationScreen: undefined;
    PaymentScreen: undefined;
    EditLocationScreen: undefined;
    YourOrdersScreen: undefined;
    TrackOrderScreen: undefined;
    VoucherPromoScreen: undefined;
    SetLocationScreen: undefined;
    MenuDetailScreen: undefined;
    ProductDetailScreen: undefined;
    EditPaymentScreen: undefined;
    RestaurantListScreen: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const AppNavigator = () => {
    return (
        <GestureHandlerRootView style={{ flex: 1 }}>
            <Stack.Navigator>
                <Stack.Screen
                    name="HomeTab"
                    component={HomeTabNavigator}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="FilterScreen"
                    component={FilterScreen}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="MenuList"
                    component={MenuListScreen}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="FilterRestaurant"
                    component={FilterRestaurant}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="ChatScreen"
                    component={ChatScreen}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="RestaurantListScreen"
                    component={RestaurantListScreen}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="CallingScreen"
                    component={CallingScreen}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="RateDriverScreen"
                    component={RateDriverScreen}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="RateFoodScreen"
                    component={RateFoodScreen}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="RateRestaurantScreen"
                    component={RateRestaurantScreen}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="NotificationScreen"
                    component={NotificationScreen}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="PaymentScreen"
                    component={PaymentScreen}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="EditLocationScreen"
                    component={EditLocationScreen}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="YourOrdersScreen"
                    component={YourOrdersScreen}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="TrackOrderScreen"
                    component={TrackOrderScreen}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="VoucherPromoScreen"
                    component={VoucherPromoScreen}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="SetLocationScreen"
                    component={SetLocationScreen}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="MenuDetailScreen"
                    component={MenuDetailScreen}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="ProductDetailScreen"
                    component={ProductDetailScreen}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="EditPaymentScreen"
                    component={EditPaymentScreen}
                    options={{ headerShown: false }}
                />
            </Stack.Navigator>
        </GestureHandlerRootView>
    );
};

export default AppNavigator;
