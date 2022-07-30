import logo from "./logo.svg";
import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

// We want to put all our routes in our App.js

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/welcome" element={<Welcome />} />
          <Route path="recommendations" element={<Recommendations />} />
          <Route path="overview" element={<Overview />} />
          <Route path="store" element={<Store />} />
          <Route path="friends" element={<Friends />} />
          <Route path="previous-entries" element={<PreviousEntries />} />
          <Route path="profile" element={<Profile />} />
          <Route path="settings" element={<Settings />} />
          <Route path="ahmads-profile" element={<AhmadsProfile />} />
          <Route path="ahmads-island" element={<AhmadsIsland />} />
        </Routes>
      </BrowserRouter>
      ;
    </>
  );
}

export default App;
