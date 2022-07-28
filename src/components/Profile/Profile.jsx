import React from 'react';
import s from './Profile.module.css';
import MyPost from './MyPosts/MyPost';
import ProfileInfo from './ProfileInfo/ProfileInfo';


const Profile = (prosp) => {
    return (
        <div className={s.profile}>
            <ProfileInfo />
            <MyPost />

        </div>
    )
}



export default Profile;