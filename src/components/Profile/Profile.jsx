import React from 'react';
import s from './Profile.module.css';
import MyPost from './MyPosts/MyPost';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import { addPost } from '../../redux/state';


const Profile = (props) => {

  


    return (
        <div className={s.profile}>
            <ProfileInfo />
            <MyPost postData={props.state.posts} addPost={addPost}/>

        </div>
    )
}



export default Profile;