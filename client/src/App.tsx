import React from "react";
import "./App.css";

import Navbar from "./components/Navbar";
import Body from "./components/Body";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Body></Body>
      <Footer></Footer>
    </div>
  );
};

export default App;
