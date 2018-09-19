import React from "react";
import { StaticQuery, graphql } from "gatsby";
import "../../layouts/header.css";

function Header() {
  return (
    <StaticQuery
      query={graphql`
      query HeadingQuery{
        site {
          siteMetadata{
            title
          }
        }
      }
    `}
      render={data => {
        const { title } = data.site.siteMetadata;
        return (
          <header>
            <div className="header">
              <h1 className="header-title title-color">{title}</h1>
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
                <li> Rest API</li>
                <li>.Net Core</li>
              </ul>
            </div>
          </header>
        );
      }}
    />
  );
}

export default Header;
