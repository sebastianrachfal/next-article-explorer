const Arrow = () => (
	<svg
		className='w-4 h-4 ml-2'
		xmlns='http://www.w3.org/2000/svg'
		viewBox='0 0 24 24'
		width='20'
		height='20'
		fill='currentColor'
	>
		<path fill='none' d='M0 0h24v24H0z' />
		<path d='M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z' />
	</svg>
);

const Comment = ({ className }) => (
	<svg
		className={className + ' transition duration-200 ease-in-out transform w-6 h-6 mr-2 fill-current text-red'}
		xmlns='http://www.w3.org/2000/svg'
		viewBox='0 0 24 24'
		width='20'
		height='20'
	>
		<path d='M5.25 18A3.25 3.25 0 012 14.75v-8.5A3.25 3.25 0 015.25 3h13.5A3.25 3.25 0 0122 6.25v8.5A3.25 3.25 0 0118.75 18h-5.738L8 21.75a1.25 1.25 0 01-1.999-1V18h-.75zm7.264-1.5h6.236a1.75 1.75 0 001.75-1.75v-8.5a1.75 1.75 0 00-1.75-1.75H5.25A1.75 1.75 0 003.5 6.25v8.5c0 .966.784 1.75 1.75 1.75h2.249v3.75l5.015-3.75z'></path>
	</svg>
);

const Heart = ({ className }) => (
	<svg
		className={className + ' transition duration-200 ease-in-out transform w-6 h-6 mr-2 fill-current text-red'}
		xmlns='http://www.w3.org/2000/svg'
		x='0'
		y='0'
		enableBackground='new 0 0 471.701 471.701'
		version='1.1'
		viewBox='0 0 471.701 471.701'
		xmlSpace='preserve'
	>
		<path d='M433.601 67.001c-24.7-24.7-57.4-38.2-92.3-38.2s-67.7 13.6-92.4 38.3l-12.9 12.9-13.1-13.1c-24.7-24.7-57.6-38.4-92.5-38.4-34.8 0-67.6 13.6-92.2 38.2-24.7 24.7-38.3 57.5-38.2 92.4 0 34.9 13.7 67.6 38.4 92.3l187.8 187.8c2.6 2.6 6.1 4 9.5 4 3.4 0 6.9-1.3 9.5-3.9l188.2-187.5c24.7-24.7 38.3-57.5 38.3-92.4.1-34.9-13.4-67.7-38.1-92.4zm-19.2 165.7l-178.7 178-178.3-178.3c-19.6-19.6-30.4-45.6-30.4-73.3s10.7-53.7 30.3-73.2c19.5-19.5 45.5-30.3 73.1-30.3 27.7 0 53.8 10.8 73.4 30.4l22.6 22.6c5.3 5.3 13.8 5.3 19.1 0l22.4-22.4c19.6-19.6 45.7-30.4 73.3-30.4 27.6 0 53.6 10.8 73.2 30.3 19.6 19.6 30.3 45.6 30.3 73.3.1 27.7-10.7 53.7-30.3 73.3z'></path>
	</svg>
);

export { Heart, Comment, Arrow };
