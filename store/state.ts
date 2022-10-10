import { configureStore } from '@reduxjs/toolkit';
import homePageReducer, { HomePageState } from './slices/HomePageSlice';
import signUpPageReducer from './slices/SignUpSlice';

export interface StateSignature {
  homepage: HomePageState;
}

const store = configureStore({
  reducer: {
    homepage: homePageReducer,
    signUpPage: signUpPageReducer,
  },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
