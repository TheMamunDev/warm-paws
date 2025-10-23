import React from 'react';
import { NavLink } from 'react-router';
import { PawPrint, Home, Search } from 'lucide-react';
import AOS from 'aos';

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#FAF9F6] p-4 sm:p-8 text-center">
      <div
        className="max-w-xl w-full bg-white p-10 sm:p-16 rounded-xl shadow-2xl border-t-8 border-[#264653]"
        data-aos="zoom-in"
        data-aos-duration="1000"
      >
        <div className="flex justify-center mb-6">
          <PawPrint
            size={64}
            className="text-[#F4A261] transform rotate-[-15deg]"
          />
        </div>

        <h1 className="text-7xl font-extrabold text-[#264653] mb-4">404</h1>

        <h2 className="text-3xl font-bold text-[#F4A261] mb-4">
          Page Not Found !
        </h2>

        <p className="text-lg text-gray-600 mb-8">
          It looks like the page you were looking for wandered off the trail.
          Don't worry, we'll guide you back to warmth.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <NavLink
            to="/"
            className="btn btn-sm md:btn-lg bg-[#F4A261] hover:bg-[#E76F51] text-white font-bold border-none shadow-md transition duration-300 px-8"
          >
            <Home size={20} />
            Go to Home
          </NavLink>

          <NavLink
            to="/services"
            className="btn btn-sm md:btn-lg btn-outline border-[#264653] text-[#264653] hover:bg-[#264653] hover:text-white font-semibold transition duration-300 px-8"
          >
            <Search size={20} />
            Find Services
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
