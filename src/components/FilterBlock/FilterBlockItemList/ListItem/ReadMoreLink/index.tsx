import React from 'react';
import styles from './styles.module.css';

interface ReadMoreLinkProps {
  link: string
}
const ReadMoreLink = ({ link }: ReadMoreLinkProps): JSX.Element => <a className={styles['list-item__read-more']} href={link}>Read more...</a>;

export default ReadMoreLink;
