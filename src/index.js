import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Publicar from './pages/Publicar/index.js'
import Consultar from './pages/Consultar/index.js'
import { BrowserRouter, Routes, Route } from 'react-router-dom'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App/>}/>
        <Route path='/Publicar' element={<Publicar/>}/>
        <Route path='/Consultar' element={<Consultar />}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);


