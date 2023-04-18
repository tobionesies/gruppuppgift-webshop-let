import React, { useState } from 'react'
import { Link, useOutletContext } from 'react-router-dom'
import "../pages/Products"
import { FaShoppingCart } from "react-icons/Fa";

const Cart = ({cartToggle, setCartToggle, cartContent}) => {
  [cartToggle, setCartToggle]   = useState();

  const handleChange = (e) => {
    e.preventDefault();
    setCartToggle(!cartToggle)
    console.log(cartToggle)
  }

  const total = cartContent.reduce((result, currentProduct) => {
    return result += currentProduct.price;
  }, 0)

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
              {
                cartContent.map((item) =>
                  <tr key={item.id}>
                    <td><img src={item.image} alt="" className='cartImage'/></td>
                    <td>{item.title}</td>
                    <td>x{item.quantity}</td>
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


