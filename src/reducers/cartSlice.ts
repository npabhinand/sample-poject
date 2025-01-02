import { createSlice, PayloadAction } from '@reduxjs/toolkit';

//type
interface CartItem {
    id: number;
    title: string;
    imgURL: any;
    content: any;
    orders: string;
    rating: string;
    description1: string;
    recipe: string[];
    description2: string;
    type: string;
    price: number;
    restaurantName: string;
}

// initial state
interface CartState {
    carts: CartItem[];
}

const initialState: CartState = {
    carts: [],
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {

        addCart: (state, action: PayloadAction<CartItem>) => {
            const item = action.payload;


            const itemExists = state.carts.some((cartItem) => cartItem.id === item.id);

            if (!itemExists) {
                state.carts.push(item); // Add item
            }
        },
        deleteCart: (state, action: PayloadAction<number>) => {
            state.carts = state.carts.filter((cartItem) => cartItem.id !== action.payload);
        },
    },
});


export const selectedCarts = (state: { cart: CartState }) => state.cart.carts;


export const { addCart, deleteCart } = cartSlice.actions;

export default cartSlice.reducer;
