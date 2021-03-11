import { User } from './interfaces';

export interface ArticlePageData {
	id: number;
	title: string;
	tags: string[];
	publishedTimestamp: string;
	positiveReactionsCount: number;
	socialImage: string;
	user: ArticlePageUser;
	bodyMarkdown: string;
	comments: ArticlePageComment[];
}

export interface ArticlePageComment {
	idCode: number;
	bodyHtml: string;
	user: ArticlePageUser;
	children: ArticlePageComment[];
}

export interface ArticlePageUser extends User {
	profileImage?: string;
}
