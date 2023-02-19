import React, { useState, useRef } from "react";
import {Paper, TextField, Typography } from "@mui/material";
import "./CardBox.css";
import Time from "../Time/Time";

const CardBox = (props) => {
  const [timer, setTimer] = useState("00:00:00");
  const [isOn, setIsOn] = useState(false);
  const [input, setInput] = useState("");
  const timerRef = useRef(null);

  const EnterHandler = (e) => {
    if (e.key === "Enter") {
      clearInterval(timerRef.current);
      props.enter(input.split("\n")[0], timer);
      setInput("")
      setIsOn(false)
      setTimer("00:00:00")
    }
  };

  React.useEffect(() => {
    if(props.isOn){
      clearInterval(timerRef.current)
    }
  
  }, [props.isOn])
  

  const QuoteInputHandler = (e) => {
    if (!isOn) {
      setIsOn(true);
      timerRef.current = setInterval(() => {
        setTimer((prev) => {
          let time = prev.split(":");
          let seconds = parseInt(time[2]);
          let minutes = parseInt(time[1]);
          let hours = parseInt(time[0]);
          seconds++;
          if (seconds === 60) {
            seconds = 0;
            minutes++;
          }
          if (minutes === 60) {
            minutes = 0;
            hours++;
          }
          return `${hours < 10 ? "0" + hours : hours}:${
            minutes < 10 ? "0" + minutes : minutes
          }:${seconds < 10 ? "0" + seconds : seconds}`;
        });
      }, 10);
    }

    setInput(e.target.value);
  };

  return (
    <div className="CardBox">
      <div className="Left">
        <Paper
          style={{
            textAlign: "left",
            padding: "10px",
            marginBottom: '10px'
          }}
        >
          <Typography variant="p" component="div" style={{ fontSize: "1rem" }}>
            {props.quote.text}
          </Typography>
        </Paper>
          <TextField
            id="outlined-multiline-static"
            label=""
            multiline
            value={input}
            rows={3}
            onKeyUp={EnterHandler}
            onChange={QuoteInputHandler}
            style={{
              width: "100%",
            }}
          />
      </div>
      <Time timer={timer} />
    </div>
  );
};

export default CardBox;
