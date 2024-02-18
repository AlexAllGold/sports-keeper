import React from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';

export function Header() {
	const { pathname } = useLocation();
	const { clubId } = useParams();
	const navigate = useNavigate();

	const handlePathButton = (path: string) => {
		switch (path) {
			case '/clubs':
				return navigate('clubs/create');
			case `/clubs/${clubId}/clients`:
				return navigate(`clubs/${clubId}/clients/create`);
			default:
				return null;
		}
	};

	return (
		<div className="flex flex-row justify-between">
			<button type="button" className="block button-style relative bg-[#0C42FC] w-10" onClick={() => navigate(-1)}>
				Back
			</button>
			{(pathname === '/clubs' || pathname === `/clubs/${clubId}/clients`) && (
				<button type="button" onClick={() => handlePathButton(pathname)} className="block button-style relative bg-[#0C42FC] w-[200px]">
					<svg
						className="absolute right-5 top-3 w-4 h-4 text-white dark:text-white"
						aria-hidden="true"
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 18 18"
					>
						<path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 1v16M1 9h16" />
					</svg>
					Create {clubId ? 'Client' : 'Club'}
				</button>
			)}
		</div>
	);
}

export default Header;
