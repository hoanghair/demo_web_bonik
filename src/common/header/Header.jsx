import React from 'react'
import './Header.scss'
import Head from './Head'
import Navbar from './Navbar'
import Search from './Search'

const Header = ({cartItem}) => {
  return (
    <>
      <Head />
      <Search cartItem={cartItem} />
      <Navbar />
    </>
  )
}

export default Header