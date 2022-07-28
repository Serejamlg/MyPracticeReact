import React from "react";
import s from './Post.module.css'

const Post = (props) => {
    return (
        <div className={s.postItem} >
            <img src="https://img1.goodfon.ru/original/1024x1024/f/20/avatar-avatar-neytiri.jpg" className="posts__item__img" alt="Avatar"></img>
            {props.message}
            {props.hello}
            <div>
                <span>Like</span>  {props.count}
            </div>
        </div>
    )
}

export default Post;