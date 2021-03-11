import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { RootState } from '../../app/rootReducer';
import { ArticlesState, ArticleData } from './interfaces';
import { Tag } from '../tags/interfaces';
import { fetchArticleData } from './calls';
import { fetchTagStyles } from '../tags/calls';

export const initialState: ArticlesState = {
	isFetched: false,
	isLoading: false,
	currentData: [],
	error: 'An Error occurred',
	lastOffset: 1,
	canLoadMore: false,
	tagStyles: [],
};

export const articleSlice = createSlice({
	name: 'articles',
	initialState,
	reducers: {
		setLoading: (state, { payload }: PayloadAction<boolean>) => {
			state.isLoading = payload;
		},
		setFetchSuccess: (state, { payload }: PayloadAction<ArticleData[]>) => {
			state.currentData = payload;
			state.isFetched = true;
		},
		setFetchFailed: (state, { payload }: PayloadAction<string>) => {
			state.error = payload;
			state.isFetched = false;
		},
		addArticles: (state, { payload }: PayloadAction<ArticleData[]>) => {
			const currentIDs = state.currentData.map((article) => article.id);
			state.currentData.push(...payload.filter((article) => !currentIDs.includes(article.id)));
			state.isFetched = true;
			state.lastOffset++;
			state.canLoadMore = false;
		},
		resetCanLoad: (state) => {
			state.canLoadMore = true;
		},
		setTags: (state, { payload }: PayloadAction<Tag[]>) => {
			state.tagStyles = payload;
		},
	},
});

export const fetchArticles = (offset: number = 1) => async (dispatch) => {
	dispatch(setLoading(true));
	try {
		let response = await fetchArticleData(offset);
		dispatch(setLoading(false));
		dispatch(addArticles(response));
		setTimeout(() => dispatch(resetCanLoad()), 5000);
	} catch (err) {
		dispatch(setFetchFailed(err));
	}
};

export const fetchTags = () => async (dispatch) => {
	dispatch(setTags(await fetchTagStyles()));
};

export const { setFetchSuccess, setLoading, setFetchFailed, addArticles, resetCanLoad, setTags } = articleSlice.actions;
export default articleSlice.reducer;
export const articleSelector = (state: RootState) => state.articles;
