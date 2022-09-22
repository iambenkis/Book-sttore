import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import bookReducer from './books/books';
import categoryReducer from './categories/categories';

const rootStore = combineReducers({
  bookReducer,
  categoryReducer,
});

const store = configureStore({rootStore});

export default store;
