import React , { useState, useEffect } from 'react'
import { useParams, useOutletContext } from 'react-router-dom';
import { StyledProduct } from '../components/styled/StyledProduct';



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
      console.log("undefined? "+duplicate.quantity)
      const theUpdatedCart = cartContent.map(item => item.id === duplicate.id ? updatedItem : item)
      setCartContent(theUpdatedCart)
    } else {
      setCartContent([
        ...cartContent,
        product
      ])
    }
    console.log(product)
    // console.log(products)

}


  const fetchProducts = async () => {
    try {
      const response = await fetch ('https://product-api-production-5f7f.up.railway.app/products/' + params.id);
      const data     = await response.json();
      setItem(data)
      console.log(data)

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
    <StyledProduct>
      <img src={item.image} id='product-image'></img>
      <div id='description'>
        <h1>{item.title}</h1>
        <p><b>{price}</b> {valör}{item.price}</p>
        <input type="text"></input>
        <p>
          <b>{beskrivning}</b>
          <br/>
          {item.description}
        </p>
        <p>
          <b>{lager}</b>
          {item.stock}
        </p>
        <p>
          <b>{cat}</b>
          <br/>
          {item.category}
        </p>
        <button onClick={() => { addToCart({
          id: item._id,
          title: item.title,
          image: item.image,
          price: item.price,
          quantity: quantity,
        })}}>Add to Cart</button>
      </div>
    </StyledProduct>
   
  )
}

export default Productfunction

