import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useNavigate,
} from "react-router-dom";
import "../css/base.css";
import "../css/LandingPage.css";
import pic1 from "../img/pic1.jpg";
import Home from "../routes/Home";
import Login from "../routes/Login";
import Signup from "../routes/Signup";

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div>
      <img src={pic1} alt="background-img" className="bg-img" />
      <header className="header-wrap">
        <h1>
          chatCode <code> &lt;/&gt; </code>
        </h1>
        <button className="login-button" onClick={() => navigate("/login")}>
          Login
        </button>
      </header>
      <section className="header-content">
        <h1 className="header-main">Stay Inspired Every Day</h1>
        <p className="header-sub">
          Discover and share valuable code and reference at a glance
          <div className="button-display">
            <button
              onClick={() => navigate("/signup")}
              className="login-button"
            >
              Signup
            </button>

            <button onClick={() => navigate("/login")} className="login-button">
              Login
            </button>
          </div>
        </p>
      </section>
      <section className="benefits">
        <h2>
          Why use chatCode <code> &lt;/&gt; </code>
        </h2>
        <div className="wrapper">
          <div className="card2">
            <h3>
              Life without chatCode <code> &lt;/&gt; </code>
            </h3>
            <ul>
              <li> ❌ constant struggle finding answers</li>
              <li>
                ❌ videos help but you can't fully grasp context as with reading
              </li>
              <li>
                ❌ major sites have deviated due to sheer population & demand
              </li>
              <li> ❌ DM's do not really work</li>
            </ul>
          </div>
          <div className="card1">
            <h3>
              Life with chatCode <code> &lt;/&gt; </code>
            </h3>
            <ul>
              <li> ✔️ keeps inspiration up and motivates you</li>
              <li> ✔️ Ensures that you master overlooked concepts</li>
              <li> ✔️ Connects you with other devs</li>
              <li> ✔️ Great way to meet mentors and learn</li>
            </ul>
          </div>
        </div>
      </section>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </div>
  );
};

const App2 = () => (
  <Router>
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/home" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
    </Routes>
  </Router>
);

export default App2;

// import React from "react";
// import "../css/base.css";
// import "../css/LandingPage.css";
// import pic1 from "../img/pic1.jpg";
// import { Navigate } from "react-router-dom";
// import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

// import Home from "../routes/Home";
// import Login from "../routes/Login";
// import Signup from "../routes/Signup";

// const LandingPage = () => {
//   return (
//     <Router>
//       <div>
//         <img src={pic1} alt="background-img" className="bg-img" />
//         <header className="header-wrap">
//           <h1>
//             chatCode <code> &lt;/&gt; </code>
//           </h1>
//           {/* <nav className="nav-bar">
//           <ul className="nav-links">

//             <li>
//               <a href="Contact">Contact</a>
//             </li>
//             <li>
//               <a href="About">About</a>
//             </li>
//           </ul>
//         </nav> */}
//           <button className="login-button">Login</button>
//         </header>
//         <section className="header-content">
//           <h1 className="header-main">Stay Inspired Every Day</h1>
//           <p className="header-sub">
//             Discover and share valuable code and reference at a glance
//             <div className="button-display">
//               <button
//                 onClick={() => Navigate("/signup")}
//                 className="login-button"
//               >
//                 Signup
//               </button>

//               <button
//                 onClick={() => Navigate("/login")}
//                 className="login-button"
//               >
//                 Login
//               </button>
//             </div>
//           </p>
//         </section>
//         <section className="benefits">
//           <h2>
//             Why use chatCode <code> &lt;/&gt; </code>
//           </h2>
//           <div className="wrapper">
//             <div className="card2">
//               <h3>
//                 Life without chatCode <code> &lt;/&gt; </code>
//               </h3>
//               <ul>
//                 <li> ❌ constant struggle finding answers</li>
//                 <li>
//                   ❌ videos help but you can't fully grasp context as  with
//                   reading
//                 </li>
//                 <li>
//                   ❌ major sites have deviated due to sheer population & demand
//                 </li>
//                 <li> ❌ DM's do not really work</li>
//               </ul>
//             </div>
//             <div className="card1">
//               <h3>
//                 Life with chatCode <code> &lt;/&gt; </code>
//               </h3>
//               <ul>
//                 <li> ✔️ keeps inspiration up and motivates you</li>
//                 <li> ✔️ Ensures that you master overlooked concepts</li>
//                 <li> ✔️ Connects you with other devs</li>
//                 <li> ✔️ Great way to meet mentors and learn</li>
//               </ul>
//             </div>
//           </div>
//         </section>
//       </div>
//       <Routes>
//         <Route path="/home" element={<Home />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/signup" element={<Signup />} />
//       </Routes>
//     </Router>
//   );
// };

// export default LandingPage;
