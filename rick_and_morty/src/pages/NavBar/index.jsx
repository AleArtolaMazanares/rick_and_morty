import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import './style.css'

function NavBar() {
  return (
    <div>
        <div className='containerNavBar'>
            <h1>Rick And Morty</h1>
            <Link to={'/'}>Home</Link>
            <Link to={'/search'}>Search</Link>
        </div>
        <Outlet/>
    </div>
  )
}

export default NavBar