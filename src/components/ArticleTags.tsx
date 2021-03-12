import React from 'react';
import { useSelector } from 'react-redux';

interface IArticleTagsParams {
	id: number;
	tags: string[];
}

//TODO: refactor to use memo
export default function ArticleTags({ id, tags = [] }: IArticleTagsParams) {
	const tagStyles = useSelector((state) => state.articles.tagStyles);
	const names = tagStyles.map((tag) => tag.name);
	return (
		<div className='flex flex-wrap'>
			{tags.map((tag, i) => {
				const curT = names.includes(tag) ? tagStyles.filter((t) => t.name == tag)[0] : null;
				return (
					<div
						style={{
							backgroundColor: curT ? curT.bg_color_hex : 'white',
							color: curT ? curT.text_color_hex : '#9CACCB',
						}}
						className={`p-1 rounded-md mt-2 text-sm ${i === tags.length - 1 ? '' : 'mr-2'}`}
						key={`tag_${id}_${tag}`}
					>
						#{tag}
					</div>
				);
			})}
		</div>
	);
}
