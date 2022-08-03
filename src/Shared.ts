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

const enum BreakPoints {
  mobile = 320,
  tablet = 768,
  desktop = 1024,
  maximum = 1300,
}

interface RegisterUserResponse {
  email: string,
  token: string,
  username: string,
  bio: string,
  image: null
}

interface UserInfo {
  email: string,
  username: string,
  password: string,
  [key: string]: string;
}

export {
  ArticleItem, BreakPoints, RegisterUserResponse, UserInfo,
};
