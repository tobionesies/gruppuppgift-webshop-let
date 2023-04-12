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
  
  let valör = "kr"

useEffect(() => {
  Fetchproduct()
  
},[])



  return (
<div className='item-container'>

<div className='descryption'>
<h1>{item.title}</h1>
<p>{item.price} {valör}</p>
<input type="text" value={item.stock}></input>

</div>
<img src={item.image}></img>
<button>Add to cart</button>
    </div>
   
  )
}

export default Productfunction
