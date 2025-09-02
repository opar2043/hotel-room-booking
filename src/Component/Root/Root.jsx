import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from '../Footer/Footer'

const Root = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className='w-11/12 mx-auto'>
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  )
}

export default Root