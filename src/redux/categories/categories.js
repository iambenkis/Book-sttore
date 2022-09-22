export const check = () => ({
  type: 'BOOK_STATUS',
});

const categoryReducer = (state = [], action) => {
  if (action.type === 'BOOK_STATUS') {
    return 'UNDER CONSTRUCTION';
  }
  return state;
};

export default categoryReducer;
