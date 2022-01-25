import React from "react";
import classes from './myPosts.module.css';

const MyPosts = () => {
  return <div className={classes.item}>
    my post
    <div>
      new post
    </div>
    <div className={classes.item}>
      post1
    </div>
    <div className={classes.item}>
      post2
    </div>
  </div> 
}

export default MyPosts;