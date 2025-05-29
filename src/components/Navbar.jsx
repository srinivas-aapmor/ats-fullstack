import React, { useState, useRef } from 'react'
import { Box, Button, Typography } from '@mui/material'
import logo from '../assets/aapmor-logo.png'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import '../styles/navbar.css'
import Fade from '@mui/material/Fade';
import Logout from '@mui/icons-material/Logout';
import ListItemIcon from '@mui/material/ListItemIcon';
import { IconButton, Dialog, Slide } from '@mui/material';


export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [position, setPosition] = useState({ top: 0, left: 0 });
  const iconRef = useRef(null);
  const handleClick = () => {
    const rect = iconRef.current.getBoundingClientRect();
    const top = rect.bottom;
    const left = Math.min(rect.left, window.innerWidth - 330);
    setPosition({ top, left });
    setOpen(true);
  };

  const handleClose = () => setOpen(false);
  return (
    <Box className='navbar'>
      <Box className='navbar-logo'>
        <img src={logo} alt="aapmor logo" style={{ height: "60px" }} />
      </Box>
      <Box>
        <Box className='navbar-content'>
          <Typography sx={{ pr: 1, fontWeight: "500", color: "#333" }}>Sai Teja</Typography>

          <Box>

            <IconButton ref={iconRef} onClick={handleClick}>
              <AccountCircleIcon sx={{ fontSize: "32px" }} />
            </IconButton>



            <Dialog
              open={open}
              onClose={handleClose}
              TransitionComponent={Slide}
              keepMounted

              PaperProps={{
                sx: {
                  position: 'absolute',
                  top: position.top,
                  left: position.left,
                  m: 0,
                  backgroundColor: 'transparent',
                  boxShadow: 'none',
                  overflow: 'visible',
                  width: '280px',
                }
              }}
              BackdropProps={{
                sx: {
                  backgroundColor: 'rgba(0, 0, 0, 0.4)',
                }
              }}
            >
              <Box className='outer-box-menu'>
                <Box className='inner-box-menu'>
                  <Typography sx={{ color: '#333' }}>Sai Teja Chada</Typography>
                  <Typography sx={{ color: '#333' }}>csaiteja@aapmor.com</Typography>
                  <Button
                    startIcon={<Logout />}
                    onClick={handleClose}
                    variant='contained'
                    sx={{ backgroundColor: "#00C28E", my: 1 }}

                  >Logout</Button>
                </Box>
              </Box>
            </Dialog>

          </Box>
        </Box>
      </Box>
    </Box>
  )
}
