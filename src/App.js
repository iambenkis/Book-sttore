import { Route, Routes } from 'react-router-dom';
import NavBar from './components/navbar';
import Home from './components/home';
import Category from './components/category';

const App = () => (
  <>
    <NavBar />
    <Routes>
      <Route path="/" exact element={<Home />} />
      <Route path="/category" exact element={<Category />} />
    </Routes>
  </>
);

export default App;
