import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./sidebar.css";

export default function Sidebar() {
  const navigate = useNavigate();

  const handleTagClick = (tag) => {
    navigate(`/tags?tag=${tag}`);
  };

  return (
    <div className="sidebar">
     
      <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
          {["Destination", "Travel Tips", "Activities", "Adventure", "Relaxation", "Culture"].map((tag) => (
            <li
              key={tag}
              className="sidebarListItem"
              onClick={() => handleTagClick(tag)}
            >
              {tag}
            </li>
          ))}
        </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW US</span>
      </div>
      <div className="sidebarSocial">
        <a href="https://www.facebook.com/TheDummyPage/"><i className="topIcon fab fa-facebook-square"></i></a>
        <a href="https://www.instagram.com/_mas.ila_/"><i className="topIcon fab fa-instagram-square"></i></a>
        <a href="https://www.pinterest.com/fakepinterest/"><i className="topIcon fab fa-pinterest-square"></i></a>
        <a href="https://twitter.com/_muuo11_"><i className="topIcon fab fa-twitter-square"></i></a>
      </div>
      <div className="Contact"><Link className="link" to="/contact">Contact us</Link></div>
    </div>
  );
}