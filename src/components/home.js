import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import Book from './book';
import CreateBook from './createNewBook';
import { recieveBooks } from '../redux/books/books';

const Home = () => {
  const myStore = useSelector((state) => state.books);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(recieveBooks());
  }, []);
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
        {/* <ReactText /> */}
      </div>
    </div>
  );
};

export default Home;
