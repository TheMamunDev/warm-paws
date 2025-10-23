import React, { use, useEffect, useState } from 'react';
import { NavLink, useNavigate } from 'react-router';
import MyLink from '../MyLink';
import { AuthContext } from '../../context/AuthContext';
import { toast } from 'react-toastify';
import { TextAlignJustify } from 'lucide-react';

const Navbar = () => {
  const { user, logOut, setLoading, loading } = use(AuthContext);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  // console.log(user);
  const navigate = useNavigate();
  useEffect(() => {
    if (user) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, [user]);

  const handleLogOut = () => {
    setLoading(true);
    logOut()
      .then(() => {
        toast.success('Logged Out Success');
      })
      .catch(error => {
        toast.error(error.message);
      });
  };
  const navLinksContent = (
    <>
      <MyLink to={'/'}>Home</MyLink>
      <MyLink to={'/services'}>Services</MyLink>
      <MyLink to={'/profile'}>My Profile</MyLink>
    </>
  );

  return (
    <div className="navbar bg-[#FAF9F6] shadow-md sticky top-0 z-50">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <TextAlignJustify />
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow-xl bg-white rounded-box w-52"
          >
            <li>{navLinksContent}</li>
          </ul>
        </div>
        <NavLink
          to="/"
          className="btn btn-ghost text-xl font-extrabold text-[#F4A261]"
        >
          WarmPaws
        </NavLink>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navLinksContent}</ul>
      </div>

      <div className="navbar-end space-x-2">
        {loading ? (
          <span className="loading loading-dots loading-sm text-[#F4A261] "></span>
        ) : isLoggedIn ? (
          <div className="dropdown dropdown-end">
            <div className="flex items-center gap-3 relative">
              <div
                tabIndex={0}
                role="button"
                className="relative group btn btn-ghost btn-circle avatar"
              >
                <div
                  onClick={() => navigate('/profile')}
                  className="w-10 rounded-full ring-2 ring-[#F4A261] ring-offset-2"
                >
                  <img
                    alt={`${user?.displayName || 'User'} avatar`}
                    src={
                      user?.photoURL ||
                      'https://img.icons8.com/color/300/user-male-circle--v1.png'
                    }
                  />
                </div>

                <span className="absolute top-full mt-2 right-0 hidden group-hover:block bg-white text-gray-800 text-xs px-2 py-1 rounded-md whitespace-nowrap shadow-md transition-all duration-200 ease-in-out opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100">
                  {user?.displayName || 'Unknown User'}
                </span>
              </div>
              <button
                onClick={handleLogOut}
                className="btn bg-[#F4A261] hover:bg-[#E76F51] text-white font-bold border-none transition duration-300 "
              >
                Logout
              </button>
            </div>
          </div>
        ) : (
          <>
            <NavLink
              to="/login"
              className="btn btn-ghost text-secondary hover:text-[#E76F51]"
            >
              Login
            </NavLink>
            <NavLink
              to="/register"
              className="btn bg-[#F4A261] hover:bg-[#E76F51] text-white font-bold border-none transition duration-300"
            >
              Register
            </NavLink>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
