import React from 'react';

const Book = (props) => {
  const { obj } = props;
  return (
    <div className="book-container">
    {
      obj.map((o) => (
      <div className="book">
        <div className="book-details">
          <div className="book-titles">
            <p className="category">Biography</p>
            <h2>{o.title}</h2>
            <span>{o.author}</span>
          </div>
          <div className="book-action">
            <button type="button">Comments</button>
            <button type="button" onClick={() => console.log(props)}>Remove</button>
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
    ))}
    </div>
  );
};
export default Book;
