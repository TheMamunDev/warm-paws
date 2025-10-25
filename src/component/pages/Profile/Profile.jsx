import React, { use, useState } from 'react';
import { User, LogOut, Lock } from 'lucide-react';
import { AuthContext } from '../../../context/AuthContext';
import Spinner from '../../Spinner';
import usePageTitle from '../../Hooks/useTitle';
import AccountDetails from './AccountDetails';
import { UpdateProfile } from './UpdateProfile';
import { toast } from 'react-toastify';

const Profile = () => {
  usePageTitle('Profile - WarmPaws');
  const { user, loading, logOut, setLoading } = use(AuthContext);
  const [activeSection, setActiveSection] = useState('details');

  const handleLogOut = () => {
    setLoading(true);
    logOut()
      .then(() => {
        toast.success('Log Out Success');
      })
      .catch(error => {
        toast.error(error.message);
      });
  };

  return (
    <div className="min-h-screen bg-[#FAF9F6] pt-12">
      {loading ? (
        <Spinner></Spinner>
      ) : (
        <div className="max-w-11/12 mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-2xl md:text-4xl font-extrabold text-[#264653] mb-8">
            {user?.displayName || 'user'}'s Profile
          </h1>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            <aside className="row-start-2 lg:row-start-auto lg:col-span-1 bg-white p-6 rounded-xl shadow-lg h-fit lg:sticky top-20 border-b-4 md:border-0 border-[#F4A261]">
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
              {activeSection === 'update' && (
                <UpdateProfile setActiveSection={setActiveSection} />
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Profile;
