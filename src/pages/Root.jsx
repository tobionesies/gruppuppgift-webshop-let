import React from 'react'
import Footer from '../components/Footer'
import { Outlet } from 'react-router-dom'
import Header from '../components/Header'

const Root = () => {
  return (
    <div>
        <Header />
        <section>
            <Outlet />
        </section>
        <Footer />
    </div>  
  )
}

export default Root