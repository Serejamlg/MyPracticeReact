import React from "react";
import s from './MyPost.module.css'
import Post from './Post/Post';

const MyPost = (props) => {
        
        let postsElement =props.postData.map(userPost => 
            <Post message={userPost.message} count={userPost.count} />);

            let newPostElement = React.createRef();

            let addPost = () => {
                let text = newPostElement.current.value;
                props.addPost(text)
            }

    return (
        <div className={s.postsBlock}>
            My POST
            <div>
                <div>
                    <textarea ref={newPostElement} cols="30" rows="5"></textarea>
                </div>
                <div>
                    <button onClick={addPost}> Add post</button>
                </div>
            </div>
            <div className={s.posts}>{props.name}
                {postsElement}  
            </div> 
        </div>
    )
}

export default MyPost;