import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const Nav = () => {

  return (
    <div>
    <motion.nav
      initial = {{ y:-50 }}
      animate = {{ y:0 }}
      transition = {{ duration:1,type:"tween" }}
    >
      <h1 id="page-title">Solesoul.com</h1>
      <Link to="/">Products</Link>
      <Link to="/manage-products">Admin</Link>
    </motion.nav>
    </div>
  )
}

export default Nav
