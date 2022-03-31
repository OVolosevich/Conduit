import React from 'react';
import styles from './styles.module.css';

interface ArticleInfoProps {
  description: string
  title: string
}

const ArticleInfo: React.FC<ArticleInfoProps> = (props) => (
  <>
    <p className={styles.article__title}>{props.title}</p>
    <p className={styles.article__description}>{props.description}</p>
  </>
);

export default ArticleInfo;
