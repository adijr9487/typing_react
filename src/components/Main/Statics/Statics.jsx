import React from 'react'
import Block from '../Block/Block'
import './Statics.css'
import Time from '../Time/Time'

const Statics = (props) => {
  return (
    <div className='Statistic'>
        <Block title={"Quote Completed"} value={props.completed}/>
        <Time title={"Cumulative Time"} timer={props.timer}/>
    </div>
  )
}

export default Statics