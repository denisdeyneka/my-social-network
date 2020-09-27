import React from 'react';
import styles from './Profile.module.css';

const Profile = () => {
  return (
    <div className={styles.content}>
      <div>
        <img src='https://www.gettyimages.pt/gi-resources/images/Homepage/Hero/PT/PT_hero_42_153645159.jpg' alt='' />
      </div>
      <div>
        ava+descr
      </div>
      <div>
        My posts
        <div>
          New post
        </div>
        <div className={styles.posts}>
          <div className={styles.item}>
            post 1
          </div>
          <div className={styles.item}>
            post 2
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;