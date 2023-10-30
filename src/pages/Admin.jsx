import React from 'react'
import {useNavigate} from "react-router-dom"

export default function Admin() {
    const navigate = useNavigate()
  return (
    <div>
      <input type="text" value={name} placeholder='Login...' />
      <button onClick={navigate('./components/AddProduct.jsx')}>Submit</button>
    </div>
  )
}
