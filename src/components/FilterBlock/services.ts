import { ArticleItem } from '../../pages/HomePage/services';

export const getFilteredArticles = (allArticles: ArticleItem[], activeTab: string): ArticleItem[] => (
  activeTab === 'global feed'
    ? [...allArticles]
    : [...allArticles].filter((item) => item.tagList.includes(activeTab)));
