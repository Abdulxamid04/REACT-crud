import React from 'react'
import { Link, Route, Routes } from 'react-router-dom';
export default function Header() {
  return (
    <div>
        <div>
            <Link to="/">Home</Link>
            <Link to="./Products.jsx">Products</Link>
            <Link to='/Admin.jsx'>Admin</Link>
            <Link to="./main.jsx">main</Link>
        </div>
    </div>
  )
}
