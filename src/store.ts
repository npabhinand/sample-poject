import { configureStore } from '@reduxjs/toolkit';
import filterSlice from './reducers/filterSlice';


const store = configureStore({
    reducer: {
        button: filterSlice,
    },
});

export default store;
