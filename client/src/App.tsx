import React from "react";
import { Routes, Route } from "react-router-dom";
import useFakeData from "./hooks/useFakeData";
import Home from "./pages/Home";

const App = () => {
  const fakeData = useFakeData();

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
      </Routes>
    </div>
  );
};

export default App;
