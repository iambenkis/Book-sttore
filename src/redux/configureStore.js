import { configureStore } from '@reduxjs/toolkit';
import { combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import bookReducer from './books/books';
import categoryReducer from './categories/categories';

const rootStore = combineReducers({
  books : bookReducer,
  category : categoryReducer,
});

const store = configureStore({
  reducer: rootStore,
  thunk : applyMiddleware(thunk)
});

export default store;
