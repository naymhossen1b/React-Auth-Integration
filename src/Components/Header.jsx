import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => console.log("user loged out"))
      .catch((error) => console.error(error));
  };

  const navlinks = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/login">Login</NavLink>
      </li>
      <li>
        <NavLink to="/registration">Registration</NavLink>
      </li>
      <li>
        <NavLink to="/order">Order</NavLink>
      </li>
      {user && <>
        <li>
        <NavLink to="/profile">Profile</NavLink>
      </li>
        <li>
        <NavLink to="/dashbord">Dashbord</NavLink>
      </li>
        <li>
        <NavLink to="/friday">90% Offer</NavLink>
      </li>
      </>}
    </>
  );

  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navlinks}
            </ul>
          </div>
          <a className="btn btn-ghost normal-case text-xl">reactAuth</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navlinks}</ul>
        </div>
        <div className="navbar-end">
          {user ? (
            <>
              <p>{user.email}</p>
              <a onClick={handleLogOut} className="btn btn-sm">
                Sign Out
              </a>
            </>
          ) : (
            <button className="btn">
              <Link to="/login">Login</Link>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
