import React from "react";
import ReactDOM from "react-dom";
import IndecisionApp from "./components/IndecisionApp";
import './styles/styles.scss'; 

ReactDOM.render(
  <IndecisionApp options={["Test 1", "Test 3"]} />,
  document.getElementById("app")
);
