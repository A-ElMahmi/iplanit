"use client";

// import styles from "./page.module.css";
import { useEffect, useState } from "react";
import Image from "next/image";
import Dashboard from "./components/Dashboard";
import NavBar from "./components/NavBar";
import ProfileArea from "./components/ProfileArea";
import TextIncreaseIcon from "@/public/text_increase.svg";
import TextDecreaseIcon from "@/public/text_decrease.svg";
import LogoutIcon from "@/public/logout.svg";



export default function Home() {
  const [fontSize, setFontSize] = useState(16);
  const [showLogoutDialog, setShowLogoutDialog] = useState(false);


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
        <div>iplanit</div>
        <div className="logout" onClick={() => setShowLogoutDialog(true)} style={{ cursor: 'pointer' }}>
          <Image src={LogoutIcon} alt="Logout Icon" />
          <a>Logout</a>
        </div>

      </div>

      <div className="container">
        {/* <div className="top-strip"> */}
          <ProfileArea />

          <NavBar fontSize={fontSize} first3={true} />
        {/* </div> */}

        <NavBar fontSize={fontSize} last3={true} />

        <Dashboard />
      </div>
      {showLogoutDialog && (
  <div className="logout-dialog">
    <div className="dialog-box">
      <p>Do you want to leave?</p>
      <div className="dialog-buttons">
        <button onClick={() => setShowLogoutDialog(false)}>No, Go back</button>
        <button
          onClick={() => {
            // Replace with actual logout logic
            alert("Logged out!");
            setShowLogoutDialog(false);
          }}
        >
          Yes, Goodbye 👋🏻
        </button>
      </div>
    </div>
  </div>
)}

    </div>
  );
}
