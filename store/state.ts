import { configureStore } from '@reduxjs/toolkit';
import homePageReducer, { HomePageState } from './slices/HomePageSlice';

export interface StateSignature {
  homepage: HomePageState;
}

const store = configureStore({
  reducer: {
    homepage: homePageReducer,
  },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
