import React from 'react';
import styles from './styles.module.css';

interface AuthorInfo {
  username: string;
  bio: unknown;
  image: string;
  following: boolean;
}

interface CreationInfoProps {
  creationDate: string;
  authorInfo: AuthorInfo;
}

const CreationInfo: React.FC<CreationInfoProps> = (props) => {
  const { authorInfo, creationDate } = props;
  return (
    <div className={styles['creation-info']}>
      <img
        className={styles['creation-info__avatar']}
        alt="autor avatar"
        width="45px"
        height="45px"
        src={authorInfo.image}
      />
      <p className={styles['creation-info__user-name']}>
        {authorInfo.username}
      </p>
      <p className={styles['creation-info__time']}>
        {new Date(creationDate).toLocaleDateString()}
      </p>
    </div>
  );
};

export default CreationInfo;
