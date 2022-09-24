import { createAsyncThunk } from '@reduxjs/toolkit';
// import store from "../configureStore";
import axios from 'axios';

const APIURL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/Mj3Ye2YTIzSedTXh3Lfo/books';

export const removeBook = (index) => ({
  type: 'REMOVE_BOOK',
  payload: index,
});

export const addBook = (book) => ({
  type: 'ADD_BOOK',
  payload: book,
});

export const read = (books) => ({
  type: 'READ_BOOK',
  payload: books,
});

const initialState = [
//   id: 1,
//   title: 'Benjamin biography',
//   author: 'Benkis',
// },
// {
//   id: 2,
//   title: 'L ame du monde',
//   author: 'Frederic francois',
// },
];

const bookReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'REMOVE_BOOK/fulfilled':
      return [...state.filter((book) => book.item_id !== action.payload)];
    case 'ADD_BOOK/fulfilled':
      return [...state, action.payload];
    case 'READ_BOOK/fulfilled':
      return action.payload;
    default:
      return state;
  }
};

export const recieveBooks = createAsyncThunk('READ_BOOK',
  async () => {
    const res = await axios.get(APIURL);
    const books = Object.keys(res.data).map((id) => ({
      item_id: id,
      ...res.data[id][0],
    }));
    return books;
  });

export const sendBook = createAsyncThunk('ADD_BOOK',
  async (book) => {
    await axios.post(APIURL, book);
    return book;
  });

export const deleteBook = createAsyncThunk('REMOVE_BOOK',
  async (id) => {
    await axios.delete(`${APIURL}/${id}`);
    console.log(id)
    return id;
  });

export default bookReducer;
