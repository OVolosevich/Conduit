interface CreationInfo {
  author: string,
  authorAvatarUrl: string,
  date: string
}

interface ArticleInfo {
  title: string,
  description: string
}

interface ArticleItem {
  creationInfo: CreationInfo,
  articleInfo: ArticleInfo,
  likesNumber: number,
  linkToArticle: string,
  linkToAuthorPage: string,
  tags: string[]
}

const articlesData: ArticleItem[] = [
  {
    creationInfo: {
      author: 'Gerome',
      authorAvatarUrl: 'https://beauty73.org/wp-content/uploads/2018/11/92979836-profile-anonymous-face-icon-gray-silhouette-person-male-default-avatar-photo-placeholder-isolated-on.jpg',
      date: '24 November',
    },
    articleInfo: {
      title: 'Create a new implementation',
      description: 'Description 1',
    },
    likesNumber: 0,
    linkToArticle: '/',
    linkToAuthorPage: '/',
    tags: ['implementations'],
  },
  {
    creationInfo: {
      author: 'Gerome',
      authorAvatarUrl: 'https://beauty73.org/wp-content/uploads/2018/11/92979836-profile-anonymous-face-icon-gray-silhouette-person-male-default-avatar-photo-placeholder-isolated-on.jpg',
      date: '24 November',
    },
    articleInfo: {
      title: 'Explore implementations',
      description: 'Description 2',
    },
    likesNumber: 0,
    linkToArticle: '/',
    linkToAuthorPage: '/',
    tags: ['codebaseShow', 'implementations'],
  },
  {
    creationInfo: {
      author: 'Gerome',
      authorAvatarUrl: 'https://beauty73.org/wp-content/uploads/2018/11/92979836-profile-anonymous-face-icon-gray-silhouette-person-male-default-avatar-photo-placeholder-isolated-on.jpg',
      date: '24 November',
    },
    articleInfo: {
      title: 'Welcome to RealWorld project',
      description: 'Description 3',
    },
    likesNumber: 0,
    linkToArticle: '/',
    linkToAuthorPage: '/',
    tags: ['welcome', 'introduction'],
  },
];

export {
  articlesData, ArticleItem, CreationInfo, ArticleInfo,
};
