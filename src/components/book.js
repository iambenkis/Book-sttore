const Book = () => (
    <div className="book-container">
        <div className="book">
          <div className="book-details">
            <div className="book-titles">
              <p className="category">Biography</p>
              <h2>Book Title</h2>
              <span>Autor</span>
            </div>
            <div className="book-action">
              <button type="button">Comments</button>
              <button type="button">Remove</button>
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
    </div>
);
export default Book;