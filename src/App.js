import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import {
  Home,
  PropertiesList,
  PropertiesListEsp,
  PropertyDetails,
  Whoops404
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
        <Route path="/propertiesList" element={<PropertiesList />} />
        <Route path="/propertiesListEsp" element={<PropertiesListEsp />} />
        <Route path="propertyDetails" element={<PropertyDetails />} />
        <Route path="/*" element={<Whoops404 />} />
      </Routes>
    </>
  );
}

export default App;
