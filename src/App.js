import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import './App.css';
import HeadlineCards from './components/HeadlineCards';

function App() {
  return <>
   
    <div className="App ml-10 mr-10 mb-10 mr">
    <Navbar/>
    <Hero/>
    <HeadlineCards/>
    </div>
    </>
}

export default App;
