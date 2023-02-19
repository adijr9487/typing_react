import React, { useState } from "react";
import "./Container.css";
import ShowCard from "../ShowCard/ShowCard";

const Container = (props) => {

  return (
    <div
      style={{
        display: "flex",
        flexFlow: "column-reverse",
      }}
    >
      {props.stack.map((item, index) => {
        console.log(item)
        return (
          <ShowCard
            key={index}
            content={item.text}
            input={item.input}
            time={item.time}
            correct={item.correct}
          />
        );
      })}
    </div>
  );
};

export default Container;
