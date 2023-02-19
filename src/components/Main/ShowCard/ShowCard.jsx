import React from "react";
import { Paper, Typography } from "@mui/material";
import Time from "../Time/Time";

const CardBox = (props) => {

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
            {props.content}
          </Typography>
        </Paper>
          <Paper
            style={{
              textAlign: "left",
              padding: "10px",
              backgroundColor: props.correct ? "#67c367" : "#c36767",
            }}
          >
            <Typography
              variant="p"
              component="div"
              style={{ fontSize: "1rem" }}
            >
              {props.input}
            </Typography>
          </Paper>
      </div>
      <Time timer={props.time} />
    </div>
  );
};

export default CardBox;
