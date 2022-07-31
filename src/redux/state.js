import {rerenderEntireTree} from './render';
let state = {

    profilePage: {
        posts: [
            {id:1, message: 'отдыхать бы', count: '15' },
            {id:2, message: 'I Love Coding', count: '213' }
        ],
    },

    messagePage: {
        messagesData: [
            { message: 'Hello', id: 1 },
            { message: 'МЯУ МЯУ', id: 2 },
            { message: 'Как дела?', id: 3 }
        ],
        dialogsData: [
            { name: 'Veronoka', id: 1 },
            { name: 'Dendi', id: 2 },
            { name: 'Sereja', id: 3 }
        ],
    }
};
export let addPost = (postMessage) => {
    let newPost = {
        id: 5,
        message: postMessage,
        count: 0
    };
    state.profilePage.posts.push(newPost);
    rerenderEntireTree(state);
};
export let addMessage = (newPostMessage) => {

    let newMessage = {
        id:9, 
        message: newPostMessage
    };
    state.messagePage.messagesData.push(newMessage);
    rerenderEntireTree(state);
}
export default state;