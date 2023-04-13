import React from 'react'
import "../pages/Products"

export const getCart = () => {
  const [cart, setCart] = useState([]);
  const handleClick = (item) => {
    console.log(item)
  }
}

const Cart = () => {
  return (
    <div>
      {/* {list.map((item => (<Cards key = {item.id} item = {item} handleClick={handleClick}/>)))} */}
      {/* <div>Cart</div>
      <div>Cart</div> */}
    </div>
  )
}

export default Cart



/**
    <div>
      <div>Cart</div>
      <div>Amount</div>
    </div>

    Add to cart
    |
    +1 Produkt to Cart  
    |
    [cart, setCart] = useState(id)
    |
    useEffect()
    |
    









 */