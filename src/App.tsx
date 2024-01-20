import "./App.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../src/component/Home";
import Link from "../src/component/link";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/:shorturl" element={<Link />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
