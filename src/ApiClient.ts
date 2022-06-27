import axios from 'axios';
import { ArticleItem, RegisterUserResponse, User } from './Shared';

class ApiClient {
  static api_base = 'https://api.realworld.io/api/';

  static getArticles = async ():Promise<ArticleItem[]> => {
    const response = await axios.get(`${this.api_base}articles`);
    if (response.status === 200) {
      return response.data.articles;
    }
    throw new Error(response.status.toString());
  };

  static registerUser = async (user: User) => {
    const response = await axios.post(`${this.api_base}users`, { user });
    if (response.status === 200) {
      return response.data.user;
    }
    throw new Error("registerUser fn fails");
  };
}

export default ApiClient;
