import React, { useState } from 'react'
import {ProductElement, Button} from '../components/styled/StyledComponents';
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const Product = (product, quantity, setQuantity, addToCart) => {

  [quantity, setQuantity] = useState(1)

const handleChange = (e) => {
    e.preventDefault();
    setQuantity(e.target.value)

    if (e.target.value == "") {
      setQuantity(1)
    }
  }

  return (
    <ProductElement  >
      {/* {console.log(product.product.quantity)} */}
      <motion.div
        transition={{
          duration:2,
          type:"spring",
          stiffness: 200
        }}
        whileHover={{ scale:1.1 }}
      >
      <img src={product.product.image} alt="BILD" />
      </motion.div>
      <h3>{product.product.title}</h3>
      <i>{product.product.category}</i>
      <div className='info'>
        <h4>${product.product.price}</h4>
        <p>In stock</p>
        <input name="quantity" placeholder='1' value={product.product.quantity} type="text" onChange={handleChange} />
        <Link to={"/"+ product['_id']}>Description</Link>
        <Button onClick={(e) => { addToCart({
            id: product._id,
            title: product.title,
            image: product.image,
            price: product.price,
            quantity: quantity,
            })
          }}>Add to cart</Button>
    
      </div>
      {/* ^ Ska ersättas med routing Link */}
    </ProductElement>
  )
  
}

export default Product