import { combineReducers, configureStore } from '@reduxjs/toolkit';

const rootRecucer = combineReducers({});

const store = configureStore({
   reducer: rootRecucer,
});
export default store;
