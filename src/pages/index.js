import React from 'react'
import Link from 'gatsby-link'

const IndexPage = () => (
  <div style={{color: 'pink'}}>
    <h1>Hi people</h1>
    <p>Hello world!</p>
    <img src="http://lorempixel.com/400/200/" alt="" />
    <p>This is my first gatsby page</p>
    <Link to="/page-2/">Go to page 2</Link>
    <Link to="/page-3/">Go to page 3</Link>
  </div>
)

export default IndexPage
