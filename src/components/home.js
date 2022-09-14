const Home = () => (
  <div className="home">
    <div className="container">
      <div className="selector">
        <select>
          <option value="0">All</option>
        </select>
      </div>
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
      <div className="add-book">
        <h2>Add new book</h2>
        <form>
          <input type="text" className="book-title" placeholder="Book title" />
          <div className="selector">
            <select>
              <option value="0">Category</option>
            </select>
          </div>
          <button type="submit">Add book</button>
        </form>
      </div>
    </div>
  </div>
);

export default Home;
