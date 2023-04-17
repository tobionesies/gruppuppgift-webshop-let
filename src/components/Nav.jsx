import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FaShoppingCart } from "react-icons/Fa";
import { useState } from 'react';


const Nav = () => {

const [cartClicked, setCartClicked] = useState(false);

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
      <h2 className='cart-icon'onClick={() => {setCartClicked(!cartClicked)}}><FaShoppingCart/> (0 {cartClicked == true ? "true" : "false"})</h2> 
    </motion.nav>
  )
}

export default Nav
