import React from "react";
import "./App.css";
import Sidebar from "./Sidebar";
import TweetFeed from "./TweetFeed";

function App() {
  return (
    <div className="app__body">
      {/* Sidebar */}
      <Sidebar />
      {/* Tweet Feed */}
      <TweetFeed />

      {/* Widgets */}
    </div>
  );
}

export default App;
