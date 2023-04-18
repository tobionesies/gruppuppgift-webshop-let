import React, { useState } from 'react'
import "../pages/Products"
import { FaShoppingCart } from "react-icons/Fa";

const Cart = ({cartToggle, setCartToggle, cartContent, setCartContent}) => {
  [cartToggle, setCartToggle]   = useState();
  [cartContent, setCartContent] = useState([])

  const handleChange = (e) => {
    e.preventDefault();
    setCartToggle(!cartToggle)
    console.log(cartToggle)
  }
  const cartTable = () => {}

  const total = cartContent.reduce((result, currentProduct) => {
    return result += currentProduct.price * currentProduct.quantity;
  }, 0)

  return (
    <>
      {cartToggle != true
      ? <h2 className='cart-icon' onClick={handleChange}>
          <FaShoppingCart/>
          (0 {cartToggle == true ? "true" : "false"})
        </h2> 
      :   <>
            <h2 className='cart-icon' onClick={handleChange}>
              <FaShoppingCart/>
              (0 {cartToggle == true ? "true" : "false"})
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
                cartContent.map(item =>
                  <tr key={item.id}>
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
              </tfoot>
            </table>
        </div>
      </>}
    </>
  )
}

export default Cart

