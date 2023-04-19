import React , { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { StyledProduct } from '../components/styled/StyledProduct';


const Productfunction = () => {

  const [item, setItem] = useState([])
  const params          = useParams();
  
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
  const besk = "Description: "
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
          <b>{besk}</b>
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
        <button>Add to Cart</button>
      </div>
    </StyledProduct>
   
  )
}

export default Productfunction

