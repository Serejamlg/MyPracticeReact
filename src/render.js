import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {addPost} from './redux/state';
import { addMessage } from './redux/state';
// import state from './redux/state';
import state from './redux/state';

export let rerenderEntireTree = (state) => {
  
const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(
    <React.StrictMode>
      <App state={state} addPost={addPost} addMessage={addMessage} />
    </React.StrictMode>
  );  
  reportWebVitals();
}

// export let rerenderEntireTree = () => {
//     ReactDOM.render (
//         <BrowserRouter>
//             <App state={state} addPost={addPost} addMessage={addMessage} />    
//         </BrowserRouter>, document.getElementById('root')
//     );
// }
