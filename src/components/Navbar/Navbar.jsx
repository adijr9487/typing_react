import { Paper } from '@mui/material'
import React from 'react'

const Navbar = () => {
  return (
   <Paper
        elevation={3}
        style={{
            height: 50,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "1.5rem",
        }}
        >
        React Typing App    
    </Paper>
  )
}

export default Navbar