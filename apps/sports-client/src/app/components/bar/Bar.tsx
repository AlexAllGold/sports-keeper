import React from 'react';
import { Link } from 'react-router-dom';

export function Bar() {
	return (
		<div className="flex flex-col border-r border-[#CAD0D8]">
			<div className="h-20 flex flex-row">
				<div className="ml-4 my-5 h-11 p-0.5 w-14 rounded-xl bg-[#0C42FC]">
					<img className="h-full w-full" src="../../../../public/images/logo.png" alt="Logo" />
				</div>
				<div className="ml-5 my-3">
					<p className="font-semibold text-[1.3rem] leading-[1.7rem] p-[0.2rem]">Sport Keeper</p>
				</div>
			</div>
			<div className="flex flex-col">
				<div className="flex flex-col py-3.5 px-4 gap-4">
					<Link className="link-bar-hover-style flex py-2" to="/clubs">
						<svg className="ml-2 w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
							<path
								stroke="currentColor"
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="1"
								d="M3 1h12M3 1v16M3 1H2m13 0v16m0-16h1m-1 16H3m12 0h2M3 17H1M6 4h1v1H6V4Zm5 0h1v1h-1V4ZM6 8h1v1H6V8Zm5 0h1v1h-1V8Zm-3 4h2a1 1 0 0 1 1 1v4H7v-4a1 1 0 0 1 1-1Z"
							/>
						</svg>
						<p className="p-link-style">Clubs</p>
					</Link>
				</div>
			</div>
		</div>
	);
}
