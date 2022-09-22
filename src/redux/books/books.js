export const removeBook = (index) => ({
  type: 'REMOVE',
  payload: index,
});

export const addBook = (book) => ({
  type: 'ADD_BOOK',
  payload: book,
});

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
      return [...state.books, action.payload];
    default:
      return state;
  }
};

export default bookReducer;
