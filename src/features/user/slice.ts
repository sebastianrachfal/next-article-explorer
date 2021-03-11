import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { UserState, PageUser } from './interfaces';

export const initialState: UserState = {
	isLoading: false,
	isError: false,
	error: null,
	current: null,
};

export const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		loadUser: (state, { payload }: PayloadAction<PageUser>) => {
			state.current = payload;
		},
	},
});

// export const fetchArticles = (offset: number = 1) => async (dispatch) => {
// 	dispatch(setLoading(true));
// 	try {
// 		let response = await fetchArticleData(offset);
// 		dispatch(setLoading(false));
// 		dispatch(addArticles(response));
// 		setTimeout(() => dispatch(resetCanLoad()), 5000);
// 	} catch (err) {
// 		dispatch(setFetchFailed(err));
// 	}
// };

export const { loadUser } = userSlice.actions;
export default userSlice.reducer;
