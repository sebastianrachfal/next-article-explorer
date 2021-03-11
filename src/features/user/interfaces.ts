export interface UserState {
	isLoading: boolean;
	isError: boolean;
	error: string;
	current: PageUser;
}

export interface PageUser {
	name: string;
	image: string;
	likedArticles: number[];
}
