import React from "react";
import s from './MyPost.module.css'
import Post from './Post/Post';

const MyPost = (props) => {

        let postData = [
            {message: 'отдыхать бы', count: '15'},
            {message: 'I Love Coding', count: '213'}
        ]

    return (
        <div className={s.postsBlock}>
            My POST
            <div>
                <div>
                    <textarea cols="30" rows="5"></textarea>
                </div>
                <div>
                    <button> Add post</button>
                </div>
            </div>
            <div className={s.posts}>{props.name}
                <Post message={postData[0].message} count={postData[0].count} />
                <Post message={postData[1].message} count={postData[1].count} />
                
            </div>
        </div>
    )
}

export default MyPost;