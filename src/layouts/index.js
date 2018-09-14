import React from 'react';
import Helmet from 'react-helmet';
import { Nav, Footer } from "../components";
import "./normalize.css";
import './index.css';
import './app.css';
import "./prims-funky.css";

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="Hans blog"
      meta={[
        { name: 'description', content: 'Fullstack developer' },
        { name: 'keywords', content: 'c#, javascript, reactjs, MVC, asp.net, entity framework' },
      ]}
    />
    <Nav />
      {children()}
    <Footer/>
  </div>
)

export default TemplateWrapper
