import React from "react";
import "../../layouts/header.css";

function Header() {
  return (
    <header>
      <div className="header">
        <h1 className="header-title title-color">Hans García</h1>
        <h2 className="header-subtitle">
          Computer science engineer, Fullstack developer
        </h2>
        <ul className="header-tech-list">
          <li>React</li>
          <li>Redux</li>
          <li>React Native</li>
          <li>C#</li>
          <li>GraphQL</li>
          <li>Agile</li>
          <li>Rest API</li>
          <li>.Net Core</li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
