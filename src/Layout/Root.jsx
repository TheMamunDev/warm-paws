import React, { Suspense } from 'react';
import { Outlet, useNavigation } from 'react-router';
import Navbar from '../component/header/Navbar';
import Footer from '../component/Footer/Footer';
import Spinner from '../component/Spinner';
import { ToastContainer } from 'react-toastify';

const Root = () => {
  const navigation = useNavigation();
  console.log(navigation.state);
  return (
    <div className="max-w-[1280px] mx-auto">
      <Navbar />
      {navigation.state === 'loading' ? <Spinner /> : <Outlet />}
      <Footer />
      <ToastContainer />
    </div>
  );
};

export default Root;
