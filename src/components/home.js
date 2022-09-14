import Book from "./book";

const Home = () => (
  <div className="home">
    <div className="container">
      <div className="selector">
        <select>
          <option value="0">All</option>
        </select>
      </div>
      <Book />
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
