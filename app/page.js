"use client";

import { useState } from "react";
import { useFontSize } from "./context/FontSizeContext";
import Image from "next/image";
import Dashboard from "./components/Dashboard";
import NavBar from "./components/NavBar";
import ProfileArea from "./components/ProfileArea";
import LogoutDialog from "./components/LogoutDialog";
import ProfileDialog from "./components/ProfileDialog";
import TextChangeBtns from "./components/TextChangeBtns";
import LogoutIcon from "@/public/logout.svg";

export default function Home() {
  // const [fontSize, setFontSize] = useState(16);
  const { fontSize, setFontSize } = useFontSize();
  const [showLogoutDialog, setShowLogoutDialog] = useState(false);
  const [showProfileDialog, setShowProfileDialog] = useState(false);
  const [profilePic, setProfilePic] = useState("/profile_placeholder.png");
  const [name, setName] = useState("Patrick");

  const handleProfileSave = (newPic, newName) => {
    setProfilePic(newPic);
    setName(newName);
  };

  console.log(fontSize);

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
        <ProfileArea onEditProfile={() => setShowProfileDialog(true)} profilePic={profilePic} name={name} />

        <NavBar fontSize={fontSize} first3={true} />
        <NavBar fontSize={fontSize} last3={true} />
        
        <Dashboard />
      </div>

      {/* Dialogs */}
      <LogoutDialog showDialog={showLogoutDialog} setShowDialog={setShowLogoutDialog} />
      <ProfileDialog showDialog={showProfileDialog} setShowDialog={setShowProfileDialog} profilePic={profilePic} name={name} onSave={handleProfileSave} />

      <TextChangeBtns fontSize={fontSize} setFontSize={setFontSize} />

    </div>
  );
}
