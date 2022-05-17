//Create a react app from scratch.
//It should display a h1 heading.
//It should display an unordered list (bullet points).
//It should contain 3 list elements.

var React = require("react");
var ReactDOM = require("react-dom");

ReactDOM.render(
  <div>
    <h1>Practice List</h1>
    <ul>
      <li>First Item</li>
      <li>Second Item</li>
      <li>Third Item</li>
    </ul>
  </div>,
  document.getElementById("root")
);
