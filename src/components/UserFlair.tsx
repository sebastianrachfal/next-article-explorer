import React from 'react';
import Image from 'next/image';
import { ArticlePageUser } from '../features/article/pageInterfaces';

interface IUserFlairParams {
	user: ArticlePageUser;
	date: Date;
	children?: React.ReactChild;
}
function getDateOffset(date: Date) {
	const offset = Math.round((Date.now() - date.getTime()) / 1000);
	if (offset < 3600) return ` (${Math.round(offset / 60)}m ago)`;
	if (offset < 2 * 24 * 3600) return ` (${Math.round(offset / 3600)}h ago)`;
	return '';
}
export default function UserFlair({ user, date, children }: IUserFlairParams) {
	return (
		<div
			className='z-20 border border-gray-300 absolute top-0 left-1/2 bg-white flex justify-center items-center rounded-md shadow-lg p-1'
			style={{ transform: 'translate(-50%, -0.4rem)' }}
		>
			{children}
			<div className='rounded-full border-2 border-gray-300 overflow-hidden h-12 w-12'>
				<Image
					className='rounded-full'
					src={!!user.profile_image ? user.profile_image : user.profileImage}
					width='48'
					height='48'
					alt='Profile Image'
				/>
			</div>
			<div className='mx-5 flex flex-col'>
				<span className='font-semibold whitespace-nowrap'>{user.name}</span>
				<span className='whitespace-nowrap text-gray-500'>
					{date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' }) + getDateOffset(date)}
				</span>
			</div>
		</div>
	);
}
