import React, { useState } from "react";
import { tagsList, unregisteredGuestData } from "../../variables";
import { getFilteredArticles } from "./services";
import FilterTabs from "./FilterTabs";
import FilterBlockItemList from "./FilterBlockItemList";
import TagsBar from "./TagBar";
import styles from "./styles.module.css";
import { ArticleItem } from "../../Shared";

interface FilterBlockProps {
  articlesList: ArticleItem[] | undefined;
}

const FilterBlock: React.FC<FilterBlockProps> = (props) => {
  const { articlesList } = props;
  const [chosenTab, setChosenTab] = useState<string>(
    unregisteredGuestData.filterBlockTabs[0]
  );
  return (
    <div className={styles["filter-block"]}>
      <FilterTabs setChosenTab={setChosenTab} chosenTab={chosenTab} />
      {articlesList && articlesList.length > 0 ? (
        <FilterBlockItemList
          articles={getFilteredArticles(articlesList!, chosenTab)}
        />
      ) : (
        "Loading"
      )}
      <TagsBar setTab={setChosenTab} tagsList={tagsList} />
    </div>
  );
};

export default FilterBlock;
