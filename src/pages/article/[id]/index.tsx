import Image from 'next/image';
import ReactMarkdown from 'react-markdown';
import gfm from 'remark-gfm';
import { createRef } from 'react';

import UserFlair from '../../../components/UserFlair';
import ArticleTags from '../../../components/ArticleTags';
import CommentSection from '../../../components/CommentSection';
import { Heart, Comment } from '../../../components/ArticleIcons';

import { ArticlePageData, ArticlePageComment } from '../../../features/article/pageInterfaces';
import { fetchArticle } from '../../../features/article/calls';

import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/cjs/styles/prism';

interface IArticleByID {
	article?: ArticlePageData;
}

function getCommentCount(comments: ArticlePageComment[] = []): number {
	return comments.length + comments.map((c) => getCommentCount(c.children)).reduce((a, b) => a + b, 0);
}

export default function ArticleByID({ article }: IArticleByID) {
	const commentCount = getCommentCount(article.comments);
	let commentRef = createRef<HTMLDivElement>();
	return article === null ? (
		<div>Article not found</div>
	) : (
		<div className='relative md:px-4 px-8 py-6 w-full sm:px-0 mt-4'>
			<div className='rounded-md shadow-2xl'>
				<Image
					width='1500'
					height='600'
					src={article.socialImage}
					className='object-cover object-center w-full h-40 mb-6 rounded'
					alt='Article image'
				/>
				<div className='p-6 pt-2'>
					<h3 className='tracking-tighter mt-2 mb-3 text-lg font-bold text-black lg:text-7xl title-font'>
						{article.title}
					</h3>
					<div className='flex justify-center'>
						<ArticleTags id={article.id} tags={article.tags} />
					</div>
				</div>
				<div className='markdown-body p-6 px-20 flex flex-col text-justify'>
					<ReactMarkdown
						plugins={[gfm]}
						source={article?.bodyMarkdown
							.replace(/---(\n.+)+/, '')
							.replace(/<a .+">/g, '')
							.replace(/<\/a>/g, '')
							.replace(/{% [a-zA-Z]+ /g, '')
							.replace(/%}/g, '')}
						renderers={{ code: Code }}
					/>
				</div>
				<UserFlair user={article.user} date={new Date(article.publishedTimestamp)}>
					<>
						<div
							style={{ transform: 'translate(-110%, 7px)' }}
							className='px-4 z-10 w-fit border border-gray-300 absolute top-0 left-0 bg-white flex justify-between items-center rounded-md shadow-lg p-2 transform -translate-x-1/2'
						>
							<div className='group flex hover:text-pink-600 cursor-pointer'>
								<Heart className='group-gover:text-pink-600' />
								<span className='font-semibold transition duration-200 ease-in-out transform'>
									{article.positiveReactionsCount}
								</span>
							</div>
						</div>
						<div
							style={{ transform: 'translate(110%, 7px)' }}
							className='group cursor-pointer px-4 border border-gray-300 absolute top-0 right-0 bg-white flex justify-between items-center rounded-md shadow-lg p-2 transform -translate-x-1/2'
							onClick={() => {
								console.log('click');
								commentRef.current.scrollIntoView();
							}}
						>
							<div className='flex group-hover:text-blue-500  justify-items-center items-center'>
								<Comment className='group-gover:text-pink-600 mr-0' />
								<span className='font-semibold transition duration-200 ease-in-out transform'>
									{commentCount}
								</span>
							</div>
						</div>
					</>
				</UserFlair>
			</div>
			<div ref={commentRef} id='comments' className='rounded-md shadow-2xl bg-white mt-10'>
				{commentCount > 0 ? (
					<div className='p-6 pt-2'>
						<p className='tracking-tighter mt-2 mb-3 text-lg font-bold text-black lg:text-5xl title-font'>
							Comments({commentCount})
						</p>
						<div className='flex justify-center'>
							<CommentSection comments={article.comments} />
						</div>
					</div>
				) : null}
			</div>
		</div>
	);
}

export const Code = ({ language, value }) => {
	return (
		<SyntaxHighlighter language={language ?? null} style={dracula}>
			{value}
		</SyntaxHighlighter>
	);
};

export const getServerSideProps = async (context) => ({
	props: {
		article: await fetchArticle(context.params.id),
	},
});
