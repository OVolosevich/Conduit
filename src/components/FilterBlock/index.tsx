import React, { useState } from "react";
import { articlesData as articles } from "./data";
import { tagsList, unregisteredGuestData } from "../../variables";
import { getFilteredArticles } from './services';
import FilterTabs from "./FilterTabs";
import FilterBlockItemList from "./FilterBlockItemList";
import TagsBar from "./TagBar";
import styles from "./styles.module.css";


const FilterBlock: React.FC = () => {
  const [chosenTab, setChosenTab] = useState<string>(
    unregisteredGuestData.filterBlockTabs[0]
  );
  const filteredArticles = getFilteredArticles(articles, chosenTab);
  return (
    <div className={styles["filter-block"]}>
      <FilterTabs setChosenTab={setChosenTab} chosenTab={chosenTab} />
      <FilterBlockItemList articles={filteredArticles} />
      <TagsBar setTab={setChosenTab} tagsList={tagsList} />
    </div>
  );
};

export default FilterBlock;
