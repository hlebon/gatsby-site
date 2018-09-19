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

const Layout = props => <div>Hola mundo</div>;

export default Layout;
