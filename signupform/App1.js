import "./styles1.css";
import React from "react";
import ReactDOM from "react-dom";
import bootstrap from "bootstrap"; // eslint-disable-line no-unused-vars
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Title from "/signupform/Title.js";
import Inputs from "/signupform/Inputs.js";
import Checkbox from "/signupform/Checkbox.js";
import Button from "/signupform/Button.js";
import ToSignIn from "/signupform/ToSignIn.js";

export default function App1() {
  return (
    <div className="container-fluid ozzo mx-auto pb-3">
      <Title />
      <form>
        <Inputs />
        <Checkbox />
        <Button />
      </form>
      <ToSignIn />
    </div>
  );
}
