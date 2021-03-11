import Link from 'next/link';
export default function Header() {
	return (
		<header className='z-50 fixed text-gray-700 bg-white body-font w-full'>
			<div className='flex flex-col flex-wrap p-5 mx-auto border-b md:items-center md:flex-row'>
				<div className='inline-flex items-center'>
					<div className='w-2 h-2 p-2 mr-2 rounded-full bg-gradient-to-tr from-cyan-400 to-lightBlue-500'></div>
					<h1 className='font-semibold tracking-tighter transition duration-1000 ease-in-out transform text-blueGray-500 dark:text-blueGray-200 lg:text-lg text-bold lg:mr-8'>
						<Link href='/'>
							<a>Article explorer</a>
						</Link>
					</h1>
				</div>
				<nav className='flex flex-wrap items-center justify-center text-base md:ml-auto '>
					<Link href='/'>
						<a className='mr-5 text-sm font-semibold text-gray-600 hover:text-gray-800'>.home</a>
					</Link>
					<Link href='/user'>
						<a className='mr-5 text-sm font-semibold text-gray-600 hover:text-gray-800'>.me</a>
					</Link>
				</nav>
				{/* <button className='items-center px-8 py-2 font-semibold text-white transition duration-500 ease-in-out transform bg-black rounded-lg hover:bg-blueGray-900 focus:ring focus:outline-none'>
					Button
				</button> */}
			</div>
		</header>
	);
}
