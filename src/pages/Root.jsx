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
            />
        </StyledSection>
        <Footer />
    </div>  
  )
}

export default Root