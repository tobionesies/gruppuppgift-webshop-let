import React, { useState } from 'react'
import "../pages/Products"

// export const getCart = () => {
//   // const [cart, setCart] = useState([]);

//   // const handleClick = (item) => {
//   //   console.log(item)
//   // }
// }

const Cart = (cartToggle, setCartToggle, cartContent, setCartContent) => {
  [cartToggle, setCartToggle]   = useState();
  [cartContent, setCartContent] = useState([])

  const cartTable = () => {
    return cartToggle != true
      ? <div></div>
      : <div>
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
  }

  const total = cartContent.reduce((result, currentProduct) => {
    return result += currentProduct.price * currentProduct.quantity;
  }, 0)

  return (
    <>
      {cartTable}
    </>
  )
}

export default Cart

