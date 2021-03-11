import { ArticleData } from './interfaces';
import { ArticlePageData } from './pageInterfaces';

export const fetchArticleData = async (page: number = 1): Promise<ArticleData[]> => {
	try {
		let data = await fetch(`${process.env.API}/api/graphql`, {
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
	try {
		let data = await fetch(`${process.env.API}/api/graphql`, {
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
