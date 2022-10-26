import React from 'react';
import {Routes, Route} from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import Login from './components/Login';
import SignUp from './components/SignUp';
import HomePage from './components/Homepage';
import ProductList from './components/ProductList';
import SelectedProduct from './components/SelectedProduct';
import Cart from './components/Cart';
import MyAccount from './components/MyAccount';
import MyPurchase from './components/MyPurchase'
import { AuthProvider } from "../src/context/Authcontext"

function App() {
  return (
    <AuthProvider>
      <Routes>
          <Route path='/' element={<HomePage/>} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<SignUp/>} />
          <Route path='/productlist' element={<ProductList/>} />
          <Route path='/selectedproduct' element={<SelectedProduct />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/myaccount' element={<MyAccount />} />
          <Route path='/mypurchase' element={<MyPurchase />} />
          
      </Routes>

    </AuthProvider>
  );
}

export default App;
