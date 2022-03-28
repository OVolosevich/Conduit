import React from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';
import CommonPageLayout from './pages/CommonPageLayout';
import HomePage from './pages/HomePage';
import SignInPage from './pages/SignInPage';
import SignUpPage from './pages/SignUpPage';

const App: React.FC = () => (
  <HashRouter>
    <Routes>
      <Route element={<CommonPageLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/sign-in" element={<SignInPage />} />
        <Route path="/sign-up" element={<SignUpPage />} />
      </Route>
    </Routes>
  </HashRouter>

);

export default App;
