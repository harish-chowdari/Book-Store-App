import React from 'react'
import { AppBar, Tab, Tabs, Toolbar, Typography } from '@mui/material'
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import { NavLink } from 'react-router-dom';


const Header = () => {

    

  return (
    <div>

    <AppBar sx={{ backgroundColor: "#232F3D", position: 'fixed' }}>
        <Toolbar>
            <Typography>
                <LibraryBooksIcon />
                
            </Typography>
            <Tabs 
            sx={{ml:"auto"}}
                indicatorColor='secondary'
                textColor='inherit'
                >
                <Tab LinkComponent={NavLink} to="/add" label="Add Product" />
                <Tab LinkComponent={NavLink} to="/books" label="Books" />
                <Tab LinkComponent={NavLink} to="/about" label="About Us" />
                
            </Tabs>
        </Toolbar>

    </AppBar>

    </div>
  )
}

export default Header