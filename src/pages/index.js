import React, { Component } from 'react'
import { graphql } from 'graphql'
import { Header, PostList } from "../components"
import '../layouts/index.css'
import '../layouts/app.css'

export default function Index(query) {
  const { edges } = query.data.allMarkdownRemark
  return (
    <div>
      <Header/>
      <PostList data={edges}/>
    </div>
  )
}

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          excerpt(pruneLength: 250)
          id
          frontmatter {
            id
            titleid
            title
            date(formatString: "MMMM DD, YYYY")
            path
            tags
            excerpt
          }
        }
      }
    }
  }
`;

