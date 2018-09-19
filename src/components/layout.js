import React from "react";
import Helmet from "react-helmet";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faFutbol, faCoffee } from "@fortawesome/free-solid-svg-icons";
import { Nav, Footer } from "../components";
import "./normalize.css";
import "./index.css";
import "./app.css";
import "./prims-funky.css";

library.add(fab, faCoffee, faFutbol);

const TemplateWrapper = ({ children }) => (
  <div className="site">
    <Helmet
      title="Hans blog"
      meta={[
        { name: "description", content: "Fullstack developer" },
        {
          name: "keywords",
          content: "c#, javascript, reactjs, MVC, asp.net, entity framework"
        }
      ]}
    />
    <div className="content-site">
      <Nav />
      {children}
    </div>
    <Footer />
  </div>
);

export default TemplateWrapper;