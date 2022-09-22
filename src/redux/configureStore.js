import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from 'redux';
import  bookReducer  from "./books/books";
import  categoryReducer  from "./categories/categories";

const rootStore = combineReducers({
    book : bookReducer,
    categories : categoryReducer,
})

const store = configureStore({
    reducer: rootStore,
  });

export default store;
