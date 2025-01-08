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
import LoginScreen from '../screens/LoginScreen';
import SignUpScreen from '../screens/SignUpScreen';

// Type
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
    LoginScreen: undefined;
    SignUpScreen: undefined;

};
// FilterScreen: { category: string; priceRange: number };
const Stack = createNativeStackNavigator<RootStackParamList>();

const AppNavigator = () => {
    return (
        <GestureHandlerRootView style={{ flex: 1 }}>
            <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName='SignUpScreen'>
                <Stack.Screen
                    name="SignUpScreen"
                    component={SignUpScreen}
                />
                <Stack.Screen
                    name="LoginScreen"
                    component={LoginScreen}
                />
                <Stack.Screen
                    name="HomeTab"
                    component={HomeTabNavigator}
                />
                <Stack.Screen
                    name="FilterScreen"
                    component={FilterScreen}
                />
                <Stack.Screen
                    name="MenuList"
                    component={MenuListScreen}
                />
                <Stack.Screen
                    name="FilterRestaurant"
                    component={FilterRestaurant}
                />
                <Stack.Screen
                    name="ChatScreen"
                    component={ChatScreen}
                />
                <Stack.Screen
                    name="RestaurantListScreen"
                    component={RestaurantListScreen}
                />
                <Stack.Screen
                    name="CallingScreen"
                    component={CallingScreen}
                />
                <Stack.Screen
                    name="RateDriverScreen"
                    component={RateDriverScreen}
                />
                <Stack.Screen
                    name="RateFoodScreen"
                    component={RateFoodScreen}
                />
                <Stack.Screen
                    name="RateRestaurantScreen"
                    component={RateRestaurantScreen}

                />
                <Stack.Screen
                    name="NotificationScreen"
                    component={NotificationScreen}

                />
                <Stack.Screen
                    name="PaymentScreen"
                    component={PaymentScreen}

                />
                <Stack.Screen
                    name="EditLocationScreen"
                    component={EditLocationScreen}

                />
                <Stack.Screen
                    name="YourOrdersScreen"
                    component={YourOrdersScreen}

                />
                <Stack.Screen
                    name="TrackOrderScreen"
                    component={TrackOrderScreen}
                />
                <Stack.Screen
                    name="VoucherPromoScreen"
                    component={VoucherPromoScreen}
                />
                <Stack.Screen
                    name="SetLocationScreen"
                    component={SetLocationScreen}

                />
                <Stack.Screen
                    name="MenuDetailScreen"
                    component={MenuDetailScreen}

                />
                <Stack.Screen
                    name="ProductDetailScreen"
                    component={ProductDetailScreen}

                />
                <Stack.Screen
                    name="EditPaymentScreen"
                    component={EditPaymentScreen}
                />
            </Stack.Navigator>
        </GestureHandlerRootView>
    );
};

export default AppNavigator;
