import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AppProvider } from './components/context.';
import './index.css';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import DogList from './components/DogList/DogList';
import DogListDetails from './components/DogListDetails/DogListDetails';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <AppProvider>
   <BrowserRouter>
    <Routes>
      <Route path = "/" element = {<Home />}>
      <Route path = "about" element = {<About />} />
      <Route path = "dogs" element = {<DogList />} />
      <Route path = "/dogs/:chipNumber" element = {<DogListDetails />} />
    </Route>
  </Routes>
  </BrowserRouter>
</AppProvider>

);


