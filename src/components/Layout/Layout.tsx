import Header from './Header';

import { fetchTags } from '../../features/article/slice';
import { useAppDispatch } from '../../app/store';
import { useEffect } from 'react';

export default function Layout({ children }) {
	const dispatch = useAppDispatch();
	useEffect(() => dispatch(fetchTags()), []);
	return (
		<div className='flex flex-col h-screen'>
			<Header />
			<main className='container sm:px-0 w-full lg:px-10 mx-auto text-center bg-white rounded-xl mt-20'>
				{children}
			</main>
		</div>
	);
}
