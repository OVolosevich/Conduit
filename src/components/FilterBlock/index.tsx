import React, { useState } from "react";
import FilterTabs from "./FilterTabs";
import FilterBlockItemList from "./FilterBlockItemList";
import { articleData } from "./data";
import { tagsList, unregisteredGuestData } from "../../variables";
import TagsBar from "./TagBar";
import styles from "./styles.module.css";

const FilterBlock: React.FC = () => {
  const [chosenTab, setChosenTab] = useState<string>(
    unregisteredGuestData.filterBlockTabs[0]
  );
  return (
    <div className={styles["filter-block"]}>
      <FilterTabs setChosenTab={setChosenTab} chosenTab={chosenTab} />
      <FilterBlockItemList articles={articleData} />
      <TagsBar setTab={setChosenTab} tagsList={tagsList} />
    </div>
  );
};

export default FilterBlock;
