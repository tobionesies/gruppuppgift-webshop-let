import React, { useState } from 'react'
import {ProductElement, Button} from '../components/styled/StyledComponents';
import { motion } from 'framer-motion'
import { Link, useOutletContext } from 'react-router-dom'

const Product = (product) => {
  const [cartContent, setCartContent] = useOutletContext();

  const [quantity, setQuantity] = useState(1)

  const addToCart = (product) => {

        const duplicate = cartContent.find(item => item.id === product.id);
        if (duplicate) {
          const updatedItem = {
            ...duplicate, 
            quantity: duplicate.quantity + product.quantity, 
            price: duplicate.price + product.price
          }
          const theUpdatedCart = cartContent.map(item => item.id === duplicate.id ? updatedItem : item)
          setCartContent(theUpdatedCart)
        } else {
          setCartContent([
            ...cartContent,
            product
          ])
        }
  }
        
  const handleChange = (e) => {
      e.preventDefault();
      setQuantity(e.target.value)

      if (e.target.value == "") {
        setQuantity(1)
      }
    }

  return (
    <motion.div
      transition={{
        duration:2,
        type:"spring",
        stiffness: 200
      }}
      whileHover={{ scale:1.03 }}
    >
      <ProductElement  >
        <img src={product.product.image} alt="BILD" />
        <h3>{product.product.title}</h3>
        <i>{product.product.category}</i>
        <div className='info'>
          <h4>${product.product.price}</h4>
          <p>In stock</p>
          <Link to={"/" + product.product['_id']}>Description</Link>
          <Button onClick={() => { addToCart({
            id: product.product._id,
            title: product.product.title,
            image: product.product.image,
            price: product.product.price,
            quantity: quantity,
          })}}>
              Add to cart
          </Button>
  
        </div>
      </ProductElement>
    </motion.div>
  )
  
}

export default Product