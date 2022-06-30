import React from 'react';
import styles from './styles.module.css';

interface ArticleInfoProps {
  description: string
  title: string
}

const ArticleInfo: React.FC<ArticleInfoProps> = (props) => {
  const { title, description } = props;
  return (
    <>
      <p className={styles.article__title}>{title}</p>
      <p className={styles.article__description}>{description}</p>
    </>
  );
};

export default ArticleInfo;
