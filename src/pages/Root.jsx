import React from 'react'
import Navigation from '../components/Nav'
import { Outlet } from 'react-router-dom'

const Root = () => {
  return (
    <div>
        <Navigation />
    
        <section>
            <Outlet />
        </section>
    </div>  
  )
}

export default Root