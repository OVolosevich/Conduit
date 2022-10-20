import axios, { AxiosError } from 'axios';
import assert from 'assert';
import ApiClient from './ApiClient';
import { ArticleItem } from './Shared';
import { getDefaultServerErrorText } from './variables';

jest.mock('axios');
const mockedAxios = jest.mocked(axios, true);

describe('ApiClient', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('registerUser', () => {
    it('returns a object with success flag and message', async () => {
      const expectedResponse = {
        success: true,
        message: 'success',
      };

      mockedAxios.post.mockResolvedValueOnce({
        status: 200,
        data: {
          user: {
            username: 'username',
            email: 'email',
            password: 'password',
            token: 'token',
            bio: null,
          },
        },
      });

      const result = await ApiClient.registerUser({
        username: 'username',
        email: 'email',
        password: 'password',
      });

      expect(result).toEqual(expectedResponse);
    });

    it('throws an error if user info is empty', async () => {
      const responseOnFail = {
        message: 'fails',
        response: {
          status: 422,
          data: {
            errors: ["can't be blank"],
          },
        },
      };
      const emptyUser = {
        username: '',
        email: '',
        password: '',
      };

      mockedAxios.post.mockRejectedValueOnce(responseOnFail);
      try {
        await ApiClient.registerUser(emptyUser);
        assert.fail("mustn't go here");
      } catch (error) {
        if (error instanceof AxiosError) {
          expect(error.response?.status).toBe(422);
        }
      } finally {
        expect(mockedAxios.post).toHaveBeenCalledTimes(1);
      }
    });

    it('throws network error if url is wrong', async () => {
      mockedAxios.post.mockRejectedValueOnce(new Error('Network error'));
      try {
        await ApiClient.registerUser({
          username: 'username',
          email: 'email',
          password: 'password',
        });
        assert.fail("mustn't go here");
      } catch (e) {
        if (e instanceof Error) {
          expect(e.message).toBe('Network error');
        }
      } finally {
        expect(mockedAxios.post).toHaveBeenCalledTimes(1);
      }
    });

    it('throws custom error if response status code is not 200', async () => {
      mockedAxios.post.mockResolvedValueOnce({
        status: 500,
        data: {},
      });

      try {
        await ApiClient.registerUser({
          username: 'username',
          email: 'email',
          password: 'password',
        });
        assert.fail("mustn't go here");
      } catch (e) {
        if (e instanceof Error) {
          expect(e.message).toBe('registerUser fn fails');
        }
      } finally {
        expect(mockedAxios.post).toHaveBeenCalledTimes(1);
      }
    });
  });
  describe('getArticles', () => {
    it('returns a list of articles', async () => {
      const articles = [
        {
          tagList: [],
          author: 'author',
          body: 'body',
        },
        {
          tagList: [],
          author: 'author',
          body: 'body',
        },
        {
          tagList: [],
          author: 'author',
          body: 'body',
        },
      ] as unknown as ArticleItem[];

      mockedAxios.get.mockResolvedValueOnce({
        status: 200,
        data: {
          articles,
        },
      });

      const result = await ApiClient.getArticles();

      expect(result).toEqual(articles);
    });
    it('if there is an error returns status as string', async () => {
      const errorCode = 500;
      mockedAxios.get.mockResolvedValueOnce({
        status: errorCode,
        data: {},
      });
      try {
        await ApiClient.getArticles();
      } catch (e) {
        if (e instanceof Error) {
          const expectedResult = getDefaultServerErrorText(errorCode);
          expect(e.message).toEqual(expectedResult);
        }
      }
    });
  });
});
