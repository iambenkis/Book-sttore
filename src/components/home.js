import Book from './book';
import CreateBook from './createNewBook';
import ReactText from './Text'

const books = [
  { id: 0, title: 'The Book', author: 'Benamin Kisenge' },
];
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
      <ReactText />
    </div>
  </div>
);

export default Home;
