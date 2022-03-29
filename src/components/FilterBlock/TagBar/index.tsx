import React from 'react';
import styles from './styles.module.css';

interface iTagsBarProps {
  tagsList: string[],
  setTab: any
}

const TagsBar: React.FC<iTagsBarProps> = ({ tagsList, setTab }) => (
  <div className={styles['tags-bar']}>
    <p>Popular tags</p>
    <div className={styles['tags-bar__list']}>
      {tagsList.map((item) => (
        <span
          className={styles['tags-bar__item']}
          key={item}
          onClick={() => setTab(item)}
        >
          {item}
        </span>
      ))}
    </div>

  </div>
);

export default TagsBar;
