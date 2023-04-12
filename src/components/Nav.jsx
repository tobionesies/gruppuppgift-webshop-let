import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <nav>
      <Link to="/">Products</Link>
      <Link to="/manage-products">Admin</Link>
    </nav>
  )
}

export default Nav