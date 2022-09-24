import { useDispatch } from 'react-redux';
import React, { useState } from 'react';
import uniqid from 'uniqid';
import { sendBook } from '../redux/books/books';

const CreateBook = () => {
  const dispatch = useDispatch();
  const [state, setState] = useState({
    title: '',
    author: '',
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
      const book = {
        title: state.title,
        author: state.author,
        item_id: uniqid(),
        category: state.category,
      };
      e.target.reset();
      dispatch(sendBook(book));
    }
  };
  return (
    <div className="add-book">
      <h2>Add new book</h2>
      <form onSubmit={submit}>
        <input type="text" className="book-title" name="title" placeholder="Book title" value={state.title} onChange={readInput} />
        <input type="text" className="book-author" name="author" placeholder="Book Author" value={state.author} onChange={readInput} />
        <input type="text" className="category" placeholder="Category" name="category" value={state.category} onChange={readInput} />
        <button type="submit">Add book</button>
      </form>
    </div>
  );
};
export default CreateBook;
