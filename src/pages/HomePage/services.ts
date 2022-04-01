import { ArticleItem } from "../../Shared";

const getArticles = async (): Promise<ArticleItem[]> => {
  const response = await fetch("https://api.realworld.io/api/articles");
  const data = await response.json();
  return data.articles;
};

export { getArticles };
