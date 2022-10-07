import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import ApiClient from '../../src/ApiClient';
import { ArticleItem } from '../../src/Shared';

export const fetchArticles = createAsyncThunk(
  'homepage/fetchArticles',
  ApiClient.getArticles,
);

export interface HomePageState {
  articles: ArticleItem[],
  isPending: boolean
}

const initialState: HomePageState = {
  articles: [],
  isPending: false,
};

const HomePageSlice = createSlice({
  name: 'HomePageSlice',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchArticles.fulfilled.toString()]: (state, action) => {
      state.isPending = false;
      state.articles = action.payload;
    },
    [fetchArticles.rejected.toString()]: (state, action) => {
      state.isPending = false;
    },
    [fetchArticles.pending.toString()]: (state, action) => {
      state.isPending = true;
    },
  },
});

export default HomePageSlice.reducer;
