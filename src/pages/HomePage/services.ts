interface ArticleAuthor {
  bio: unknown
  following: boolean
  image: string
  username: string
}
interface ArticleItem {
  author: ArticleAuthor,
  body: string
  createdAt: string
  description: string
  favorited: boolean
  favoritesCount: number
  slug: string
  tagList: string[]
  title: string
  updatedAt: string
}

const getArticles = async () => {
  const response = await fetch('https://api.realworld.io/api/articles');
  const data = await response.json();
  return data;
};

export { getArticles, ArticleItem };
