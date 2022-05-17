import React from "react";
import ReactDOM from "react-dom";

const fName = "Kevin";
const lNmae = "Machuca";
const number = Math.round(Math.random() * 10);

ReactDOM.render(
  <div>
    <h1>
      Hello {fName} {lNmae}!
    </h1>
    <p>Your lucky number is {number}</p>
  </div>,
  document.getElementById("root")
);
