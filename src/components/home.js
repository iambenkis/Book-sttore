import { useSelector } from "react-redux";
import Book from './book';
import CreateBook from './createNewBook';
import ReactText from './Text'

const Home = () => {
  const myStore = useSelector((state) => state.bookReducer);
  return (
  <div className="home">
    <div className="container">
      <div className="selector">
        <select>
          <option value="0">All</option>
        </select>
      </div>
      <Book obj={myStore} />
      <CreateBook />
      <ReactText />
    </div>
  </div>
)};

export default Home;
