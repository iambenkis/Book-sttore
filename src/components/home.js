import Book from './book';
import CreateBook from './createNewBook';

const Home = () => (
  <div className="home">
    <div className="container">
      <div className="selector">
        <select>
          <option value="0">All</option>
        </select>
      </div>
      <Book />
      <CreateBook />
    </div>
  </div>
);

export default Home;
