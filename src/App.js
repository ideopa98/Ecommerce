import React from "react";
import Header from "./Header";
import Home from "./Home";
import Checkout from "./Checkout";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Login";
const App = () => {
  return (
    <>
   
      <div className="App">
      <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
      <div>
        <Routes>
          
        </Routes>
      </div>

    </>
  );
};

export default App;
