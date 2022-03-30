import React, { useState } from "react";
import { unregisteredGuestData } from "../../../variables";
import styles from "./styles.module.css";

interface IFilterTabs {
  chosenTab: string;
  setChosenTab: React.Dispatch<React.SetStateAction<string>>;
}

const FilterTabs: React.FC<IFilterTabs> = ({ chosenTab, setChosenTab }) => {
  const [defaultTabs, setDefaultTabs] = useState<string[]>(
    unregisteredGuestData.filterBlockTabs
  );
  const allTabs = Array.from(new Set([...defaultTabs, chosenTab]));

  const clickHandler = (tab: string): void => {
    if (unregisteredGuestData.filterBlockTabs.includes(tab)) {
      setChosenTab(tab);
      setDefaultTabs([...unregisteredGuestData.filterBlockTabs]);
    }
  };
  return (
    <ul className={styles["filter-tabs"]}>
      {allTabs.map((item) => (
        <li
          className={styles["filter-tabs__item"]}
          key={item}
          onClick={() => clickHandler(item)}
        >
          {item}
        </li>
      ))}
    </ul>
  );
};

export default FilterTabs;
