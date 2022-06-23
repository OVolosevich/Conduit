interface ArticleAuthor {
  bio: string
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
export { ArticleItem };
