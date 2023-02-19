import { Box, Button, Card, TextField } from '@mui/material'
import React, {useEffect, useState, useRef} from 'react'
import './Main.css'
import Statics from './Statics/Statics'
import Container from './Container/Container.jsx'
import CardBox from './Card/CardBox'

const Main = () => {
  
  const [number, setNumber] = useState(0) //input form

  const [allQuote, setAllQuote] = useState([]) //all quptes

  const [quotes, setQuotes] = useState([]) //all selected quotes
  const [totalQuote, setTotalQuote] = useState(0) //total number of quotes

  const [currentQuote, setCurrentQuote] = useState(null) //current quote object {}
  
  const [currentIndex, setCurrentIndex] = useState(-1) //current quote index
  const [stack, setStack] = useState([]) //passed quotes
  
  
  const [time, setTime] = useState("00:00:00")
  const [isOn, setIsOn] = useState(false)

  const [fini, setFini] = useState(false)

  const timerRef = useRef(null)

  useEffect(() => {

    fetch('https://type.fit/api/quotes')
    .then(res => res.json())
    .then(data => {
      setAllQuote(data)
    })
    .catch(err => console.log(err))
    
  }, [])


  const setHandler = () => {
    if(allQuote.length === 0){
      alert('Please wait for quotes to load')
      return
    }else if(allQuote.length <= number){
      alert('Please enter a number less than ' + allQuote.length)
      return
    }
    setTotalQuote(number)
    setCurrentIndex(0)
    setQuotes(allQuote.slice(0, number))
  }

  const StartHandler = () => {
    if(fini){
      setTotalQuote(number)
      setCurrentIndex(0)
      setQuotes(allQuote.slice(0, number))
      setTime("00:00:00")
      setFini(false)
      return
    }
    if(isOn){
      clearInterval(timerRef.current)
      setIsOn(false)
      return
    }
    if(quotes.length === 0){
      alert('Please set the number of quotes')
      return
    }
    setIsOn(true)
    timerRef.current = setInterval(() => {
      setTime(prev=>{
        let time = prev.split(':')
        let seconds = parseInt(time[2])
        let minutes = parseInt(time[1])
        let hours = parseInt(time[0])
        seconds++
        if(seconds === 60){
          seconds = 0
          minutes++
        }
        if(minutes === 60){
          minutes = 0
          hours++
        }
        return `${hours < 10 ? '0' + hours : hours}:${minutes < 10 ? '0' + minutes : minutes}:${seconds < 10 ? '0' + seconds : seconds}`
      })
    }, 10)

    setCurrentQuote(quotes[0])
    setStack([])
    console.log(quotes[0])
  }

  const EnterHandler = (input, timer) => {
    setStack(prev=>[...prev, {text: currentQuote.text, input: input, time: timer, correct: currentQuote.text === input}])
    setCurrentQuote(quotes[currentIndex+1])
    if(currentIndex === totalQuote-1){
      clearInterval(timerRef.current)
      setIsOn(false)
      setFini(true)
      return
    }
    setCurrentIndex(prev=>prev+1)
  }

  return (
    <Box className="Main">
        <p>Timmer starts with the first letter entered press</p>
        <div style={{display: 'flex', justifyContent: 'center'}}>

          <TextField
            id="filled-number"
            label="Number of Quotes"
            type="number"
            InputLabelProps={{
              shrink: true,
            }}
            onChange={(e) => {
              if(e.target.value > 0){
                setNumber(e.target.value)
              }
            }}
            variant="filled"
            value={number}
            style={{marginRight: '10px'}}
            />
          <Button variant="contained" onClick={setHandler} disabled={isOn} style={{marginRight: '10px'}}>Set</Button>
          <Button variant="contained" onClick={StartHandler} >{fini ? 'Restart' : (isOn ? 'Stop' :'Start')}</Button>
        </div>
        <Statics timer={time} completed={(currentIndex > -1 ? currentIndex : '0')+'/'+totalQuote}/>
        {currentQuote && <CardBox isOn={isOn} enter={EnterHandler} quote={currentQuote} />}
        <Container stack={stack}/>
    </Box>
  )
}

export default Main