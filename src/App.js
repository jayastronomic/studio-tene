import React from "react";
import { Routes, Route } from "react-router-dom";
import Wrapper from "./components/Wrapper";
import Home from "./pages/Home/Home";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Wrapper />}>
        <Route path="/" element={<Home />} />
      </Route>
    </Routes>
  );
}

export default App;
