import { ArticleItem } from './Shared';

class ApiClient {
  static api_base = 'https://api.realworld.io/api/';

  static getArticles = async (): Promise<ArticleItem[]> => {
    let result = [];
    try {
      const response = await fetch(`${this.api_base}articles`);
      if (response.status === 200) {
        const data = await response.json();
        result = data.articles;
      } else {
        throw new Error(response.status.toString());
      }
    } catch (e: any) {
      console.log(e, 'error');
    } finally {
      return result;
    }
  };
}

export default ApiClient;
