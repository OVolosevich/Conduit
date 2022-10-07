import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchArticles } from '../../../store/slices/HomePageSlice';
import Banner from '../../components/Banner';
import FilterBlock from '../../components/FilterBlock';
import { AppDispatch } from '../../../store/state';

const HomePage: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchArticles());
  }, [dispatch]);
  return (
    <>
      <Banner />
      <FilterBlock />
    </>
  );
};

export default HomePage;
