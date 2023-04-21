import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import "../pages/Products"
import { FaShoppingCart } from "react-icons/Fa";


const Cart = ({cartToggle, setCartToggle, cartContent, setCartContent}) => {
  [cartToggle, setCartToggle]   = useState();

  const handleChange = (e) => {
    e.preventDefault();
    setCartToggle(!cartToggle)
  }

  const total = cartContent.reduce((result, currentProduct) => {
    return result += currentProduct.price;
  }, 0)

  const totalQuantity = cartContent.reduce((result, currentProduct) => {
    return result += currentProduct.quantity;
  }, 0)


const removeFromCart = (id) => {
  setCartContent(cartContent.filter(item => id != item.id));
}



  return (
    <>
      {cartToggle != true
      ? <div id="cart-div">
          <h2 id='cart-icon' onClick={handleChange}>
            <FaShoppingCart/>({totalQuantity})
          </h2>
        </div>
      : <>
          <div id="cart-div">
            <h2 id='cart-icon' onClick={handleChange}>
            <FaShoppingCart/>
            ({totalQuantity})
            </h2>
          </div>
          <div onClick={handleChange} id="cartTable-div">
              <table id='cartTable'>
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
                      <td id="img-td"><img src={item.image} alt="" className='cartImage'/></td>
                      <td>{item.title}</td>
                      <td>x{item.quantity}</td>
                      <td>${item.price}</td>
                      <td>
                        <button onClick={() => { removeFromCart(item.id)}} id="x">X</button>
                      </td>
                    </tr>)
                }
                </tbody>
                <tfoot id="table-footer">
                  <tr>
                    <td id="total" colSpan={5}>Total: ${total}</td>
                  </tr>
                  <tr>
                    <td colSpan={5}id="buttons-td" >
                    <button onClick={() => setCartContent([])} id="clear-btn">Clear cart</button>
                    <Link to="/Checkout"><button id="checkout-btn">Checkout</button></Link>
                    </td>
                  </tr>
                
                </tfoot>
              </table>
          </div>
        </>}
    </>
  )
}

export default Cart


