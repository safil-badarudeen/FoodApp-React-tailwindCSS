import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Foods from './components/Foods'
import './App.css';
import HeadlineCards from './components/HeadlineCards';
import Catogery from './components/Catogery';

function App() {
  return <>
   
    <div className="App ml-10 mr-10 mb-10 mr">
    <Navbar/>
    <Hero/>
    <HeadlineCards/>
    <Foods/>
    <Catogery/>
    </div>
    </>
}

export default App;
