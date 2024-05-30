import React from "react";
import "../css/base.css";
import "../css/LandingPage.css";
import pic1 from "../img/pic1.jpg";

const LandingPage = () => {
  return (
    <div>
      <img src={pic1} alt="background-img" className="bg-img" />
      <header className="header-wrap">
        <h1>
          chatCode <code> &lt;/&gt; </code>
        </h1>
        {/* <nav className="nav-bar">
          <ul className="nav-links">
          
            <li>
              <a href="Contact">Contact</a>
            </li>
            <li>
              <a href="About">About</a>
            </li>
          </ul>
        </nav> */}
        <button className="login-button">Login</button>
      </header>
      <section className="header-content">
        <h1 className="header-main">Stay Inspired Every Day</h1>
        <p className="header-sub">
          Discover and share valuable code and reference at a glance
          <div className="button-display">
            <button className="login-button">Signup</button>

            <button className="login-button">Login</button>
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
                ❌ videos help but you can't fully grasp context as  with
                reading
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
    </div>
  );
};

export default LandingPage;
