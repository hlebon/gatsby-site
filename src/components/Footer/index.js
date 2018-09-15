import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../../layouts/footer.css";

function Footer() {
  return (
    <footer className="footer-page">
      <div className="footer-page-container flex">
        <section className="footer-page-iam">
          <h4 className="title">Hans Garcia</h4>
          <p>
            Software web developer, amante del cafe, la pizza y fan del A.C.
            Milan.
          </p>
        </section>
        <div>
          <ul className="follow-me-list">
            <li>
              Twitter: <FontAwesomeIcon icon={["fab", "twitter"]} />
            </li>
            <li>
              Medium: <FontAwesomeIcon icon={["fab", "medium"]} />
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
