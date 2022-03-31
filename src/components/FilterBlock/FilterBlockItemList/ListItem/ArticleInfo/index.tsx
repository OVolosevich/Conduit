import React from 'react';
import { ArticleInfo } from '../../../data';
import styles from './styles.module.css';

interface ArticleInfoProps {
  info: ArticleInfo
}

const ArticleInfo = ({ info }: ArticleInfoProps): JSX.Element => (
  <>
    <p className={styles.article__title}>{info.title}</p>
    <p className={styles.article__description}>{info.description}</p>
  </>
);

export default ArticleInfo;
