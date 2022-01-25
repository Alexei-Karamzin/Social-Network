import React from "react";
import MyPosts from "./myPosts/myPosts";
import classes from './Profile.module';

const Profile = () => {
  return <div className={classes.content}>
  <div>
    <img src="https://images.unsplash.com/photo-1639510705343-10f5ad002319?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=908&q=80"></img>
  </div>
  <div>
    ava + discraption
  </div>
  <MyPosts />
</div>
}

export default Profile;