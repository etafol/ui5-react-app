import React from "react";
import { Avatar, ShellBar, ShellBarItem } from "@ui5/webcomponents-react";
import addIcon from "@ui5/webcomponents-icons/dist/add";
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import { Home } from "./Home.tsx";
import { Detail } from "./Detail.tsx";

export function MyApp() {
  const navigate = useNavigate();
  const handleLogoClick = () => {
    navigate("./");
  };

  return (
    <>
      <ShellBar
        logo={<img src="reactLogo.png" alt="Logo" />}
        onLogoClick={handleLogoClick}
        profile={
          <Avatar>
            <img src="profilePictureExample.png" alt="Profile" />
          </Avatar>
        }
        primaryTitle="My App"
      >
        <ShellBarItem icon={addIcon} text="Add" />
      </ShellBar>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/detail" element={<Detail />} />
        <Route path="*" element={<Navigate replace to="/home" />} />
      </Routes>
    </>
  );
}
