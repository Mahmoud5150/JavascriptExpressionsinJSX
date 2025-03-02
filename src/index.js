import React from "react";
import ReactDOM from "react-dom";

const name = "Mahmoud";

ReactDOM.render(
  <div>
    <h1>Hello {name}!</h1>
    <p>your favorite number is {Math.floor(Math.random() * 10)}</p>
  </div>,
  document.getElementById("root")
);
