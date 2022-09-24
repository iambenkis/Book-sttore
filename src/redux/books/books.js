import store from "../configureStore";

export const removeBook = (index) => ({
  type: 'REMOVE',
  payload: index,
});

export const addBook = (book) => ({
  type: 'ADD_BOOK',
  payload: book,
});

const simpleBook = books => ({type: 'LOGIN',books})

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
    default:
      return state;
  }
};

export default bookReducer;
