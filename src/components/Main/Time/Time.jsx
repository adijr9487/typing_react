import { Paper } from '@mui/material'
import React from 'react'
import Block from '../Block/Block'

// get timmer string in "00:00:00" format
const Time = ({title, timer}) => {
    
  return (
    <div className='Right'>
          <Paper style={{
          textAlign: 'left',
          padding: '10px',
          display: 'flex',
        }}>
          <Block title={title} value={timer.split(":")[0]+":"+timer.split(":")[1]}/>
          <Block title={"ms"} value={timer.split(":")[2]} fontsize="1.5rem"/>
        </Paper>
      </div>
  )
}

export default Time