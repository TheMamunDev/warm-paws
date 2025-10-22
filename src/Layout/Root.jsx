import React, { Suspense } from 'react';
import { Outlet, useNavigation } from 'react-router';
import Navbar from '../component/header/Navbar';
import Footer from '../component/Footer/Footer';

const Root = () => {
  const navigation = useNavigation();
  console.log(navigation.state);
  return (
    <div className="max-w-[1280px] mx-auto">
      <Navbar />
      {navigation.state === 'loading' ? (
        <div className="text-center mt-10 text-red-950">Loading...</div>
      ) : (
        <Outlet />
      )}

      <Footer />
    </div>
  );
};

export default Root;
