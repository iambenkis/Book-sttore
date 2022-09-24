import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteBook } from '../redux/books/books';

const Book = (props) => {
  const dispatch = useDispatch();
  const removeBook = (e) => {
    e.preventDefault();
    dispatch(deleteBook(e.target.id));
    console.log("Props ",props)
  };
  const { obj } = props;
  return (
    <div className="book-container">
      {
      obj.map((o) => (
        <div className="book" key={o.item_id}>
          <div className="book-details">
            <div className="book-titles">
              <p className="category">{o.category}</p>
              <h2>{o.title}</h2>
              <span>{o.author}</span>
            </div>
            <div className="book-action">
              <button type="button">Comments</button>
              <button
                type="button"
                onClick={removeBook}
                id={o.item_id}
              >
                Remove
              </button>
              <button type="button">Edit</button>
            </div>
          </div>
          <div className="book-progress">
            <div className="progress-info">
              <div className="graph" />
              <div className="progress-data">
                <p>64%</p>
                <span>Completed</span>
              </div>
            </div>
            <div className="chapter-details">
              <p>CURRENT CHAPTER</p>
              <span>CHAPTER 1</span>
              <button type="button" className="update">UPDATE PROGRESS</button>
            </div>
          </div>
        </div>
      ))
    }
    </div>
  );
};
export default Book;
