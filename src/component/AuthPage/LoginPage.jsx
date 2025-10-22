import React, { use, useContext, useState } from 'react';
import { Mail, Lock, LogIn, Eye, EyeOff } from 'lucide-react';
import { NavLink } from 'react-router';
import { AuthContext } from '../../context/AuthContext';

const LoginPage = () => {
  const { name } = useContext(AuthContext);
  console.log(name);
  const [showPass, setShowPass] = useState(false);
  const handleLogin = e => {
    e.preventDefault();
    console.log('Login submitted');
  };
  const showPassHandle = e => {
    e.preventDefault();
    setShowPass(!showPass);
  };
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="lg:col-span-3 flex items-center justify-center p-8 sm:p-12 bg-[#FAF9F6]">
        <div className="w-full max-w-lg bg-white p-8 sm:p-12 rounded-xl shadow-2xl">
          <form
            onSubmit={handleLogin}
            className="space-y-6"
            data-aos="fade-left"
            data-aos-duration="1000"
          >
            <h2 className="text-3xl font-extrabold text-[#264653]">
              Welcome Back!
            </h2>
            <p className="text-gray-500">
              Sign in to manage your pet's winter care appointments.
            </p>
            <div className="form-control">
              <label className="input input-bordered flex items-center gap-3 bg-gray-100 border-gray-300 transition-shadow duration-300 focus-within:ring-2 focus-within:ring-[#F4A261]">
                <Mail size={18} className="text-gray-500" />
                <input
                  type="email"
                  required
                  className="grow text-[#264653] focus:outline-none"
                  placeholder="Email Address"
                />
              </label>
            </div>
            <div className="form-control relative">
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
              <div className="label pt-1 pb-0 justify-end">
                <NavLink
                  to="/forgot-password"
                  className="label-text-alt text-[#264653] hover:text-[#F4A261] text-sm transition-colors"
                >
                  Forgot password?
                </NavLink>
              </div>
            </div>
            <button
              type="submit"
              className="btn btn-lg bg-[#F4A261] hover:bg-[#E76F51] text-white font-bold border-none shadow-lg w-full mt-8 transform transition hover:scale-[1.01]"
            >
              <LogIn size={20} /> Login
            </button>
            <button className="btn btn-lg w-full bg-white text-black border-[#e5e5e5]">
              <svg
                aria-label="Google logo"
                width="16"
                height="16"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <g>
                  <path d="m0 0H512V512H0" fill="#fff"></path>
                  <path
                    fill="#34a853"
                    d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                  ></path>
                  <path
                    fill="#4285f4"
                    d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                  ></path>
                  <path
                    fill="#fbbc02"
                    d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                  ></path>
                  <path
                    fill="#ea4335"
                    d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                  ></path>
                </g>
              </svg>
              Login with Google
            </button>
            <div className="text-center pt-4">
              <p className="text-sm text-gray-500">
                New to WarmPaws?
                <NavLink
                  to="/register"
                  className="ml-1 font-bold text-[#264653] hover:text-[#F4A261] transition-colors"
                >
                  Create Account
                </NavLink>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
