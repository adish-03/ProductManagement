import React, {useState} from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static">
            <Toolbar>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                Product management
              </Typography>
              <Link to={'/'}><Button color="inherit" sx={{border: "1px solid white", marginRight: "3px", color: "white"}}>Home</Button></Link>
              <Link to={'/form'}><Button color="inherit" sx={{border: "1px solid white", color: "white"}}>Add Product</Button></Link>
            </Toolbar>
          </AppBar>
        </Box>
      </div>
  )
}

export default Navbar