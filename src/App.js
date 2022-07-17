import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Nav from './components/Nav';
import Profile from './components/Profile';
// import Tehnologies from './Technologies';
function App() {
  return (
    <div className='app-wrapper'>
        <Header/>
        <Nav/>
        <Profile/>
    </div>);
}





export default App;

