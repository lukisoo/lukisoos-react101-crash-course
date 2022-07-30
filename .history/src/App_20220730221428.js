import logo from "./logo.svg";
import "./App.css";

// The import to allow for routes to be used in our app
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Import each of our pages from the routes folder here!
import Home from "./routes/home";

// We want to put all our routes in our App.js

function App() {
  return (
    <>
    {/* We need to wrap all our routes in a <BrowserRouter> */}
      <BrowserRouter>
      {/* We put all of our routes under <Routes> */}
        <Routes>
        {/* Each of our routes here is a page */}
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
      ;
    </>
  );
}

export default App;
