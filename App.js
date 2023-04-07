import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { Route,Routes}  from 'react-router-dom';
import Home from './components/Home';
import Table from './components/Table';
import Confirmation_msg from './components/Confirmation_msg';
import Footer from './components/Footer';


function App() {
  return (
    <>

     <Navbar/>


    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/table" element={<Table/>} />
      <Route path="/table/confirm" element={<Confirmation_msg/>} />
    </Routes>

    
    <Footer/>
    </>
  );



}

export default App;
