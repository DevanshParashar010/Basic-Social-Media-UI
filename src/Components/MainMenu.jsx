import React, { useContext, useState } from "react";

import Footer from "./Footer";
import PostList from "./PostList";

import CreatePost from "./CreatePost";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";

export default function MainMenu() {
  const [selectedTab, setSelectedTab] = useState("Home");
  return (
    <div>
      <div className="app-container">
        <Sidebar selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
        <div className="content">
          <Outlet/>

          <Footer />
        </div>
      </div>
    </div>
  );
}
