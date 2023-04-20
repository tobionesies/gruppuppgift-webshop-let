import React , { useState, useEffect } from 'react'
import { useParams, useOutletContext } from 'react-router-dom';
import { StyledProduct } from '../components/styled/StyledProduct';
import { StyledLoading } from '../components/styled/StyledComponents';
import { motion } from 'framer-motion'



const Productfunction = () => {

  const [cartContent, setCartContent]  = useOutletContext();
  const [products, setProducts]        = useOutletContext();
  const [quantity, setQuantity]        = useOutletContext()
  const [item, setItem]                = useState([])
  const params                         = useParams();
  

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


  const fetchProducts = async () => {
    try {
      const response = await fetch ('https://product-api-production-5f7f.up.railway.app/products/' + params.id);
      const data     = await response.json();
      setItem(data)

    } catch (error) {
      console.log(error)
    }
  }
  
  const valör = "$"
  const price = "Price: "
  const lager = "In stock: "
  // const pack = "pc."
  const beskrivning = "Description: "
  const cat = "Categories: "

  useEffect(() => {
    fetchProducts()
  },[])

  return (
    item==0
    ? <StyledLoading className='loading'></StyledLoading>
    :<motion.div
      animate={{ y: 0, opacity: [0, 0, 0.5, 0.75, 1] }}
      initial={{ y: -85, opacity: [0, 0, 0.5, 0.75, 1] }}
      transition={{ 
        duration: 1,
        type: 'tween'
      }}
    >
      <StyledProduct>
        <img src={item.image} id='product-image'></img>
        <div id='description'>
          <h1>{item.title}</h1>
          <p><b>{price}</b> {valör}{item.price}</p>
          <p>
            <b>{beskrivning}</b>
            
            {item.description}
          </p>
          <p>
            <b>{lager}</b>
            {item.stock}
          </p>
          <p>
            <b>{cat}</b>
            
            {item.category}
          </p>
          <button onClick={() => { addToCart({
            id: item._id,
            title: item.title,
            image: item.image,
            price: item.price,
            quantity: 1,
          })}}>Add to Cart</button>
        </div>
      </StyledProduct>
    </motion.div>
   
  )
}

export default Productfunction

