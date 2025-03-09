import React, { useState } from "react";
import YTCard from "./Posts/YTCard";
import Gallery from "./Posts/Gallery";

const Posts = () => {
  const [view, setView] = useState("youtube");
  return (
    <div className="posts">
      <div className="container">
        <h2 className="title">Posts</h2>
        <div className="row">
          <div className="col-sm-3">
            <ul className="list-group">
              <li className={`list-group-item ${view === "youtube" ? "active" : ""}`} onClick={() => setView("youtube")}>
                Youtube
              </li>
              <li className={`list-group-item ${view === "gallery" ? "active" : ""}`} onClick={() => setView("gallery")}>
                Gallery
              </li>
            </ul>
          </div>
          {view === "youtube" ? (
            <div className="col-sm-9">
              <div className="row">
                <YTCard url="Hs0QF0RrXtc" />
                <YTCard url="Hs0QF0RrXtc" />
                <YTCard url="Hs0QF0RrXtc" />
                <YTCard url="Hs0QF0RrXtc" />
              </div>
            </div>
          ) : (
            <Gallery />
          )}
        </div>
      </div>
    </div>
  );
};

export default Posts; 