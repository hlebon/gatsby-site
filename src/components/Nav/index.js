import React from "react";
import { Link } from "gatsby";

function Nav() {
  return (
    <nav
      style={{
        background: "linear-gradient(62deg,#3c4556,#282a36)"
      }}
    >
      <div
        style={{
          margin: "0 auto",
          maxWidth: 860,
          padding: "1.45rem 1.0875rem",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between"
        }}
      >
        <h3 style={{ margin: 0 }}>
          <Link
            to="/"
            style={{
              color: "hsla(0,0%,100%,.8)",
              textDecoration: "none"
            }}
          >
            Hans Blog
          </Link>
        </h3>
        <div>
          <div>
            <Link
              to="/projects"
              style={{ color: "hsla(0,0%,100%,.8)", textDecoration: "none" }}
            >
              Projects
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
