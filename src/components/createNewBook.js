import { useDispatch, useSelector} from 'react-redux';
import React, { useState } from 'react';
import { addBook } from '../redux/books/books';

const CreateBook = () => {
  const dispatch = useDispatch();
  const myStore = useSelector((state) => state.bookReducer);
  const [ state, setState ] = useState({
    title :'',
    author : ''
  });
  const readInput = (e) => {
    const m = e.target;
    setState({
      ...state,
      [m.name]: m.value,
    });
  };
  const submit = (e) => {
    e.preventDefault();
    if (state.title && state.author) {
      dispatch(
        addBook({
          title: state.title,
          author : state.author,
          id : myStore.length + 1
    }))
  }
}
  return (
  <div className="add-book">
    <h2>Add new book</h2>
    <form onSubmit={submit}>
      <input type="text" className="book-title" name='title' placeholder="Book title"  value={state.title} onChange={readInput}/>
      <input type="text" className="book-author" name='author' placeholder="Book Author" value={state.author} onChange={readInput}/>
      <button type="submit">Add book</button>
    </form>
  </div>
)};
export default CreateBook;
