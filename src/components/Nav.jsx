import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FaShoppingCart } from "react-icons/Fa";
import { useState } from 'react';


const Nav = ({cartToggle, setCartToggle}) => {

 [cartToggle, setCartToggle] = useState(false);


console.log(cartToggle)

  return (
    <motion.nav

     initial={{
     y:-50
     }}

     animate={{
       y:0,
       }}
   
      transition={{
     duration:1,
     type:"tween"

      }}

>
      <Link to="/">Products</Link>
      <Link to="/manage-products">Admin</Link>
      <h2 className='cart-icon' onClick={() => {cartToggle == false ? setCartToggle(true) : setCartToggle(false)}}><FaShoppingCart/> (0 {cartToggle == true ? "true" : "false"})</h2> 
    </motion.nav>
  )
}

export default Nav
