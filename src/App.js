import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import {
  Home,
  TwoBd,
  OneBd,
  Whoops404,
  FrontUnitPhotos, 
  BackUnitPhotos
} from './pages';
import {
  Link
} from "react-router-dom";

export function Header() {
  return (
  <div className="App-header">
  <h4>Colmena</h4>
  </div>
  );
}


function App() {
  return (
    <>
    <Header/>
      <Routes>
        <Route path="/colmenapm" element={<Home />} />
        <Route path="/twobd" element={<TwoBd />} />
        <Route path="/frontphotos" element={<FrontUnitPhotos />}/>
        <Route path="/backphotos" element={<BackUnitPhotos />}/>
        <Route path="/onebd" element={<OneBd />} />
        <Route path="/*" element={<Whoops404 />} />
      </Routes>
    </>
  );
}

export default App;
