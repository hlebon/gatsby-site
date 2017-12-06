import React from 'react'
import Link from 'gatsby-link'
import { graphql } from 'graphql';

const IndexPage = ({data}) => {
  const { edges: posts } = data.allMarkdownRemark
  return (
    <div style={{color: 'pink'}}>
    <h1>Hi people</h1>
    <p>Hello world!</p>
    <p>This is my first gatsby page</p>
    <ul>
      {posts.map(({node: post}) => {
        const { frontmatter } = post
        return (
          <div>
            <h3>
              <Link to={frontmatter.path}>{frontmatter.title}</Link>
            </h3>
            <p>{frontmatter.date}</p>
            <p>{frontmatter.excerpt}</p>
          </div>
        )
      })}
    </ul>
  </div>
  )
}

export const query = graphql`
  query IndexQuery {
    allMarkdownRemark {
      totalCount
      edges{
        node{
          id
          frontmatter{
            title
            date
            path
            tags
            excerpt
          }
        }
      }
    }
  }
`

export default IndexPage
