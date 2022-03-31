import React from 'react';
import { ArticleItem } from '../../data';
import CreationInfo from './CreationInfo';
import styles from './styles.module.css';
import ArticleInfo from './ArticleInfo/index';
import ReadMoreLink from './ReadMoreLink/index';
import LikesNumber from './LikesNumber/index';
import TagList from './TagList/index';

interface ListItemProps {
  article: ArticleItem
}
const ListItem: React.FC<ListItemProps> = (props) => (
  <div className={styles['list-item']}>
    <CreationInfo creationInfo={props.article.creationInfo} />
    <ArticleInfo info={props.article.articleInfo} />
    <ReadMoreLink link={props.article.linkToArticle} />
    <LikesNumber likesNumber={props.article.likesNumber} />
    <TagList tags={props.article.tags} />
  </div>
);

export default ListItem;
