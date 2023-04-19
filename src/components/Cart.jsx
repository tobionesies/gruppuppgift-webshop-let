import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import "../pages/Products"
import { FaShoppingCart } from "react-icons/Fa";

const Cart = ({cartToggle, setCartToggle, cartContent, setCartContent}) => {
  [cartToggle, setCartToggle]   = useState();

  const handleChange = (e) => {
    e.preventDefault();
    setCartToggle(!cartToggle)
    console.log(cartToggle)
  }

  const total = cartContent.reduce((result, currentProduct) => {
    return result += currentProduct.price;
  }, 0)


const removeFromCart = (id) => {
  setCartContent(cartContent.filter(item => id != item.id));
}

console.log(cartContent)


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
                  <th>Action</th>
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
                    <td>
                      <button onClick={() => { removeFromCart(item.id)}}>X</button>
                    </td>
                  </tr>)
              }
              </tbody>
              <tfoot>
                <tr>
                  <td>Total: ${total}</td>
                </tr>
                <tr>
                  <td>
                    <button onClick={() => setCartContent([])}>Clear cart</button>
                    </td>
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


