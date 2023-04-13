import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { Route,Routes}  from 'react-router-dom';
import Home from './components/Home';
import Check from './components/Check.js';
import BookingPage from './components/BookingPage';
import Confirmation_msg from './components/Confirmation_msg';
import Footer from './components/Footer';


function App() {
  return (
    <>

     <Navbar/>


    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/booking_table" element={<BookingPage/>} />
      <Route path="/table/confirm" element={<Confirmation_msg/>} />
      <Route path="/check" element={<Check/>} />
    </Routes>

    
    <Footer/>
    </>
  );



}

export default App;
