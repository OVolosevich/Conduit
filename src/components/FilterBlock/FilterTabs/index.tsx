import React from 'react';
import { unregisteredGuestData } from '../../../variables';

interface IFilterTabs {
  tabs: string[],
  setDefaultTabs: any,
  setChosenTab: any
}

const FilterTabs: React.FC<IFilterTabs> = ({ tabs, setDefaultTabs, setChosenTab }) => {
  const clickHandler = (tab: string): void => {
    if (unregisteredGuestData.filterBlockTabs.includes(tab)) {
      setChosenTab(tab);
      setDefaultTabs([...unregisteredGuestData.filterBlockTabs]);
    }
  };
  return (
    <ul>
      {tabs.map((item) => <li key={item} onClick={() => clickHandler(item)}>{item}</li>)}
    </ul>
  );
};

export default FilterTabs;
