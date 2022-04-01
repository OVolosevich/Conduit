import React, { useState, useEffect } from 'react';
import { tagsList, unregisteredGuestData } from '../../variables';
import { getFilteredArticles } from './services';
import FilterTabs from './FilterTabs';
import FilterBlockItemList from './FilterBlockItemList';
import TagsBar from './TagBar';
import styles from './styles.module.css';
import { ArticleItem } from '../../Shared';

interface FilterBlockProps {
  articlesList: ArticleItem[]
}

const FilterBlock: React.FC<FilterBlockProps> = (props) => {
  const { articlesList } = props;
  const [chosenTab, setChosenTab] = useState<string>(
    unregisteredGuestData.filterBlockTabs[0],
  );
  const [areArticlesPresent, setArticlesPresent] = useState<boolean>(false);
  useEffect(() => {
    setArticlesPresent(true);
  }, [articlesList]);
  return (
    <div className={styles['filter-block']}>
      <FilterTabs setChosenTab={setChosenTab} chosenTab={chosenTab} />
      {areArticlesPresent
        ? <FilterBlockItemList articles={getFilteredArticles(articlesList, chosenTab)} />
        : 'Loading'}
      <TagsBar setTab={setChosenTab} tagsList={tagsList} />
    </div>
  );
};

export default FilterBlock;
