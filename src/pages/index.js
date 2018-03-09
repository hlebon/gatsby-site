import React, { Component } from 'react'
import Link from 'gatsby-link'
import { graphql } from 'graphql'
import '../layouts/index.css'
import '../layouts/app.css'

const languages = ["C#", "Javascript", "React", ".Net Core", "Web API y más..."]

class Header extends Component {
  state = {
    feature: ""
  }

  componentDidMount(){
    //call callFeature to active list
  }

  callFeature = () => {
    setInterval(()=>{
      languages.forEach((lang, i) =>{
        setTimeout(()=>{
          this.setState({
            feature: lang
          })
        }, i*1000)
      })
    }, 5000)
  }

  render(){
    return (
      <div className="header">
        <div>
          <h1 className="header-title title-color">Hans García</h1>
          <p className="header-subtitle">Computer science engineer, Fullstack developer</p>
          <ul className="tech-list">
            <li>React</li>
            <li>Redux</li>
            <li>React Native</li>
            <li>C#</li>
            <li>GraphQL</li>
            <li>Agile</li>
            <li>Rest API</li>
            <li>.Net Core</li>
          </ul>
        </div>
      </div>
    )
  }
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
    posts: null,
    error: false
  }

  componentDidMount(){
    if(this.props.data){
      const posts = generateNewArray(this.props.data.allMarkdownRemark.edges, 0)
      this.setState({
        posts
      })
    }else{
      this.setState({
        posts: false
      })
    }
    
  }

  olderPosts = () => {
    if(this.state.pagina + 1 < this.state.posts.length){
      this.setState((prevState) => ({
        pagina: prevState.pagina + 1
      }))
    }
  }

  newPosts = () => {
    if(this.state.pagina - 1 >= 0){
      this.setState((prevState) => ({
        pagina: prevState.pagina - 1
      }))
    }
  }

  render(){
    console.log(this.state)
    const { posts } = this.state
    return (
      <div>
        { posts ? 
        <div>
          {posts[this.state.pagina].map(({node: post}, index) => {
            console.log(post)
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
                      {frontmatter.tags.map((tag, index) => {
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
        </div> : <h1 style={{ textAlign: 'center' }}>Error, something happend</h1>
        }
      </div>
    )
  }  
}

export default function Index(query) {
  const edges = query.data
  console.log("IndexPage",query, edges)
  return (
    <div style={{color: 'black'}}>
      <Header />
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

