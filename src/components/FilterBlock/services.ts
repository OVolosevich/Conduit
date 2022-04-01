import { ArticleItem } from "../../Shared";

export const getFilteredArticles = (allArticles: ArticleItem[], activeTab: string): ArticleItem[] => (
  activeTab === 'global feed'
    ? [...allArticles]
    : [...allArticles].filter((item) => item.tagList.includes(activeTab)));
