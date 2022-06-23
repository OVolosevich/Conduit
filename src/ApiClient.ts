import { ArticleItem } from './Shared';

class ApiClient {
  static api_base = 'https://api.realworld.io/api/';

  static getArticles = async ():Promise<ArticleItem[]> => {
    let result = [];
    const response = await fetch(`${this.api_base}articles`);
    if (response.status === 200) {
      const data = await response.json();
      result = data.articles;
      return result;
    }
    throw new Error(response.status.toString());
  };
}

export default ApiClient;
