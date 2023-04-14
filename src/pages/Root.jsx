import React from 'react'
import Footer from '../components/Footer'
import { Outlet } from 'react-router-dom'
import Header from '../components/Header'
import Cart from '../components/Cart'
import { GlobalStyle, StyledSection } from '../components/styled/GlobalStyle'



const Root = () => {
  return (
    <div>
      <GlobalStyle/>
        <Header />
        <Cart />
        <StyledSection>
            <Outlet />
        </StyledSection>
        <Footer />
    </div>  
  )
}

export default Root