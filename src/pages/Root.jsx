import React, {useState} from 'react'
import Footer from '../components/Footer'
import { Outlet } from 'react-router-dom'
import Header from '../components/Header'
import Cart from '../components/Cart'
import { GlobalStyle, StyledSection } from '../components/styled/GlobalStyle'

const Root = () => {
  const [cartToggle, setCartToggle]   = useState(false);
  const [cartContent, setCartContent] = useState([])
  const [products, setProducts]       = useState()
  const [quantity, setQuantity]       = useState(1)


//   const addToCart = (product) => {

//     const duplicate = cartContent.find(item => item.id === product.id);
//     if (duplicate) {
//       const updatedItem = {
//         ...duplicate, 
//         quantity: duplicate.quantity + product.quantity, 
//         price: duplicate.price + product.price
//       }
//       console.log("undefined? "+duplicate.quantity)
//       const theUpdatedCart = cartContent.map(item => item.id === duplicate.id ? updatedItem : item)
//       setCartContent(theUpdatedCart)
//     } else {
//       setCartContent([
//         ...cartContent,
//         product
//       ])
//     }
// }

  return (
    <div>
      <GlobalStyle/>
        <Header 
          cartToggle={cartToggle} 
          setCartToggle={setCartToggle} 
          cartContent={cartContent}
          setCartContent={setCartContent}
         />
        <StyledSection>
            <Outlet 
              context={[
                cartContent, setCartContent,
                products, setProducts,
                quantity, setQuantity
              ]}

              // addToCart={addToCart}
            />
            {/* <Outlet /> */}
        </StyledSection>
        <Footer />
    </div>  
  )
}

export default Root