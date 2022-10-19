import { ArticleItem } from '../../Shared';

const getFilteredArticles = (
  allArticles: ArticleItem[],
  activeTab = 'global feed',
): ArticleItem[] => {
  if (activeTab === 'global feed') {
    return [...allArticles];
  }
  return [...allArticles].filter((item) => item.tagList.includes(activeTab));
};

export default getFilteredArticles;
