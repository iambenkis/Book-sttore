import { configureStore } from '@reduxjs/toolkit';
import { combineReducers,createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import bookReducer from './books/books';
import categoryReducer from './categories/categories';

const rootStore = combineReducers({
  books: bookReducer,
  category: categoryReducer,
});

const store = createStore(
  rootStore,
  applyMiddleware(thunk),
);

export default store;
