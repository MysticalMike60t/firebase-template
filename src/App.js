import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import { Path } from "./components/global/Global";

import "./styles/global/global.scss";

function App() {
  return (
    <Router>
      <Path />
    </Router>
  );
}

export default App;
