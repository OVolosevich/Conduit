import React from 'react';
import { IArticleItem } from '../data';
import styles from './styles.module.css';
import ListItem from './ListItem/index';

interface itemListProps {
  articles: Array<IArticleItem>
}

const FilterBlockItemList = ({ articles }: itemListProps): JSX.Element => (
  <div className={styles['filter-block__list-container']}>
    {articles.map((item) => <ListItem key={item.articleInfo.description} article={item} />)}
  </div>
);

export default FilterBlockItemList;
