import { getTokenByValue } from "../../services/LocalStorageService";
import { Link } from "react-router-dom";
import MegaMenu from "../MegaMenu";
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
            <Link to='/contact' j>
              <li>Contact</li>
            </Link>
            {!token && (
              <>
                <Link to='/admin/login'>
                  <li>Login </li>
                </Link>
                <Link to='/admin/registration'>
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
