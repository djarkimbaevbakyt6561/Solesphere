import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { cartReducer, cartSlice } from 'entities/cartProduct';
import { api } from '../shared/api';

const rootRecucer = combineReducers({
   [api.reducerPath]: api.reducer,
   [cartSlice.name]: cartReducer,
});

const store = configureStore({
   reducer: rootRecucer,
   middleware: getDefaultMiddleware =>
      getDefaultMiddleware().concat(api.middleware),
});
export default store;
