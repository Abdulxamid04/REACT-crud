import React from 'react'

export default function Header() {
  return (
    <div>
        <div>
            <Link to="/">Home</Link>
            <Link to="./Products.jsx">Products</Link>
            <Link to='./Admin.jsx'>Admin</Link>
        </div>
    </div>
  )
}
