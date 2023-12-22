import React from 'react';
import Navbar from './Components/navbar';
import { Route, Routes } from 'react-router-dom';
import Hero from './Components/hero';
import Home from './Pages/home';
function App() {
  return (
    <>
      <Navbar />
     
     <Routes>
      <Route path = "/" element = {<Home />} />
     </Routes>
    </>
  );
}

export default App;
