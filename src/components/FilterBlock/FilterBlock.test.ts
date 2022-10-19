import getFilteredArticles from './services';
import { ArticleItem } from '../../Shared';

describe('getFilteredArticles', () => {
  const articlesData = [
    {
      tagList: ['voluptate'],
    },
    {
      tagList: ['codebaseShow', 'sapiente'],
    },
    {
      tagList: ['sed', 'introduction'],
    },
  ];
  describe('if there is a chosen tab', () => {
    it('returns filtered articles', () => {
      const chosenTab = 'voluptate';
      const result = getFilteredArticles(
        articlesData as ArticleItem[],
        chosenTab,
      );

      expect(result).toEqual([articlesData[0]]);
    });
    describe('when no matches found', () => {
      it('returns empty array', () => {
        const chosenTab = 'ololo';
        const result = getFilteredArticles(
          articlesData as ArticleItem[],
          chosenTab,
        );

        expect(result).toEqual([]);
      });
    });
  });
  describe('if there is no chosen tab', () => {
    it('returns all articles', () => {
      const result = getFilteredArticles(articlesData as ArticleItem[]);

      expect(result).toEqual(articlesData);
    });
  });
});
