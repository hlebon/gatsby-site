import React from "react";

function Header() {
  return (
    <header>
      <div className="header">
        <h1 className="header-title title-color">Hans García</h1>
        <p className="header-subtitle">
          Computer science engineer, Fullstack developer
        </p>
        <ul className="tech-list">
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
