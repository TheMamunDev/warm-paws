import { Mail, User } from 'lucide-react';
import React, { use } from 'react';
import { AuthContext } from '../../../context/AuthContext';

const AccountDetails = () => {
  const { user } = use(AuthContext);
  return (
    <div>
      <div className="bg-white p-6 sm:p-8 rounded-xl shadow-lg border-t-4 border-[#F4A261]">
        <h2 className="text-xl md:text-3xl font-bold text-[#264653] mb-6">
          Account Details
        </h2>
        <div className="space-y-6 text-lg">
          <div className="flex items-center space-x-4 p-3 bg-gray-50 rounded-lg">
            <User size={24} className="text-[#F4A261] flex-shrink-0" />
            <div>
              <p className="text-sm text-gray-500">Full Name</p>
              <p className="font-semibold text-sm md:text-xl text-[#264653]">
                {user?.displayName}
              </p>
            </div>
          </div>
          <div className="flex items-center space-x-4 p-3 bg-gray-50 rounded-lg">
            <Mail size={24} className="text-[#F4A261] flex-shrink-0" />
            <div>
              <p className="text-sm text-gray-500">Email Address</p>
              <p className="font-semibold text-sm md:text-xl text-[#264653]">
                {user?.email}
              </p>
            </div>
          </div>
          <div className="flex items-center space-x-4 p-3 bg-gray-50 rounded-lg">
            <Mail size={24} className="text-[#F4A261] flex-shrink-0" />
            <div>
              <p className="text-sm text-gray-500">Email Verifed?</p>
              <p className="font-semibold text-sm md:text-xl text-[#264653]">
                {user?.emailVerified ? 'Verifed' : 'Not Verified'}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountDetails;
