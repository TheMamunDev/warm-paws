import React, { useContext, useEffect, useState } from 'react';
import {
  Mail,
  Lock,
  User,
  UserPlus,
  Eye,
  EyeOff,
  ImageUp,
  Dot,
} from 'lucide-react';
import { NavLink, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../../context/AuthContext';
import { handleFirebaseError } from '../../utilis/errorHandle';
import { toast } from 'react-toastify';
import usePageTitle from '../Hooks/useTitle';

const RegisterPage = () => {
  usePageTitle('Registration -WarmPaws');
  const navigate = useNavigate();
  const { signUp, user, loading, updateUserProfile, handleGoogleLogin } =
    useContext(AuthContext);

  const location = useLocation();
  const from = location.state?.from?.pathname || '/';
  useEffect(() => {
    if (!loading && user) {
      navigate('/');
    }
  }, [user, loading, navigate]);

  const [errorPass, setErrorPass] = useState('');
  const [showPass, setShowPass] = useState(false);
  const validatePassword = password => {
    if (!/[A-Z]/.test(password))
      return 'Password must contain at least one uppercase letter.';
    if (!/[a-z]/.test(password))
      return 'Password must contain at least one lowercase letter.';
    if (password.length < 6)
      return 'Password must be at least 6 characters long.';
    return '';
  };
  const handleGoogleBtn = e => {
    e.preventDefault();
    handleGoogleLogin()
      .then(() => {
        navigate(from, { replace: true });
        // console.log(result.user);
        toast.success('Successfully Logged in');
      })
      .catch(error => {
        handleFirebaseError(error);
        // return;
      });
  };
  const handleRegister = e => {
    e.preventDefault();
    const password = e.target.password.value;
    const email = e.target.email.value;
    const name = e.target.name.value;
    const photo = e.target.photo.value;
    const errorPassMsg = validatePassword(password);
    if (errorPassMsg) {
      setErrorPass(errorPassMsg);
      return;
    }
    signUp(email, password)
      .then(() => {
        updateUserProfile(name, photo)
          .then(() => {
            navigate(from, { replace: true });
            toast.success('Account Created...');
            // console.log('user created and updated');
          })
          .catch(error => {
            toast.error(error.message);
            // console.log(error.message);
          });
      })
      .catch(error => {
        toast.error(error.message);
      });
    // console.log('Registration submitted');
  };
  const showPassHandle = e => {
    e.preventDefault();
    setShowPass(!showPass);
  };
  return (
    <div className="min-h-screen ">
      <div className="lg:col-span-3 flex items-center justify-center p-2 sm:p-12 bg-[#FAF9F6]">
        <div className="w-full max-w-11/12 bg-white p-8 sm:p-12 rounded-xl shadow-2xl">
          <form
            onSubmit={handleRegister}
            className="space-y-6"
            data-aos="fade-left"
            data-aos-duration="1000"
          >
            <h2 className="text-3xl font-extrabold text-[#264653]">
              Join the WarmPaws!
            </h2>
            <p className="text-gray-500">
              Sign up in seconds for personalized pet care.
            </p>
            <div className="form-control">
              <label className="input input-bordered flex items-center gap-3 bg-gray-100 border-gray-300 focus-within:ring-2 focus-within:ring-[#F4A261] w-full">
                <User size={18} className="text-gray-500" />
                <input
                  type="text"
                  required
                  className="grow text-[#264653] focus:outline-none"
                  placeholder="Full Name"
                  name="name"
                />
              </label>
            </div>
            <div className="form-control">
              <label className="input input-bordered flex items-center gap-3 bg-gray-100 border-gray-300 focus-within:ring-2 focus-within:ring-[#F4A261] w-full">
                <Mail size={18} className="text-gray-500" />
                <input
                  type="email"
                  required
                  name="email"
                  className="grow text-[#264653] focus:outline-none"
                  placeholder="Email Address"
                />
              </label>
            </div>
            <div className="form-control">
              <label className="input input-bordered flex items-center gap-3 bg-gray-100 border-gray-300 focus-within:ring-2 focus-within:ring-[#F4A261] w-full">
                <ImageUp size={18} className="text-gray-500" />
                <input
                  type="text"
                  required
                  className="grow text-[#264653] focus:outline-none"
                  placeholder="Photo URL"
                  name="photo"
                />
              </label>
            </div>
            <div className="form-control">
              <label className="input validator w-full">
                <Lock size={18} className="text-gray-500" />
                <input
                  type={showPass ? 'text' : 'password'}
                  name="password"
                  required
                  placeholder="Password"
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
              <UserPlus size={20} /> Create Account
            </button>
            <div className="flex items-center justify-center gap-2">
              <div className="h-px w-16 bg-[#F4A261]"></div>
              <span className="text-sm text-black opacity-50">or</span>
              <div className="h-px w-16 bg-[#F4A261]"></div>
            </div>
            <button
              onClick={handleGoogleBtn}
              className="btn btn-lg w-full bg-white text-black border-[#e5e5e5]"
            >
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
            {errorPass && (
              <label className="text-red-500 flex">
                <Dot />
                {errorPass}
              </label>
            )}

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
