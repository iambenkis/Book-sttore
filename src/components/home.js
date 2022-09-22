import Book from './book';
import CreateBook from './createNewBook';

const books = [
  { id: 0, title: 'The Book', author: 'Benamin Kisenge' },
  { id: 1, title: 'The Book', author: 'Benamin Kisenge' },
  { id: 2, title: 'The Book', author: 'Benamin Kisenge' },
  { id: 3, title: 'The Book', author: 'Benamin Kisenge' },
];
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
