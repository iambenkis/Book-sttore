import { createAsyncThunk } from '@reduxjs/toolkit';
import store from "../configureStore";

const APIURL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/1fOnn2C5yMKtspS4K1tx/books';

export const removeBook = (index) => ({
  type: 'REMOVE',
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


const thunkBook = () => () =>
  axios.get('./api/auh/me')
  .then(res => res.data)
  .then(books => {
    store.dispatch(simpleBook(simpleBook(books)))
  })

const initialState = [{
  id: 1,
  title: 'Benjamin biography',
  author: 'Benkis',
},
{
  id: 2,
  title: 'L ame du monde',
  author: 'Frederic francois',
},
];

const bookReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'REMOVE':
      return [...state.filter((book) => book.id !== action.payload)];
    case 'ADD_BOOK':
      return [...state, action.payload];
    case 'READ_BOOK':
        return action.payload;
    default:
      return state;
  }
};

export const recieveBooks = createAsyncThunk(READ,
  async () => {
    const res = await axios.get(APIURL);
    const books = Object.keys(res.data).map((id) => ({
      item_id: id,
      ...res.data[id][0],
    }));
    return books;
  });

export const sendBook = createAsyncThunk(ADD,
  async (book) => {
    await axios.post(APIURL, book);
    return book;
  });

export const deleteBook = createAsyncThunk(REMOVE,
  async (id) => {
    await axios.delete(`${APIURL}/${id}`);
    return id;
  });

export default bookReducer;
