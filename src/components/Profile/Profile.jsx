import React from 'react';
import styles from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';

const Profile = () => {
  return (
    <div className={styles.content}>
      <div>
        <img src='https://www.gettyimages.pt/gi-resources/images/Homepage/Hero/PT/PT_hero_42_153645159.jpg' alt='' />
      </div>
      <div>
        ava+description
      </div>
      <MyPosts />
    </div>
  );
}

export default Profile;