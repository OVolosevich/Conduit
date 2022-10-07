import React, { useState } from 'react';
import { useSelector } from 'react-redux/es/exports';
import { tagsList, unregisteredGuestData } from '../../variables';
import getFilteredArticles from './services';
import FilterTabs from './FilterTabs';
import FilterBlockItemList from './FilterBlockItemList';
import TagsBar from './TagBar';
import styles from './styles.module.css';
import Preloader from '../Preloader';
import { RootState } from '../../../store/state';
import { HomePageState } from '../../../store/slices/HomePageSlice';

const FilterBlock: React.FC = () => {
  const { articles, isPending } = useSelector<RootState, HomePageState>(
    (state) => state.homepage,
  );
  const [chosenTab, setChosenTab] = useState<string>(
    unregisteredGuestData.filterBlockTabs[0],
  );

  const content = isPending ? (
    <Preloader />
  ) : (
    <FilterBlockItemList articles={getFilteredArticles(articles, chosenTab)} />
  );
  return (
    <div data-testid="filter-block" className={styles['filter-block']}>
      <FilterTabs setChosenTab={setChosenTab} chosenTab={chosenTab} />
      <div className={styles['filter-block__content']}>{content}</div>
      <TagsBar setTab={setChosenTab} tagsList={tagsList} />
    </div>
  );
};

export default FilterBlock;
