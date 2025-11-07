import React from 'react';
import './App.css';
import HeaderBar from './component/HeaderBar';
import IntroBlock from './component/IntroBlock';
import EntryList from './component/EntryList';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainPage from './page/MainPage';
import AboutPage from './page/AboutPage';
import ProjectsPage from './page/ProjectsPage';
import PhotosPage from './page/PhotosPage';

function App() {
  return (
    <Router>
      <div className="App">
        <HeaderBar/>
        <main className="App-body">
          <Routes>
            <Route path="/" element={<MainPage/>} />
            <Route path="/about" element={<AboutPage/>} />
            <Route path="/projects" element={<ProjectsPage/>} />
            <Route path="/photos" element={<PhotosPage/>} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
