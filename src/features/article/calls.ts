import { ArticleData } from './interfaces';
import { ArticlePageData } from './pageInterfaces';
import hostname from '../../../config/hostname';

export const fetchArticleData = async (page: number = 1): Promise<ArticleData[]> => {
	console.log(process.env.NEXT_PUBLIC_HOSTNAME);
	try {
		let data = await fetch(`${hostname}/api/graphql`, {
			method: 'POST',
			body: ` makeRestCall {
                        get(path: "/articles?page=${page}") {
                            jsonBody
                        }
                    }`,
		}).then((r) => r.json());
		return data.makeRestCall.get.jsonBody;
	} catch (err) {
		throw new Error(err.message);
	}
};
export const fetchArticle = async (id: number = 1): Promise<ArticlePageData> => {
	console.log(process.env.NEXT_PUBLIC_HOSTNAME);
	try {
		let data = await fetch(`${hostname}/api/graphql`, {
			method: 'POST',
			body: ` publishedArticle(id: ${id}) {
                        id
                        title
                        tags
                        socialImage
                        publishedTimestamp
                        positiveReactionsCount
                        comments {
                            nodes {
                                idCode
                                bodyHtml
                                user {
                                    name
                                    profileImage
                                }
                                children {
                                    idCode
                                    bodyHtml
                                    user {
                                        name
                                        profileImage
                                    }
                                    children {
                                        idCode
                                        bodyHtml
                                        user {
                                            name
                                            profileImage
                                        }
                                    }
                                }
                            }
                        }
                        user {
                            name
                            profileImage
                        }
                        bodyMarkdown
                    }`,
		}).then((r) => r.json());
		const article = data.publishedArticle;
		article.comments = article.comments.nodes;
		return article;
	} catch (err) {
		throw new Error(err.message);
	}
};
