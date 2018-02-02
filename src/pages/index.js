import React from 'react'
import Link from 'gatsby-link'
import { graphql } from 'graphql';


const Header = () => {
  return (
    <div className="header">
      <div>
        <h1 className="header-title">Hi, I am Hans</h1>
        <p className="header-subtitle">This is my awesome blog page... </p>
      </div>
    </div>
  )
}


const PostList = ( { data }  ) => {
  const { edges: posts } = data.allMarkdownRemark
  console.log(posts)
  return (
    <div>
      <div>
        {posts.map(({node: post}, index) => {
          const { frontmatter } = post
          return (
            <article className="article" key={index}>
              <header>
                <h3 className="post-title">
                  <Link to={frontmatter.path}>{frontmatter.title}</Link>
                </h3>
              </header>
              <section className="post-excerpt">
                <p>{frontmatter.excerpt}</p>
              </section>
              <footer className="post-meta">
                <div>
                  <span>{frontmatter.author} on: </span>
                </div>
                <div className="post-meta-tag-group">
                    {post.frontmatter.tags.map((tag, index) => {
                      return (
                      <div key={index} className="post-meta-link">
                        <Link to={`/tags/${tag}`}>
                          {tag}
                        </Link>
                      </div>
                      )
                    })}
                </div>
                <time>
                  | {frontmatter.date}
                </time>
              </footer>
            </article>
          )
        })}
      </div>
    </div>
  )
}

const IndexPage = (query) => {
  const edges = query.data
  return (
    <div style={{color: 'black'}}>
      <Header />
      <PostList data={edges}/>
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
            author
          }
        }
      }
    }
  }
`

export default IndexPage
