import { ArticlePageComment } from '../features/article/pageInterfaces';

interface ICommentSectionProps {
	comments: ArticlePageComment[];
}

interface ICommentProps {
	comment: ArticlePageComment;
	flipped?: boolean;
}

const Comment = ({ comment, flipped = true }: ICommentProps) => {
	return (
		<div className='flex text-left comment w-full'>
			<div className='flex-shrink-0 mr-3'>
				<img
					className='mt-2 rounded-full w-8 h-8 sm:w-10 sm:h-10 profile-picture'
					src={comment.user.profileImage}
					alt=''
				/>
			</div>
			<div
				className={
					'flex-1 border rounded-lg px-4 py-2 sm:px-6 sm:py-4 leading-relaxed ' +
					(flipped ? 'bg-gray-100' : 'bg-white')
				}
			>
				<strong>{comment.user.name}</strong>
				<div className='text-sm' dangerouslySetInnerHTML={{ __html: comment.bodyHtml }}></div>
				{comment.children?.length > 0 ? (
					<>
						<h4 className='my-5 uppercase tracking-wide text-gray-400 font-bold text-xs'>Replies</h4>
						<div className='space-y-4'>
							{comment.children?.map((child) => (
								<Comment comment={child} flipped={!flipped} key={'comment_' + child.idCode} />
							))}
						</div>
					</>
				) : null}
			</div>
		</div>
	);
};

export default function CommentSection({ comments }: ICommentSectionProps) {
	return (
		<div className='space-y-4 p-0 md:p-10 lg:px-20 lg:py-10 w-full overflow-x-auto'>
			{comments.map((c) => (
				<Comment comment={c} key={'comment_' + c.idCode} />
			))}
		</div>
	);
}
