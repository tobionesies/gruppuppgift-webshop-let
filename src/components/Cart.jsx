import React, { useState } from 'react'
import { Link, useOutletContext } from 'react-router-dom'
import "../pages/Products"
import { FaShoppingCart } from "react-icons/Fa";

const Cart = ({cartToggle, setCartToggle, cartContent}) => {
  [cartToggle, setCartToggle]   = useState();

  let nCart= [];

  const handleChange = (e) => {
    e.preventDefault();
    setCartToggle(!cartToggle)
    console.log(cartToggle)
  }

  const total = cartContent.reduce((result, currentProduct) => {
    return result += currentProduct.price * currentProduct.quantity;
  }, 0)

  function checkAvailability(cartContent, id) {
    return cartContent.some((itemID) => id === itemID);
  }

  return (
    <>
      {cartToggle != true
      ? <h2 className='cart-icon' onClick={handleChange}>
          <FaShoppingCart/>
          (total products)
        </h2> 
      :   <>
            <h2 className='cart-icon' onClick={handleChange}>
              <FaShoppingCart/>
              (total products)
            </h2> 
        <div>
            <table className='cartTable'>
              <thead>
                <tr>
                  <th></th>
                  <th>Title</th>
                  <th>Quantity</th>
                  <th>Price</th>
                </tr>
              </thead>
              <tbody>

                {cartContent.map((item) => console.log(cartContent.find(item.id)))}
              {
                cartContent.map((item, key) =>
                  item.id == key
                    ? item.quantity += item.quantity
                    : <tr key={item.id}>
                       <td><img src={item.image} alt="" className='cartImage'/></td>
                       <td>{item.title}</td>
                       <td>{item.quantity}</td>
                       <td>${item.price}</td>
                     </tr>)
              }
              </tbody>
              <tfoot>
                <tr>
                  <td>Total: ${total}</td>
                </tr>
                <tr>
                  <td><Link to="/Checkout">Checkout</Link></td>
                </tr>
              </tfoot>
            </table>
        </div>
      </>}
    </>
  )
}

export default Cart


