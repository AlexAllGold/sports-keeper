import { Outlet } from 'react-router-dom';
import React from 'react';
import { ToastContainer } from 'react-toastify';
import { Bar } from '../components/bar/Bar';
import Header from '../components/Header';

function LayoutNavigationBar() {
	return (
		<div className="flex h-full w-full rounded-xl bg-white">
			<div className="flex">
				<Bar />
			</div>
			<div className="flex flex-col p-6 gap-4">
				<React.Suspense fallback="Loading...">
					<Header />
					<Outlet />
				</React.Suspense>
			</div>
			<ToastContainer />
		</div>
	);
}

export { LayoutNavigationBar };
