import React, { useEffect, useState } from 'react';
import Banner from '../../components/Banner';
import FilterBlock from '../../components/FilterBlock';
import ApiClient from '../../ApiClient';
import { ArticleItem } from '../../Shared';

const HomePage: React.FC = () => {
  const [articlesList, setArticlesList] = useState<ArticleItem[]>([]);
  useEffect(() => {
    ApiClient.getArticles()
      .then((articles) => setArticlesList(articles));
  }, []);

  return (
    <>
      <Banner />
      <FilterBlock articlesList={articlesList} />
    </>
  );
};

export default HomePage;
