import React from "react";
import Helmet from "react-helmet";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faFutbol, faCoffee } from "@fortawesome/free-solid-svg-icons";
import { Nav, Footer } from ".";
import { StaticQuery, graphql } from "gatsby";
import "../layouts/normalize.css";
import "../layouts/index.css";
import "../layouts/app.css";
import "../layouts/prims-funky.css";

library.add(fab, faCoffee, faFutbol);

const Layout = props => (
  <StaticQuery
    query={graphql`
    query LayoutQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
    `}
    render={data => {
      const { title } = data.site.siteMetadata;
      return (
        <div className="site">
          <Helmet
            title={title}
            meta={[
              { name: "description", content: "Fullstack developer" },
              {
                name: "keywords",
                content:
                  "c#, javascript, reactjs, MVC, asp.net, entity framework"
              }
            ]}
          />
          <div className="content-site">
            <Nav />
            {props.children}
          </div>
          <Footer />
        </div>
      );
    }}
  />
);

export default Layout;
