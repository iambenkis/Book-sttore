export const check = () => ({
  type: '@@redux/INIT1.f.c.c.l.f',
});

const categoryReducer = (state = [], action) => {
  if (action.type === '@@redux/INIT1.f.c.c.l.f') {
    return 'UNDER CONSTRUCTION';
  }
  return state;
};

export default categoryReducer;
