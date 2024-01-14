import { Outlet } from 'react-router-dom';
import React from 'react';
import { ToastContainer } from 'react-toastify';
import { Bar } from '../components/bar/Bar';
import Header from '../components/header/Header';

function LayoutNavigationBar() {
  return (
    <div className="container flex h-full rounded-xl bg-white">
      <Bar />
      <div className='flex flex-col w-full px-6 gap-4'>
        <Header />
        <React.Suspense fallback='Loading...'>
          <Outlet />
        </React.Suspense>
        <ToastContainer/>
      </div>
    </div>
  );
}

export { LayoutNavigationBar };
