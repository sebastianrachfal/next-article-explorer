import { Tag } from '../tags/interfaces';

export interface ArticlesState {
	isFetched: boolean;
	currentData?: ArticleData[];
	isLoading: boolean;
	error: string;
	lastOffset: number;
	canLoadMore: boolean;
	tagStyles: Tag[];
}

export interface ArticleData {
	id: number;
	title: string;
	description: string;
	tag_list: string[];
	published_timestamp: Date;
	positive_reactions_count: number;
	comments_count: number;
	social_image: string;
	user: User;
}

export interface User {
	name: string;
	profile_image?: string;
}
