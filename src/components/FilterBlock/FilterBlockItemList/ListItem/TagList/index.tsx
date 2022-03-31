import React from 'react';
import styles from './styles.module.css';

interface TagListProps {
  tags: string[]
}

const TagList: React.FC<TagListProps> = (props) => (
  <div className={styles['tag-list']}>
    {props.tags.map((item) => <p className="tag-list__item" key={item}>{item}</p>)}
  </div>
);

export default TagList;
