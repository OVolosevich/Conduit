import React from 'react';
import styles from './styles.module.css';

interface ReadMoreLinkProps {
  link: string
}
const ReadMoreLink: React.FC<ReadMoreLinkProps> = (props) => (
  <a className={styles['list-item__read-more']} href={props.link}>Read more...</a>
);

export default ReadMoreLink;
