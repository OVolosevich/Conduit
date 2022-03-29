import React from 'react';
import styles from './styles.module.css';

interface iTagsBarProps {
  tagsList: string[]
}

const TagsBar: React.FC<iTagsBarProps> = ({ tagsList }) => (
  <div className={styles['tags-bar']}>
    <p>Popular tags</p>
    <div className={styles['tags-bar__list']}>
      {tagsList.map((item) => <span className={styles['tags-bar__item']} key={item}>{item}</span>)}
    </div>

  </div>
);

export default TagsBar;
