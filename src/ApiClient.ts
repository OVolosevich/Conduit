import axios, { AxiosError } from 'axios';
import { ArticleItem, RegisterUserResponse, UserInfo } from './Shared';
import { getDefaultServerErrorText } from './variables';

class ApiClient {
  static api_base = 'https://api.realworld.io/api/';

  static getArticles = async (): Promise<ArticleItem[]> => {
    const response = await axios.get(`${this.api_base}articles`);
    if (response.status === 200) {
      return response.data.articles;
    }
    throw new Error(getDefaultServerErrorText(response.status));
  };

  static registerUser = async (
    user: UserInfo,
  ): Promise<RegisterUserResponse> => {
    try {
      const response = await axios.post(`${this.api_base}users`, { user });
      if (response.status === 200) {
        return {
          success: true,
          message: 'success',
        };
      }
      throw new Error(getDefaultServerErrorText(response.status));
    } catch (error) {
      if (error instanceof AxiosError) {
        return {
          success: false,
          message: error.message,
        };
      }
      return {
        success: false,
        message: 'smth went wrong',
      };
    }
  };
}

export default ApiClient;
