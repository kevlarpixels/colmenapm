import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import {
  Home,
  PropertiesList,
  PropertyDetails,
  Whoops404,
  English,
  Spanish
} from './pages';
import {
  Link
} from "react-router-dom";

export function Header() {
  return (
  <div className="App-header">
  <Link to="/"><h4>Colmena</h4></Link>
  </div>
  );
}


function App() {
  return (
    <>
    <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/english" element={<English />} />
        <Route path="/spanish" element={<Spanish />} />
        <Route path="/propertiesList" element={<PropertiesList />} />
        <Route path="propertyDetails" element={<PropertyDetails />} />
        <Route path="/*" element={<Whoops404 />} />
      </Routes>
    </>
  );
}

export default App;
