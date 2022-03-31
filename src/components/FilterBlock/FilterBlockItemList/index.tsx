import React from 'react';
import { ArticleItem } from '../data';
import styles from './styles.module.css';
import ListItem from './ListItem/index';

interface ItemListProps {
  articles: Array<ArticleItem>
}

const FilterBlockItemList: React.FC<ItemListProps> = (props) => (
  <div className={styles['filter-block__list-container']}>
    {props.articles.map((item) => <ListItem key={item.articleInfo.description} article={item} />)}
  </div>
);

export default FilterBlockItemList;
