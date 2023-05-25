import { getTokenByValue } from "../../services/LocalStorageService";
import { Link } from "react-router-dom";
const Navbar = () => {
  const token = getTokenByValue();
  return (
    <>
      <header>
        <nav>
          <ul>
            <Link to='/'>
              <li>Home</li>
            </Link>
            <Link to='/contact'>
              <li>Contact</li>
            </Link>
            {!token && (
              <>
                <Link to='/login'>
                  <li>Login or Register</li>
                </Link>
                <Link to='/registration'>
                  <li> Register</li>
                </Link>
              </>
            )}

            {token && (
              <Link to='/dashboard'>
                <li>Dashboard</li>
              </Link>
            )}
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
