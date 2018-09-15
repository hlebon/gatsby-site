import React from "react";
import Helmet from "react-helmet";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faCheckSquare, faCoffee } from "@fortawesome/free-solid-svg-icons";
import { Nav, Footer } from "../components";
import "./normalize.css";
import "./index.css";
import "./app.css";
import "./prims-funky.css";

library.add(fab, faCheckSquare, faCoffee);

const TemplateWrapper = ({ children }) => (
  <div>
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
    <Nav />
    {children()}
    <Footer />
  </div>
);

export default TemplateWrapper;
