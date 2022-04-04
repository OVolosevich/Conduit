import React, { useEffect, useState } from 'react';
import Banner from '../../components/Banner';
import FilterBlock from '../../components/FilterBlock';
import  ApiClient  from '../../ApiClient';
import { ArticleItem } from '../../Shared';

const HomePage: React.FC = () => {
  const [articlesList, setArticlesList] = useState<ArticleItem[]>([]);
  useEffect(() => {
    const data = ApiClient.getArticles();
    data.then((articles) => setArticlesList(articles));
  }, []);

  return (
    <div>
      <Banner />
      <FilterBlock articlesList={articlesList} />
    </div>
  );
};

export default HomePage;
