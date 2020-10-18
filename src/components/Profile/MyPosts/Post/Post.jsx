import React from 'react';
import styles from './Post.module.css';

const Post = (props) => {
  return (
    <div className={styles.item}>

      <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRNplTWk2suGea3AcNZ-nzKJVrLX9mL0SGOmA&usqp=CAU' alt='' />
      {console.log(props)}
      <div>
      <span>Like {props.likeCount}</span>
      </div>

    </div>
  );
};

export default Post;
