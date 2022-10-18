import React from 'react';
import styles from './styles.module.css';

interface PageTitleProps {
  text: string;
}

const PageTitle: React.FC<PageTitleProps> = (props) => {
  const { text } = props;
  return <h1 className={styles.title}>{text}</h1>;
};

export default PageTitle;
