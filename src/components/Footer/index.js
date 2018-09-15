import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../../layouts/footer.css";

function Footer() {
  return (
    <footer className="footer-site">
      <div className="footer-site-container flex">
        <section className="footer-site-iam">
          <h4 className="title">Hans Garcia</h4>
          <p>
            Software web developer, amante del cafe{" "}
            <span>
              <FontAwesomeIcon icon={"coffee"} color={"white"} />
            </span>, pizza y fan del A.C. Milan.{" "}
            <span>
              <FontAwesomeIcon icon={"futbol"} color={"white"} />
            </span>
          </p>
        </section>
        <div className="social">
          <ul className="follow-me-list">
            <li>
              <a href="#">
                <FontAwesomeIcon
                  icon={["fab", "twitter"]}
                  size={"2x"}
                  color={"white"}
                />
              </a>
            </li>
            <li>
              <a href="#">
                <FontAwesomeIcon
                  icon={["fab", "medium"]}
                  size={"2x"}
                  color={"white"}
                />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
