import React from 'react';
import styles from './styles.module.css';

interface ReadMoreLinkProps {
  link: string;
}
const ReadMoreLink: React.FC<ReadMoreLinkProps> = (props) => {
  const { link } = props;
  return (
    <a className={styles['list-item__read-more']} href={link}>
      Read more...
    </a>
  );
};

export default ReadMoreLink;
