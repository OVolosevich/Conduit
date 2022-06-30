import React from 'react';
import { ArticleItem } from '../../../Shared';
import styles from './styles.module.css';
import ListItem from './ListItem/index';

interface ItemListProps {
  articles: Array<ArticleItem>
}

const FilterBlockItemList: React.FC<ItemListProps> = (props) => {
  const { articles } = props;
  return (
    <div data-testid="filter-block-item-list">
      {articles.map((item) => <ListItem key={item.description} article={item} />)}
    </div>
  );
};

export default FilterBlockItemList;
