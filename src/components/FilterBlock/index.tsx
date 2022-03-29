import React, { useState } from 'react';
import FilterTabs from './FilterTabs';
import FilterBlockItemList from './FilterBlockItemList';
import { articleData } from './data';
import { tagsList, unregisteredGuestData } from '../../variables';
import TagsBar from './TagBar';
import styles from './styles.module.css';

const FilterBlock: React.FC = () => {
  const [defaultTabs, setDefaultTabs] = useState<string[]>(unregisteredGuestData.filterBlockTabs);
  const [chosenTab, setChosenTab] = useState<string>(unregisteredGuestData.filterBlockTabs[0]);
  const allTabs = new Set([...defaultTabs, chosenTab]);
  return (
    <div className={styles['filter-block']}>
      <FilterTabs
        setDefaultTabs={setDefaultTabs}
        setChosenTab={setChosenTab}
        tabs={Array.from(allTabs)} />
      <FilterBlockItemList articles={articleData} />
      <TagsBar setTab={setChosenTab} tagsList={tagsList} />
    </div>
  );
};

export default FilterBlock;
