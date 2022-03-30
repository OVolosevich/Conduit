import { getFilteredArticles } from "./../src/components/FilterBlock/services";
import { articlesData } from "../src/components/FilterBlock/data";
import { tagsList } from "./../src/variables";

describe("getFilteredArticles fn from FilterBlock", () => {
  test("returns filtered articles", () => {
    tagsList.forEach((tag) => {
      let result = [...articlesData].filter((item) => item.tags.includes(tag));
      expect(getFilteredArticles(articlesData, tag)).toEqual(result);
    });
  });
  test("returns all articles", () => {
    expect(getFilteredArticles(articlesData, "global feed")).toEqual(
      articlesData
    );
  });
});
