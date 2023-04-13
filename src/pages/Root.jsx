import React from 'react'
import Footer from '../components/Footer'
import { Outlet } from 'react-router-dom'
import Header from '../components/Header'
import Cart from '../components/Cart'



const Root = () => {
  return (
    <div>
        <Header />
        <Cart />
        <section>
            <Outlet />
        </section>
        <Footer />
    </div>  
  )
}

export default Root