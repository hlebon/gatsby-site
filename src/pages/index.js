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
      {posts.map(({node: post}, index) => {
        const { frontmatter } = post
        return (
          <div key={index}>
            <h3>
              <Link to={frontmatter.path}>{frontmatter.title}</Link>
            </h3>
            <p>{frontmatter.date}</p>
            <p>{frontmatter.excerpt}</p>
            <ul>
              {post.frontmatter.tags.map(tag => {
                return (
                  <li>
                    <Link to={`/tags/${tag}`}>
                      {tag}
                    </Link>
                  </li>
                )
              })}
            </ul>
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
            date(formatString: "MMMM DD, YYYY")
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
