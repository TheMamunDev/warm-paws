import React, { use, useEffect, useState } from 'react';
import {
  User,
  Mail,
  Phone,
  Calendar,
  LogOut,
  Lock,
  CheckCircle,
} from 'lucide-react';
import { AuthContext } from '../../context/AuthContext';
import Spinner from '../Spinner';
import { toast } from 'react-toastify';
import { auth } from '../../firebase/firebase.init';

const Profile = () => {
  const { user, updateUserProfile, loading, setUser, logOut } =
    use(AuthContext);
  const [activeSection, setActiveSection] = useState('details');

  const handleLogOut = () => {
    logOut();
  };
  const AccountDetails = () => (
    <div className="bg-white p-6 sm:p-8 rounded-xl shadow-lg border-t-4 border-[#F4A261]">
      <h2 className="text-3xl font-bold text-[#264653] mb-6">
        Account Details
      </h2>

      <div className="space-y-6 text-lg">
        <div className="flex items-center space-x-4 p-3 bg-gray-50 rounded-lg">
          <User size={24} className="text-[#F4A261] flex-shrink-0" />
          <div>
            <p className="text-sm text-gray-500">Full Name</p>
            <p className="font-semibold text-[#264653]">{user?.displayName}</p>
          </div>
        </div>
        <div className="flex items-center space-x-4 p-3 bg-gray-50 rounded-lg">
          <Mail size={24} className="text-[#F4A261] flex-shrink-0" />
          <div>
            <p className="text-sm text-gray-500">Email Address</p>
            <p className="font-semibold text-[#264653]">{user?.email}</p>
          </div>
        </div>
        <div className="flex items-center space-x-4 p-3 bg-gray-50 rounded-lg">
          <Mail size={24} className="text-[#F4A261] flex-shrink-0" />
          <div>
            <p className="text-sm text-gray-500">Email Verifed?</p>
            <p className="font-semibold text-[#264653]">
              {user?.emailVerified ? 'Verifed' : 'Not Verified'}
            </p>
          </div>
        </div>
      </div>
    </div>
  );

  const UpdateProfile = () => {
    const [userName, setUserName] = useState('');
    const [userPhotoUrl, setUserPhotoUrl] = useState('');

    useEffect(() => {
      if (user) {
        setUserName(user.displayName);
        setUserPhotoUrl(user.photoURL);
      }
    }, [user]);

    const handleSubmit = async e => {
      e.preventDefault();
      const name = e.target.name.value;
      const photo = e.target.photo.value;
      // console.log(name, photo);
      await updateUserProfile(name, photo)
        .then(() => {
          toast.success('Profile Update Successfull');
        })
        .catch(error => {
          toast.error(error.message);
          return;
        });
      await auth.currentUser.reload();
      setUser({ ...auth.currentUser });
    };
    return (
      <div className="bg-white p-6 sm:p-8 rounded-xl shadow-lg border-t-4 border-[#264653]">
        <h2 className="text-3xl font-bold text-[#264653] mb-6">
          Update Your Profile
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="form-control">
            <label className="label pt-0">
              <span className="label-text text-[#264653]">Name:</span>
            </label>
            <input
              type="name"
              onChange={e => setUserName(e.target.value)}
              value={userName || ''}
              placeholder="Enter name"
              name="name"
              required
              className="input input-bordered w-full"
            />
          </div>
          <div className="form-control">
            <label className="label pt-0">
              <span className="label-text text-[#264653]">Photo URL:</span>
            </label>
            <input
              type="text"
              placeholder="Photo URL"
              name="photo"
              onChange={e => setUserPhotoUrl(e.target.value)}
              value={userPhotoUrl || ''}
              required
              className="input input-bordered w-full"
            />
          </div>
          <button
            type="submit"
            className="btn bg-[#F4A261] hover:bg-[#E76F51] text-white font-bold border-none shadow-md w-full mt-4"
          >
            Update Profile
          </button>
        </form>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-[#FAF9F6] py-12">
      {loading ? (
        <Spinner></Spinner>
      ) : (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold text-[#264653] mb-8">
            {user?.displayName || 'user'}'s Profile
          </h1>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            <aside className="lg:col-span-1 bg-white p-6 rounded-xl shadow-lg h-fit sticky top-20">
              <div className="flex flex-col items-center border-b pb-4 mb-4">
                <img
                  src={user?.photoURL}
                  alt="Profile"
                  className="w-24 h-24 rounded-full object-cover ring-4 ring-[#F4A261] mb-3"
                />
                <p className="text-xl font-bold text-[#264653]">
                  {user?.displayName || 'User Name'}
                </p>
              </div>
              <nav className="space-y-2">
                <button
                  onClick={() => setActiveSection('details')}
                  className={`flex items-center w-full p-3 rounded-lg font-semibold transition duration-200 ${
                    activeSection === 'details'
                      ? 'bg-[#F4A261] text-white shadow-md'
                      : 'text-[#264653] hover:bg-gray-100'
                  }`}
                >
                  <User size={20} className="mr-3" />
                  Account Details
                </button>
                <button
                  onClick={() => setActiveSection('update')}
                  className={`flex items-center w-full p-3 rounded-lg font-semibold transition duration-200 ${
                    activeSection === 'update'
                      ? 'bg-[#F4A261] text-white shadow-md'
                      : 'text-[#264653] hover:bg-gray-100'
                  }`}
                >
                  <Lock size={20} className="mr-3" />
                  Update Profile
                </button>

                <button
                  onClick={handleLogOut}
                  className="flex items-center w-full p-3 rounded-lg font-semibold text-red-500 hover:bg-red-50 transition duration-200 mt-4 border-t pt-4"
                >
                  <LogOut size={20} className="mr-3" />
                  Logout
                </button>
              </nav>
            </aside>

            <div className="lg:col-span-3">
              {activeSection === 'details' && <AccountDetails />}
              {activeSection === 'update' && <UpdateProfile />}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Profile;
