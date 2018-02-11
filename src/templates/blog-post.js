import React, { Component } from 'react'
import Link from 'gatsby-link'
import ReactDisqusThread from 'react-disqus-thread'
import { graphql } from 'graphql';
import Helmet from 'react-helmet'

const styles = {
    title: {
        marginBottom: 0
    },
    date : {
        color: "#4A4A4A",
    },
    body: {
        marginTop: "55px"
    }
}

function guid() {
    function s4() {
      return Math.floor((1 + Math.random()) * 0x10000)
        .toString(16)
        .substring(1);
    }
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
      s4() + '-' + s4() + s4() + s4();
  }


  /*
{data, location, pathContext}
  const { markdownRemark: post } = data
    const { frontmatter, html } = post
    const { title, date }  = frontmatter
    const { next, prev } = pathContext
  */

class Template extends Component {
    
    handleNewComment(comment){
        console.log(comment)
    }

    render(){
        console.log(this.props)
        const { markdownRemark: post } = this.props.data
        const {data, location, pathContext} = this.props
        const { frontmatter, html } = post
        const { title, date }  = frontmatter
        const { next, prev } = pathContext

        return (
            <div>
                <Helmet title={`${title} - My blog`}/>
                <div>
                    <header className={"title-color"}>
                        <h1 style={styles.title}>{title}</h1>
                        <span style={styles.date}>{date}</span>
                    </header>
                    <section style={styles.body}>
                        <div dangerouslySetInnerHTML={{__html: html}}></div>
                    </section>
                    <footer>
                        <div>
                            { prev && 
                                ( <p>Previous: <Link to={prev.frontmatter.path}>
                                     { prev.frontmatter.title }
                                </Link>
                                </p> )
                            }
                        </div>
                        <div>
                            {next && 
                                ( <p>Next: <Link to={next.frontmatter.path}>
                                 { next.frontmatter.title }
                                </Link> 
                                </p> )
                            }
                        </div>
                    </footer>
                    { /*
                    <ReactDisqusThread
                     
                        shortname={'hansgarcia'}
                        identifier={`CC${frontmatter.id}`}
                        title={title}
                    />
                    */}
                </div>
            </div>
        )
    }
}

export const pageQuery = graphql`
    query BlogPostByPath($path: String!) {
        markdownRemark(frontmatter: { path: { eq: $path } }){
            html
            frontmatter{
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
`


export default Template