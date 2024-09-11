import { createSelector } from '@reduxjs/toolkit';
import { CartSliceTypes } from './types';

const selectBase = createSelector(
   (state: RootState) => state,
   state => state.cart,
);

export const getCartItems = createSelector(
   selectBase,
   (state: CartSliceTypes) => state.cartItems,
);

export const getTotalCost = createSelector(
   selectBase,
   (state: CartSliceTypes) => state.totalCost,
);

export const getTotalCount = createSelector(
   selectBase,
   (state: CartSliceTypes) => state.count,
);
