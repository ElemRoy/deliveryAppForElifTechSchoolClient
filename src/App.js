import './App.css';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Header from './components/Header';
import Shop from './screens/Shop';
import Cart from './screens/Cart';
import Orders from './screens/Orders';
import { useEffect, useReducer, useState } from 'react';
import axiosInstance from './config';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />

        <Routes> 
          <Route path="/" element={<Shop />}/> 
          <Route path="/cart" element={<Cart/>}/> 
          <Route path="/orders" element={<Orders/>}/>
        </Routes> 
      </div>
    </BrowserRouter>
  );
}

export default App;