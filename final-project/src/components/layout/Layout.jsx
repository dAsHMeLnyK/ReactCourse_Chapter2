import { Link } from 'react-router-dom';

const Layout = ({ children }) => {
  return (
    <div>
      <header>
        <nav>
          <ul>
          <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/movies">Movies</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav>
      </header>
      <main>{children}</main>
      <footer>
        <p>© 2024 Your Movie Library</p>
      </footer>
    </div>
  );
};

export default Layout;
