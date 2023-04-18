import React from 'react'
import {ProductElement, Button} from '../components/styled/StyledComponents';
import { motion } from 'framer-motion'

const Product = (product) => {
  return (
    <ProductElement>
      <motion.div
        transition={{
          duration:2,
          type:"spring",
          stiffness: 200
        }}
        whileHover={{ scale:1.1 }}
      >
      <img src={product.image} alt="BILD" />
      </motion.div>
      <h3>{product.title}</h3>
      <i>{product.category}</i>
      <div className='info'>
        <h4>${product.price}</h4>
        <p>In stock</p>
        <input name="quantity" placeholder='1' value={product.quantity} type="text" onChange={handleChange} />
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