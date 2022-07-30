import logo from "./logo.svg";
import "./App.css";

// We want to put all our routes in our App.js

function App() {
  return <>
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
</Routes>;
  </>;
}

export default App;
