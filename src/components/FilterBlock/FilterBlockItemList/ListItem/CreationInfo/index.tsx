import React from 'react';
import { ICreationInfo } from '../../../data';
import styles from './styles.module.css';

interface CreationInfoProps {
  creationInfo: ICreationInfo
}

const CreationInfo = ({ creationInfo }: CreationInfoProps): JSX.Element => {
  const { author, authorAvatarUrl, date } = creationInfo;
  return (
    <div className={styles['creation-info']}>
      <img
        className={styles['creation-info__avatar']}
        alt="autor avatar"
        width="30px"
        height="30px"
        src={authorAvatarUrl}
      />
      <p>{author}</p>
      <p>{date}</p>
    </div>
  );
};

export default CreationInfo;
