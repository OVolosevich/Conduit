import { ArticleItem } from "./data";
export const getFilteredArticles = (allArticles: ArticleItem[], activeTab: string): ArticleItem[] => {
	return activeTab === "global feed" ?
		[...allArticles]
		:
		[...allArticles].filter((item) => item.tags.includes(activeTab));
}