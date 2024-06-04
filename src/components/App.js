import "../css/base.css";
import "../css/App.css";
import LandingPage from "./LandingPage";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
function App() {
  return (
    <div>
      <LandingPage />
    </div>
  );
}

export default App;
