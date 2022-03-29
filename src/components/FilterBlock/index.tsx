import React from 'react';
import FilterTabs from './FilterTabs';
import FilterBlockItemList from './FilterBlockItemList';
import { articleData } from './data';
import { tagsList } from '../../variables';
import TagsBar from './TagBar';
import styles from './styles.module.css';

const FilterBlock: React.FC = () => (
  <div className={styles['filter-block']}>
    <FilterTabs />
    <FilterBlockItemList articles={articleData} />
    <TagsBar tagsList={tagsList} />
  </div>
);

export default FilterBlock;
