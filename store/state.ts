import { configureStore } from '@reduxjs/toolkit';
import homePageReducer from './slices/homePageSlice';
import signUpPageReducer from './slices/SignUpSlice';

const store = configureStore({
  reducer: {
    homepage: homePageReducer,
    signUpPage: signUpPageReducer,
  },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
