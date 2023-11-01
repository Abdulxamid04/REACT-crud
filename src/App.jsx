
import { useEffect, useState } from 'react'
import './App.css'
import AddProduct from './components/AddProduct'
import { uid } from 'uid';
import Products from './components/Products';
import Home from './pages/Home';
import { Route, Routes } from 'react-router-dom';
import Header from './pages/Header';

const getLocalStorage = () => {
  return localStorage.getItem('products') ? JSON.parse(localStorage.getItem('products')) : [];
}

function App() {

  const id = uid();
  const img = 'https://picsum.photos/id/1/200/300';

  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');
  const [list, setList] = useState(getLocalStorage());
 

  const handleSubmit = (e) => {
    e.preventDefault();
    const newItem = { id: id, name: title, narx: price, image: img };
    setList([...list, newItem]);
    setTitle('')
    setPrice('')
  }

  const removeItem = (id) => {
    const newItem = list.filter((item) => item.id !== id)
    setList(newItem);
  }

  useEffect(() => {
    localStorage.setItem('products', JSON.stringify(list));
  }, [list]);

  const handleLogin = (e) => {
    e.preventDefault()
    const newItem = {name: name}
    setUser(newItem)
  }
  return (
    <>
    <Header/>
    <Routes>
      <Route path="/" element={<Home />} /> 
      <Route path="/product" element={<Products list={list} />} /> 
      <Route path="/AddProduct" element={<AddProduct
       title={title}
       setTitle={setTitle}
       price={price}
       setPrice={setPrice}
       handleSubmit={handleSubmit}/>}></Route>
    </Routes>
    <Products list={list} removeItem={removeItem} /> 
      
     </>
  )
}

export default App
