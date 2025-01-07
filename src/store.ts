import { configureStore } from '@reduxjs/toolkit';
import filterSlice from './reducers/filterSlice';
import cartSlice from './reducers/cartSlice';
import colorThemeSlice from './reducers/colorThemeSlice';


const store = configureStore({
    reducer: {
        button: filterSlice,
        cart: cartSlice,
        colorTheme: colorThemeSlice,
    },
});

export default store;
