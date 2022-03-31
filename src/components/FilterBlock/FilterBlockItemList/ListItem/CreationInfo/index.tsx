import React from 'react';
import styles from './styles.module.css';

interface AuthorInfo {
  username: string
  bio: unknown,
  image: string,
  following: boolean
}

interface CreationInfoProps {
  creationDate: string
  authorInfo: AuthorInfo
}

const CreationInfo: React.FC<CreationInfoProps> = (props) => {
  const { authorInfo, creationDate } = props;
  return (
    <div className={styles['creation-info']}>
      <img
        className={styles['creation-info__avatar']}
        alt="autor avatar"
        width="30px"
        height="30px"
        src={authorInfo.image}
      />
      <p>{authorInfo.username}</p>
      <p>{creationDate}</p>
    </div>
  );
};

export default CreationInfo;
