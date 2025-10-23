import React, { use, useState } from 'react';
import { Mail, Lock } from 'lucide-react';
import { NavLink, useSearchParams } from 'react-router';
import { AuthContext } from '../../context/AuthContext';
import { toast } from 'react-toastify';
import usePageTitle from '../Hooks/useTitle';

const ForgotPasswordPage = () => {
  usePageTitle('Forgot Password - WarmPaws');
  const { forgotPasswordFn } = use(AuthContext);
  const [searchParams] = useSearchParams();
  const initialEmail = searchParams.get('email') || '';

  const [email, setEmail] = useState(initialEmail);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = e => {
    e.preventDefault();
    setIsSubmitting(true);
    console.log(`Sending password reset link to: ${email}`);
    setTimeout(() => {
      forgotPasswordFn(email)
        .then(() => {
          toast.success('Passowrd Reset Email Send . Check Your Mail');
          window.open('https://mail.google.com/', '_blank');
          setIsSubmitting(false);
        })
        .catch(error => {
          toast.error(error.message);
        });
    }, 1500);
  };

  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="lg:col-span-3 flex items-center justify-center p-8 sm:p-12 bg-[#FAF9F6]">
        <div className="w-full max-w-lg bg-white p-8 sm:p-12 rounded-xl shadow-2xl">
          <form onSubmit={handleSubmit} className="space-y-6">
            <h2 className="text-3xl font-extrabold text-[#264653] flex items-center">
              <Lock size={32} className="mr-3 text-[#F4A261]" /> Reset Password
            </h2>
            <p className="text-gray-500">
              Enter the email address associated with your account, and we will
              redirect you to your inbox to receive the reset link.
            </p>
            <div className="form-control">
              <label className="input input-bordered flex items-center w-full gap-3 bg-gray-100 border-gray-300 transition-shadow duration-300 focus-within:ring-2 focus-within:ring-[#F4A261]">
                <Mail size={18} className="text-gray-500" />
                <input
                  type="email"
                  required
                  className="grow text-[#264653] focus:outline-none"
                  placeholder="Email Address"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                />
              </label>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="btn btn-lg bg-[#F4A261] hover:bg-[#E76F51] text-white font-bold border-none shadow-lg w-full mt-8 transform transition hover:scale-[1.01] disabled:bg-gray-400"
            >
              {isSubmitting ? 'Sending Link...' : 'Send Reset Link'}
            </button>

            <div className="text-center pt-4">
              <NavLink
                to="/login"
                className="font-bold text-[#264653] hover:text-[#F4A261] transition-colors flex items-center justify-center"
              >
                &larr; Back to Login
              </NavLink>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ForgotPasswordPage;
