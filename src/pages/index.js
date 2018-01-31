import React from 'react'
import Link from 'gatsby-link'
import { graphql } from 'graphql';


const style = {
  header: {
    textAlign: 'center',
    height: '40vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center'
  },

  headerTitle: {
    color: '#4A4A4A',
    fontSize: '2.5em'
  },

  headerSubtitle: {
    fontSize: '1.5em',
    color: 'gray'
  },

  article: {
    margin: '4rem auto'
  }
}

const Header = () => {
  return (
    <div style={style.header}>
      <div>
        <h1 style={style.headerTitle}>Hi, I am Hans</h1>
        <p style={style.headerSubtitle}>This is my awesome blog page... </p>
      </div>
    </div>
  )
}


const PostList = ( { data }  ) => {
  const { edges: posts } = data.allMarkdownRemark
  console.log(posts)
  return (
    <div>
      <ul>
        {posts.map(({node: post}, index) => {
          const { frontmatter } = post
          return (
            <article key={index} style={style.article}>
              <header>
                <h3>
                  <Link to={frontmatter.path}>{frontmatter.title}</Link>
                </h3>
              </header>
              <section>
                <p>{frontmatter.excerpt}</p>
              </section>
              <footer>
                <div>
                  <p>{frontmatter.author}</p>
                </div>
                <div>
                  <ul>
                    {post.frontmatter.tags.map((tag, index) => {
                      return (
                      <li key={index}>
                        <Link to={`/tags/${tag}`}>
                          {tag}
                        </Link>
                      </li>
                      )
                    })}
                  </ul>
                </div>
                <time>
                  {frontmatter.date}
                </time>
              </footer>
            </article>
          )
        })}
      </ul>
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
