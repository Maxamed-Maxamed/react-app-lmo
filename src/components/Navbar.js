// Import necessary components from React and Material-UI
import React from "react";
import { AppBar, Typography, Toolbar, Button } from "@mui/material";
import logo from '../img/logo.jpeg';
// Define the Navbar component
export default function Navbar() {
    return (
        // AppBar component for the top navigation bar
        <AppBar position="static" className="bg-pink-200"> 
            {/* Toolbar component to structure the content within the AppBar */}
            <Toolbar>
            <img src={logo} alt="LMO Beauty Logo" style={{ height: '40px', marginRight: '10px' }} />

                {/* Typography component for the logo/brand name */}
                <Typography variant="h6" className="flex-grow">
                    LMO Beauty
                </Typography>
                
                {/* Navigation buttons */}
                <Button color="inherit">Home</Button>
                <Button color="inherit">About</Button>
                <Button color="inherit">Services</Button>
                <Button color="inherit">Portfolio</Button>
                <Button color="inherit">Blog</Button>
                <Button color="inherit">Contact</Button>
            </Toolbar>
        </AppBar>
    );
}
