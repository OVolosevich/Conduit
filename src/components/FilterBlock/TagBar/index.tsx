import React from 'react';
import styles from './styles.module.css';

interface TagsBarProps {
  tagsList: string[],
  setTab: React.Dispatch<React.SetStateAction<string>>
}

const TagsBar: React.FC<TagsBarProps> = (props) => (
  <div data-testid="tagbar" className={styles['tags-bar']}>
    <p>Popular tags</p>
    <div className={styles['tags-bar__list']}>
      {props.tagsList.map((item) => (
        <span
          className={styles['tags-bar__item']}
          key={item}
          onClick={() => props.setTab(item)}
        >
          {item}
        </span>
      ))}
    </div>

  </div>
);

export default TagsBar;
