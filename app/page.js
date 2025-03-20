"use client";

// import styles from "./page.module.css";
import { useEffect, useState } from "react";
import Image from "next/image";
import Dashboard from "./components/Dashboard";
import NavBar from "./components/NavBar";
import ProfilePic from "@/public/profile_placeholder.png";
import PersonIcon from "@/public/person.svg";
import LogoutIcon from "@/public/logout.svg";
import TextIncreaseIcon from "@/public/text_increase.svg";
import TextDecreaseIcon from "@/public/text_decrease.svg";



export default function Home() {
  const [fontSize, setFontSize] = useState(16);

  useEffect(() => {
    document.documentElement.style.fontSize = `${fontSize}px`;
  }, [fontSize]);

  const increaseFontSize = () => {
    setFontSize(Math.min(fontSize + 1, 28));
  };

  const decreaseFontSize = () => {
    setFontSize(Math.max(fontSize - 1, 10));
  };

  return (
    <div>
      {/* Top Bar */}
      <div className="top-bar">
        iplanit
      </div>

      <div className="container">
        {/* Profile Area */}
        <div class="top-strip">
          <div className="profile-area">
            <Image src={ProfilePic} alt="Profile image placeholder" />
            <div className="profile-area-text">
              <div className="bigger">
                <Image src={PersonIcon} alt="Person icon" />
                <a href="#">My Profile</a>
              </div>
              <div className="red">
                <Image src={LogoutIcon} alt="Logout icon" />
                <a href="#">Logout</a>
              </div>
            </div>
            {/* <div className="profile-area-btns">
              <button className="smaller" onClick={decreaseFontSize}>
                <Image src={TextDecreaseIcon} alt="Text Decrease Icon" />
              </button>
              <button onClick={increaseFontSize}>
                <Image src={TextIncreaseIcon} alt="Text Increase Icon" />
              </button>
            </div> */}
          </div>

          <NavBar fontSize={fontSize} />
        </div>

        <Dashboard />
      </div>
    </div>
  );
}
