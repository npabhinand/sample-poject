import { configureStore } from '@reduxjs/toolkit';
import filterSlice from './reducers/filterSlice';
import cartSlice from './reducers/cartSlice';


const store = configureStore({
    reducer: {
        button: filterSlice,
        cart: cartSlice,
    },
});

export default store;
