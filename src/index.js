import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {addPost} from './redux/state';
import { addMessage } from './redux/state';
import {rerenderEntireTree} from './render';
import state from './redux/state';



rerenderEntireTree(state);





// const root = ReactDOM.createRoot(document.getElementById('root'));
// let rerenderEntireTree = () => {
//   root.render(
//     <React.StrictMode>
//       <App state={state} addPost={addPost} addMessage={addMessage} />
//     </React.StrictMode>
//   );  
//   reportWebVitals();
// }