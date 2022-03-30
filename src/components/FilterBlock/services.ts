import { IArticleItem } from "./data";
export const getFilteredArticles = (allArticles: IArticleItem[], activeTab: string): IArticleItem[] => {
	return activeTab === "global feed" ?
		[...allArticles]
		:
		[...allArticles].filter((item) => item.tags.includes(activeTab));
}