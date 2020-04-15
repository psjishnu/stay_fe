import React from 'react';
import { useRoutes, navigate } from 'hookrouter';
import NavBar from '../components/Navbars/NavBar';

const routes = {
	'/': () => <div className='h-screen flex justify-center py-16'>Home</div>,
};

const AppRouter = () => {
	const pages = useRoutes(routes);
	!pages && navigate("/")
	return (
		<div className="bg-gray-200">
			<NavBar />
			{pages}
			{!pages && (
				<div className='h-screen flex justify-center py-16'>
					Error 404: Page not found
				</div>
			)}
		</div>
	);
};

export default AppRouter;
