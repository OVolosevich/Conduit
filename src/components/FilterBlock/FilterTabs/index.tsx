import React from 'react';
import { unregisteredGuestData } from '../../../variables';

const FilterTabs: React.FC = () => {
  const { filterBlockTabs } = unregisteredGuestData;
  return (
    <ul>
      {filterBlockTabs.map((item) => <li key={item}>{item}</li>)}
    </ul>
  );
};

export default FilterTabs;
