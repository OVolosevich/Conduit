import React from 'react';
import { ArticleItem } from '../../../../Shared';
import CreationInfo from './CreationInfo';
import styles from './styles.module.css';
import ArticleInfo from './ArticleInfo/index';
import ReadMoreLink from './ReadMoreLink/index';
import LikesNumber from './LikesNumber/index';
import TagList from './TagList/index';

interface ListItemProps {
  article: ArticleItem
}
const ListItem: React.FC<ListItemProps> = (props) => {
  const { article } = props;
  const {
    author, createdAt, description, title, favoritesCount, tagList,
  } = article;
  return (
    <div data-testid="list-item" className={styles['list-item']}>
      <CreationInfo authorInfo={author} creationDate={createdAt} />
      <ArticleInfo description={description} title={title} />
      <ReadMoreLink link="/" />
      <LikesNumber likesNumber={favoritesCount} />
      <TagList tags={tagList} />
    </div>
  );
};

export default ListItem;
