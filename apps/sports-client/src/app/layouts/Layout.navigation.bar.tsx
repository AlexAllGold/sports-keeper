import { Outlet } from 'react-router-dom';
import React from 'react';
import { ToastContainer } from 'react-toastify';
import { Bar } from '../components/bar/Bar';

function LayoutNavigationBar() {
  return (
    <div className="flex h-full w-full rounded-xl bg-white">
      <Bar />
      <div className='flex flex-col w-full px-6 gap-4 p-5'>
        <React.Suspense fallback='Loading...'>
          <Outlet />
        </React.Suspense>
      </div>
      <ToastContainer/>
    </div>
  );
}

export { LayoutNavigationBar };
