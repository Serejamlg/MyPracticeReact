import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import Music from './components/Nav/Music/Music';
import News from './components/Nav/News/News';
import Settings from './components/Nav/Settings/Settings';
import {BrowserRouter, Routes, Route} from "react-router-dom";

const App = (props) => {
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <Nav />
        <div className='app-wrapper-content'>
          <Routes>
        <Route path='/dialogs/*' element={<Dialogs/>}/>
        <Route path='/music' element={<Music/>}/>
        <Route path='/news' element={<News/>}/>
        <Route path='/settings' element={<Settings/>}/>
        <Route path="/profile" element={<Profile/>}/>
        </Routes>
        </div>
      </div>
     </BrowserRouter> )
}





export default App;

