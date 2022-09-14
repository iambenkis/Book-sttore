import { Link } from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa';

const NavBar = () => (
  <div
    className="navbar"
    style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '1rem 2rem',
      borderBottom: '1px solid #eee',
      backgroundColor: '#fff',
    }}
  >
    <div style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
    }}
    >
      <h1 style={{
        color: 'var(--primary-color)',
        cursor: 'pointer',
      }}
      >
        BookStore CMS
      </h1>
      <ul style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginLeft: '5rem',
      }}
      >
        <li>
          <Link to="/">BOOK</Link>
        </li>
        <li style={{
          marginLeft: '1rem',
        }}
        >
          <Link to="/category">CATEGORIES</Link>
        </li>
      </ul>
    </div>
    <FaUserCircle style={{
      color: 'var(--primary-color)',
      fontSize: '2rem',
    }}
    />
  </div>
);

export default NavBar;
