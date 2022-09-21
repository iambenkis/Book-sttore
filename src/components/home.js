import Book from './book';
import CreateBook from './createNewBook';

const books = [
  { title: 'The Book', author: 'Benamin Kisenge' },
  { title: 'The Book', author: 'Benamin Kisenge' },
  { title: 'The Book', author: 'Benamin Kisenge' },
  { title: 'The Book', author: 'Benamin Kisenge' },
]
const Home = () => (
  <div className="home">
    <div className="container">
      <div className="selector">
        <select>
          <option value="0">All</option>
        </select>
      </div>
      <Book obj={books} />
      <CreateBook />
    </div>
  </div>
);

export default Home;
