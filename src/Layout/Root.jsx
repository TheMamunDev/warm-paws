import React from 'react';
import { Outlet, useNavigation } from 'react-router';
import Navbar from '../component/header/Navbar';
import Footer from '../component/Footer/Footer';
import Spinner from '../component/Spinner';
import { ToastContainer } from 'react-toastify';

const Root = () => {
  const navigation = useNavigation();
  return (
    <div className="">
      <Navbar />
      <div className="max-w-[1920px] mx-auto">
        {navigation.state === 'loading' ? <Spinner /> : <Outlet />}
      </div>

      <Footer />
      <ToastContainer />
    </div>
  );
};

export default Root;
