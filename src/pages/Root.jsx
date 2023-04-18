import React, {useState} from 'react'
import Footer from '../components/Footer'
import { Outlet } from 'react-router-dom'
import Header from '../components/Header'
import Cart from '../components/Cart'
import { GlobalStyle, StyledSection } from '../components/styled/GlobalStyle'



const Root = () => {
  const [cartToggle, setCartToggle]   = useState(false);
  const [cartContent, setCartContent] = useState([])

  const addToCart = (product) => {
    console.log(product)
    // setCartContent([
    //   ...cartContent,
    //   product
    // ])
    //   console.log(cartContent)
  }

  return (
    <div>
      <GlobalStyle/>
        <Header cartToggle={cartToggle} setCartToggle={setCartToggle} />
         <Cart 
            cartToggle={cartToggle} 
            setCartToggle={setCartToggle} 
            cartContent={cartContent}
            setCartContent={setCartContent}
          />
        <StyledSection>
            {/* <Outlet cartToggle={cartToggle} setCartToggle={setCartToggle}/> */}
            <Outlet addToCart={addToCart}/>
        </StyledSection>
        <Footer />
    </div>  
  )
}

export default Root