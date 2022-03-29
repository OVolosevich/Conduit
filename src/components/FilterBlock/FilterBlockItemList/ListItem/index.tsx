import React from 'react';
import { IArticleItem } from '../../data';
import CreationInfo from './CreationInfo';
import styles from './styles.module.css';
import ArticleInfo from './ArticleInfo/index';
import ReadMoreLink from './ReadMoreLink/index';
import LikesNumber from './LikesNumber/index';
import TagList from './TagList/index';

interface ListItemProps {
  article: IArticleItem
}
const ListItem = ({ article }: ListItemProps): JSX.Element => (
  <div className={styles['list-item']}>
    <CreationInfo creationInfo={article.creationInfo} />
    <ArticleInfo info={article.articleInfo} />
    <ReadMoreLink link={article.linkToArticle} />
    <LikesNumber likesNumber={article.likesNumber} />
    <TagList tags={article.tags} />
  </div>
);

export default ListItem;
