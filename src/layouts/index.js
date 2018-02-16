import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

import './index.css'
import './app.css'
require("./prims-funky.css");

const Header = () => (
  <div
    style={{
      background: 'linear-gradient(62deg,#3c4556,#282a36)',
      marginBottom: '1.45rem',
    }}
  >
    <div
      style={{
        margin: '0 auto',
        maxWidth: 860,
        padding: '1.45rem 1.0875rem',
      }}
    >
      <h3 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: 'hsla(0,0%,100%,.8)',
            textDecoration: 'none',
          }}
        >
          Hans Blog
        </Link>
      </h3>
    </div>
  </div>
)

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="The Fullstack blog"
      meta={[
        { name: 'description', content: 'Fullstack developer' },
        { name: 'keywords', content: 'c#, javascript, reactjs, MVC, asp.net, entity framework' },
      ]}
    />
    <Header />
    <div className="container">
      {children()}
    </div>
  </div>
)



export default TemplateWrapper
