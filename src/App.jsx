
import { useEffect, useState } from 'react'
import './App.css'
import AddProduct from './components/AddProduct'
import { uid } from 'uid';
import Products from './components/Products';
import Home from './pages/Home';
import { Route, Routes } from 'react-router-dom';
import Header from './pages/Header';
import { useGlobalContext } from './contex';

const getLocalStorage = () => {
  return localStorage.getItem('products') ? JSON.parse(localStorage.getItem('products')) : [];
}

function App() {

  const {title, setTitle, price, setPrice, list, setList, handleLogin, handleSubmit} = useGlobalContext()



  
  return (
    <>
    <Header/>
    <Routes>
      <Route path="/" element={<Home />} /> 
      <Route path="/product" element={<Products list={list} />} />
      <Route path='/AddProduct' element={<AddProduct /> } /> 
    </Routes>
    <Products list={list}  /> 
      
     </>
  )
}

export default App
