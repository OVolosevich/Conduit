import React from 'react';
import styles from './styles.module.css';

interface TagsBarProps {
  tagsList: string[];
  setTab: React.Dispatch<React.SetStateAction<string>>;
}

const TagsBar: React.FC<TagsBarProps> = (props) => {
  const { tagsList, setTab } = props;
  return (
    <div data-testid="tagbar" className={styles['tags-bar']}>
      <p className={styles.tagbar__title}>Popular tags</p>
      <div className={styles['tags-bar__list']}>
        {tagsList.map((item) => (
          <button
            type="button"
            className={styles['tags-bar__item']}
            key={item}
            onClick={() => setTab(item)}
            onKeyDown={(e) => e.key === 'Enter' && setTab(item)}
          >
            {item}
          </button>
        ))}
      </div>
    </div>
  );
};

export default TagsBar;
