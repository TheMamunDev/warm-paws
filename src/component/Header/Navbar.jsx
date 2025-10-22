import React from 'react';
import { NavLink } from 'react-router';
import MyLink from '../MyLink';

const Navbar = () => {
  const isLoggedIn = true;
  const user = {
    displayName: 'CozyPawsOwner',
    avatarUrl: 'https://i.pravatar.cc/150?img=11',
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
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-secondary"
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
        {isLoggedIn ? (
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="relative group btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full ring-2 ring-[#F4A261] ring-offset-2">
                <img alt={`${user.displayName} avatar`} src={user.avatarUrl} />
              </div>
              <span className="absolute top-full mt-2 right-0 hidden group-hover:block bg-white text-gray-800 text-xs px-2 py-1 rounded-md whitespace-nowrap shadow-md transition-all duration-200 ease-in-out opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100">
                {user.displayName}
              </span>
            </div>

            <ul
              tabIndex={0}
              className="mt-3 z-[1] p-2 shadow-xl menu menu-sm dropdown-content bg-white rounded-box w-52"
            >
              <li className="p-2 font-bold text-secondary">
                {user.displayName}
              </li>
              <li>
                <NavLink to="/profile">Profile Settings</NavLink>
              </li>
              <li>
                <a className="text-red-500">Logout</a>
              </li>
            </ul>
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
