import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CartSliceTypes, ICartProduct, IncOrDecPayloadType } from './types';

const cartItemsFromLocalStorage = localStorage.getItem('cartItems');
const cartItems: ICartProduct[] = cartItemsFromLocalStorage
   ? JSON.parse(cartItemsFromLocalStorage)
   : [];

const initialState: CartSliceTypes = {
   cartItems,
   totalCost: cartItems.reduce((acc, curr) => curr.price * curr.count + acc, 0),
   count: cartItems.length,
};

export const cartSlice = createSlice({
   name: 'cart',
   initialState,
   reducers: {
      addToCart: (state, action: PayloadAction<ICartProduct>) => {
         const isProductInCart = state.cartItems.some(
            el => el.id === action.payload.id,
         );

         if (!isProductInCart) {
            state.cartItems = [...state.cartItems, action.payload];
            state.count = state.cartItems.length;
            state.totalCost = state.cartItems.reduce(
               (acc, curr) => curr.price * curr.count + acc,
               0,
            );
            localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
         }
      },
      incrementOrDecrementCount: (
         state,
         action: PayloadAction<IncOrDecPayloadType>,
      ) => {
         if (action.payload.incOrDec === '+') {
            state.cartItems = state.cartItems.map(el => {
               if (el.id === action.payload.id) {
                  return { ...el, count: el.count + 1 };
               }
               return el;
            });
            state.totalCost = state.cartItems.reduce(
               (acc, curr) => curr.price * curr.count + acc,
               0,
            );
            localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
         }
         if (action.payload.incOrDec === '-') {
            state.cartItems = state.cartItems.map(el => {
               if (el.id === action.payload.id) {
                  return { ...el, count: el.count - 1 };
               }
               return el;
            });
            state.totalCost = state.cartItems.reduce(
               (acc, curr) => curr.price * curr.count + acc,
               0,
            );
            localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
         }
      },
      deleteProduct: (state, action: PayloadAction<number>) => {
         state.cartItems = state.cartItems.filter(
            el => el.id !== action.payload,
         );
         state.count = state.cartItems.length;
         state.totalCost = state.cartItems.reduce(
            (acc, curr) => curr.price * curr.count + acc,
            0,
         );
         localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
      },
   },
});

export const cartActions = cartSlice.actions;
export const cartReducer = cartSlice.reducer;
