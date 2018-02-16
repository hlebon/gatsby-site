import React, { Component } from 'react'
import Link from 'gatsby-link'
import { graphql } from 'graphql'
import '../layouts/index.css'
import '../layouts/app.css'

const Header = () => {
  return (
    <div className="header">
      <div>
        <h1 className="header-title title-color">Hi, I am Hans</h1>
        <p className="header-subtitle">This is my awesome blog page... </p>
      </div>
    </div>
  )
}

const generateNewArray = (posts, n) => {
  if(n == 0){
    return [posts]
  }
  let start = 0
  let end = n
  let lista = []
  if(posts.length > n){
    while(end <= posts.length ){
      lista.push(posts.slice(start, end))
      start = end
      end = end + n
    }
    return lista
    
  }else{
    return [posts]
  }
}

class PostList extends Component{
  state = {
    pagina: 0,
    posts: null
  }

  componentDidMount(){
    const posts = generateNewArray(this.props.data.allMarkdownRemark.edges, 0)
    this.setState({
      posts
    })
  }

  olderPosts = () => {
    if(this.state.pagina + 1 < this.state.posts.length){
      this.setState((prevState) => ({
        pagina: prevState.pagina + 1
      }))
    }else{
      alert("No hay mas posts antiguos")
    }
  }

  newPosts = () => {
    if(this.state.pagina - 1 >= 0){
      this.setState((prevState) => ({
        pagina: prevState.pagina - 1
      }))
    }else{
      alert("No hay post mas recientes")
    }
  }

  render(){
    console.log(this.state)
    const posts = this.state.posts
    console.log(posts)
    return (
      <div>
        { posts && 
        <div>
          {posts[this.state.pagina].map(({node: post}, index) => {
            const { frontmatter } = post
            return (
              <article className="article" key={index}>
                <header>
                  <h3 className="post-title">
                    <Link to={frontmatter.path} className={"title-color"}>{frontmatter.title}</Link>
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
                        <p key={index} className="post-meta-link">
                          <Link to={`/tags/${tag}`}>
                            {tag}
                          </Link>
                        </p>
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
        }
      </div>
    )
  }  
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
            id
            titleid
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
