import React from 'react';
import FilterTabs from './FilterTabs';
import FilterBlockItemList from './FilterBlockItemList';
import { articleData } from './data';

const FilterBlock: React.FC = () => (
  <div>
    <FilterTabs />
    <FilterBlockItemList articles={articleData} />
  </div>
);

export default FilterBlock;
