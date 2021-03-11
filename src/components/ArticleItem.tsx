import Image from 'next/image';
import Link from 'next/link';
import UserFlair from './UserFlair';
import ArticleTags from './ArticleTags';
import { ArticleData } from '../features/article/interfaces';
import { Heart, Comment, Arrow } from './ArticleIcons';

interface IArticleItemParams {
	data: ArticleData;
}

export const ArticleItem = ({ data }: IArticleItemParams) => {
	return (
		<div className='relative md:px-4 px-8 py-6 xl:w-1/3 lg:w-1/2 md:w-full sm:px-0 mt-4'>
			<div className='rounded-md shadow-2xl'>
				<Image
					width='720'
					height='400'
					src={data.social_image}
					className='object-cover object-center w-full h-40 mb-6 rounded'
					alt='Article image'
				/>
				<div className='p-6 pt-2'>
					<ArticleTags id={data.id} tags={data.tag_list} />
					<h3 className='tracking-tighter mt-2 mb-3 text-lg font-semibold text-gray-700 lg:text-2xl title-font'>
						{data.title}
					</h3>
					<div className='flex mt-4 w-full'>
						<div className='group flex hover:text-pink-600 cursor-pointer'>
							<Heart className='group-gover:text-pink-600' />
							<span className='font-semibold transition duration-200 ease-in-out transform'>
								{data.positive_reactions_count}
							</span>
						</div>
						<Link href='/article/[id]' as={`/article/${data.id}#comments`}>
							<div className='group flex hover:text-blue-500 ml-4 cursor-pointer'>
								<Comment className='group-gover:text-pink-600' />
								<span className='font-semibold transition duration-200 ease-in-out transform'>
									{data.comments_count}
								</span>
							</div>
						</Link>

						<Link href='/article/[id]' as={`/article/${data.id}`}>
							<span className='cursor-pointer transition duration-200 ease-in-out transform ml-auto inline-flex items-center font-semibold text-blue-700 md:mb-2 lg:mb-0 hover:text-blue-400 '>
								Read More
								<Arrow />
							</span>
						</Link>
					</div>
				</div>
				<UserFlair user={data.user} date={new Date(data.published_timestamp)} />
			</div>
		</div>
	);
};
