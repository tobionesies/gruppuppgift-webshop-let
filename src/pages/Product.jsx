import React , { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';


const Productfunction = () => {

    const [item, setitem] = useState([])
    const params = useParams();
    
    const Fetchproduct = async () => {
      try {
        const response = await fetch ('https://product-api-production-5f7f.up.railway.app/products/' + params.id)
        const data = await response.json()
        setitem(data)
      
    
      } catch (error) {
        return "an error has occured"
      }
    }
  
  const valör = "kr"
  const price = "pris:"
  const lager = "stock:"
  const pack = "pc."
  const besk = "descryption:"
  const cat = "categories:"

useEffect(() => {
  Fetchproduct()
  
},[])



  return (
<div className='item-container'>

<div className='descryption'>
<h1>{item.title}</h1>
<p><b>{price}</b> {item.price} {valör}</p>
<input type="text" className='input'></input>
<button className='cart'>Add to Cart</button>
<p><b>{lager}</b> {item.stock} {pack}</p>
<p><b>{besk}</b><br/>{item.description}</p>
<p><b>{cat}</b> <br/>{item.category}</p>
</div>
<img src={item.image} className='product-image'></img>
    </div>
   
  )
}

export default Productfunction