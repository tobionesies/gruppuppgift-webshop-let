import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FaShoppingCart } from "react-icons/Fa";


const Nav = ({cartToggle, setCartToggle, updateCartState}) => {

 [cartToggle, setCartToggle] = useState(false);

// const handleChange = (e) => {
//   e.preventDefault();
//   setCartToggle(!cartToggle)
// }

useEffect(() => {
},[])

  return (
    <motion.nav
      initial = {{ y:-50 }}
      animate = {{ y:0 }}
      transition = {{ duration:1,type:"tween" }}
    >
      <Link to="/">Products</Link>
      <Link to="/manage-products">Admin</Link>
      <h2 className='cart-icon' onClick={(e) => {updateCartState(!cartToggle)}}>
          <FaShoppingCart/>
           (0 {cartToggle == true ? "true" : "false"})
      </h2> 
    </motion.nav>
  )
}

export default Nav
