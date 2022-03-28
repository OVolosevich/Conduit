interface ICreationInfo {
  author: string,
  authorAvatarUrl: string,
  date: string
}

interface IArticleInfo {
  title: string,
  description: string
}

interface IArticleItem {
  creationInfo: ICreationInfo,
  articleInfo: IArticleInfo,
  likesNumber: number,
  linkToArticle: string,
  linkToAuthorPage: string,
  tags: string[]
}

const articleData: IArticleItem[] = [
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
    tags: ['codeBaseShow', 'implementations'],
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

export default articleData;
