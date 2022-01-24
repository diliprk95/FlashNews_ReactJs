import './App.css';
import Navbar from './Component/NavBar';
import News from './Component/News';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from './Component/About';
import React, { useState } from 'react';
import LoadingBar from 'react-top-loading-bar'

const App =() => {
  const pageSize = 8;
  const apiKey = process.env.REACT_APP_NEWS_API;


  const [progress, setProgress] = useState(0);

  return (
  <Router>
    <div className="App">
      <Navbar title="Flash News"/>
      <LoadingBar
        color='#f11946'
        height = {3}
        progress={progress}
      />
      <Routes>
            <Route exact path='/' element={<News setProgress = {setProgress} apiKey={apiKey} key="general" pageSize={pageSize} country="in" category="general"/>}/>
            <Route exact path='business' element={<News setProgress = {setProgress} apiKey={apiKey} key="business" pageSize={pageSize} country="in" category="business"/>}/>
            <Route exact path='entertainment' element={<News setProgress = {setProgress} apiKey={apiKey} key="entertainment" pageSize={pageSize} country="in" category="entertainment"/>}/>
            <Route exact path='health' element={<News setProgress = {setProgress} apiKey={apiKey} key="health" pageSize={pageSize} country="in" category="health"/>}/>
            <Route exact path='science' element={<News setProgress = {setProgress} apiKey={apiKey} key="science" pageSize={pageSize} country="in" category="science"/>}/>
            <Route exact path='sports' element={<News setProgress = {setProgress} apiKey={apiKey} key="sports" pageSize={pageSize} country="in" category="sports"/>}/>
            <Route exact path='technology' element={<News setProgress = {setProgress} apiKey={apiKey} key="technology" pageSize={pageSize} country="in" category="technology"/>}/>
            <Route exact path='about' element={<About key="about" pageSize={pageSize} country="in" category="about"/>}/>
      </Routes>
    </div>  
    </Router>
  );
}

export default App;