import React from 'react'
import { Stack } from '@mui/material'
import { Link } from 'react-router-dom'
import Logo from '../assets/images/Logo.png'
const Navbar = () => {
  return (


      <div className='navbarcontainer'>
        <Link to='/'>
            <img src={Logo} alt='404 logo' style={{width:'48px', height:'48px', margin:'0 20px'}}/ >
        </Link>
        <Stack direction='row' gap='40px' alignItems='flex-end' fontSize='24px'>
            <Link to='/' style={{textDecoration:'none', color:'black', borderBottom:'2px solid red' }}>Home</Link>
            <a href='/exercises' style={{textDecoration:'none', color:'black' }}>Exercise</a>
        </Stack>

      </div>

  )
}

export default Navbar
