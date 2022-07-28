import React from "react";
import s from './ProfileInfo.module.css'

const ProfileInfo = (props) => {
    return(
        <div >
            <div >
                <img className={s.headLogo} src='https://www.susesihotel.com/images/slider/susesi-hotel-multimedya-936.jpg' alt='logo'></img>
            </div>
            <div className={s.profileBlock} >
                <img className={s.avatar} src='https://miro.medium.com/max/1200/1*LwNjUGU8Ao4OGfHjyiHfHQ.png' alt='logo'></img>
                ava + description
            </div>
        </div>
    )
}


export default ProfileInfo;