import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const Nav = () => {

  return (
    <motion.nav
      initial = {{ y:-50 }}
      animate = {{ y:0 }}
      transition = {{ duration:1,type:"tween" }}
    >
      <Link to="/">Products</Link>
      <Link to="/manage-products">Admin</Link>
    </motion.nav>
  )
}

export default Nav
