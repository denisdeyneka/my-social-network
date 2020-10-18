import React from 'react';
import styles from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {
  return (
    <div>
      My posts
      < div >
        <textarea></textarea>
        <button>Add post</button>
      </div >
      <div className={styles.posts}>
        <Post message='Hi, how are you' likeCount='15'/>
        <Post message="it's my first post" likeCount='23'/>
      </div>
    </div >
  )
}

export default MyPosts;