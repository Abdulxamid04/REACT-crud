import React from 'react'
import { Link } from 'react-router-dom'
import AddProduct from '../components/AddProduct'


export default function Home() {
  return (
    <div>
      <Link to="./AddProduct" element={<AddProduct/>}></Link>
    </div>
  )
}
