import logo from "./logo.svg";
import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./routes/home";

// We want to put all our routes in our App.js

function App() {
  return (
    <>
    {/* We need to wrap all our routes in a <BrowserRouter> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
      ;
    </>
  );
}

export default App;
