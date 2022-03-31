import React, { useEffect, useState } from 'react';
import Banner from '../../components/Banner';
import FilterBlock from '../../components/FilterBlock';
import { getArticles, ArticleItem } from './services';

const HomePage: React.FC = () => {
  const [articlesList, setArticlesList] = useState<ArticleItem[]>([]);
  useEffect(() => {
    const data = getArticles();
    data.then((res) => setArticlesList(res.articles));
  }, []);

  return (
    <div>
      <Banner />
      <FilterBlock articlesList={articlesList} />
    </div>
  );
};

export default HomePage;
