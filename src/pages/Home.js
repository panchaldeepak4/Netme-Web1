import React from "react";
//import './home.css'
import "../assets/styles/home.css";
import Header from "../components/Header";
import Home2 from "../components/Home2";
import Home3 from "../components/Home3";
import Home4 from "../components/Home4";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <div className="main">
        <Header />

        <div className="body">
          <div className="main_text">
            <p>BOOST YOUR BUSINESS</p>
            <p className="main_text2">WITH NETME!</p>
            <p className="sub_text1">Connect with local users and grow your</p>
            <p className="sub_text2">customer base</p>
            <div className="btn">
              <button className="btn1">BECOME PARTNER NOW</button>
              <button className="btn2">START WITH ADS</button>
            </div>
          </div>

          <div className="body_pic">
            <img src="Images/mobile1.png" id="img1" alt="missing"></img>
            <img src="Images/mobile2.png" id="img2" alt="missing"></img>
          </div>
        </div>
      </div>

      {/* Part - 2 */}
      <Home2 />
      <Home3 />
      <Home4 />
      <Footer />
    </>
  );
};

export default Home;
