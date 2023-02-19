import { Paper, Typography } from '@mui/material'
import React from 'react'

const Block = ({title, value, fontsize='3rem'}) => {
  return (
    <Paper style={{boxShadow: 'none', margin: '10px 20px'}}>
        <Typography variant="p" component="div" style={{
            color: 'grey'
        }}>
            {title}
        </Typography>
        <Typography variant="h3" component="div" style={{fontSize: fontsize}}>
            {value}
        </Typography>
    </Paper>
  )
}

export default Block