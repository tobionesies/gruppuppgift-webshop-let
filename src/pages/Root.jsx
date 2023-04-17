import React, {useState} from 'react'
import Footer from '../components/Footer'
import { Outlet } from 'react-router-dom'
import Header from '../components/Header'
import Cart from '../components/Cart'
import { GlobalStyle, StyledSection } from '../components/styled/GlobalStyle'



const Root = () => {
  

  const [cartToggle, setCartToggle] = useState(false);


  return (
    <div>
      <GlobalStyle/>
        <Header cartToggle={cartToggle} setCartToggle={setCartToggle}/>
        <Cart />
        <StyledSection>
            <Outlet cartToggle={cartToggle} setCartToggle={setCartToggle}/>
        </StyledSection>
        <Footer />
    </div>  
  )
}

export default Root