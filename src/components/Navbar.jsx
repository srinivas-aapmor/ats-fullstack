import React from 'react'
import { Box, Typography } from '@mui/material'
import logo from '../assets/aapmor-logo.png'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import '../styles/navbar.css'

export default function Navbar() {
  return (
    <Box className='navbar'>
      <Box className='navbar-logo'>
        <img src={logo} alt="aapmor logo" style={{ height: "60px" }} />
      </Box>
      <Box>
        <Box className='navbar-content'>
          <Typography sx={{ pr: 1 }}>Jyothi K</Typography>

          < AccountCircleIcon sx={{ fontSize: "32px" }} />
        </Box>
      </Box>
    </Box>
  )
}
