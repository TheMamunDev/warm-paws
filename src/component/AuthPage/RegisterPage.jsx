import React, { useState } from 'react';
import { Mail, Lock, User, UserPlus, Eye, EyeOff, ImageUp } from 'lucide-react';
import { NavLink } from 'react-router';

const RegisterPage = () => {
  const [showPass, setShowPass] = useState(false);
  const handleRegister = e => {
    e.preventDefault();
    console.log('Registration submitted');
  };
  const showPassHandle = e => {
    e.preventDefault();
    setShowPass(!showPass);
  };
  return (
    <div className="min-h-screen ">
      <div className="lg:col-span-3 flex items-center justify-center p-8 sm:p-12 bg-[#FAF9F6]">
        <div className="w-full max-w-lg bg-white p-8 sm:p-12 rounded-xl shadow-2xl">
          <form
            onSubmit={handleRegister}
            className="space-y-6"
            data-aos="fade-left"
            data-aos-duration="1000"
          >
            <h2 className="text-3xl font-extrabold text-[#264653]">
              Join the Cozy Crew!
            </h2>
            <p className="text-gray-500">
              Sign up in seconds for personalized pet care.
            </p>
            <div className="form-control">
              <label className="input input-bordered flex items-center gap-3 bg-gray-100 border-gray-300 focus-within:ring-2 focus-within:ring-[#F4A261]">
                <User size={18} className="text-gray-500" />
                <input
                  type="text"
                  required
                  className="grow text-[#264653] focus:outline-none"
                  placeholder="Full Name"
                />
              </label>
            </div>
            <div className="form-control">
              <label className="input input-bordered flex items-center gap-3 bg-gray-100 border-gray-300 focus-within:ring-2 focus-within:ring-[#F4A261]">
                <Mail size={18} className="text-gray-500" />
                <input
                  type="email"
                  required
                  className="grow text-[#264653] focus:outline-none"
                  placeholder="Email Address"
                />
              </label>
            </div>
            <div className="form-control">
              <label className="input input-bordered flex items-center gap-3 bg-gray-100 border-gray-300 focus-within:ring-2 focus-within:ring-[#F4A261]">
                <ImageUp size={18} className="text-gray-500" />
                <input
                  type="text"
                  required
                  className="grow text-[#264653] focus:outline-none"
                  placeholder="Photo URL"
                />
              </label>
            </div>
            <div className="form-control">
              <label className="input validator">
                <Lock size={18} className="text-gray-500" />
                <input
                  type={showPass ? 'text' : 'password'}
                  name="password"
                  required
                  placeholder="Password"
                  minlength="6"
                  pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}"
                  title="Must be more than 8 characters, including number, lowercase letter, uppercase letter"
                />
                <button onClick={showPassHandle}>
                  {showPass ? <Eye /> : <EyeOff />}
                </button>
              </label>
            </div>
            <button
              type="submit"
              className="btn btn-lg bg-[#264653] hover:bg-[#40687d] text-white font-bold border-none shadow-lg w-full mt-8 transform transition hover:scale-[1.01]"
            >
              <UserPlus size={20} /> Create WarmPaws Account
            </button>

            <div className="text-center pt-4">
              <p className="text-sm text-gray-500">
                Already a member?
                <NavLink
                  to="/login"
                  className="ml-1 font-bold text-[#F4A261] hover:text-[#264653] transition-colors"
                >
                  Log In
                </NavLink>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
