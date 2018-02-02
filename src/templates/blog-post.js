import React from 'react'
import Link from 'gatsby-link'
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


const Template = ({data, location, pathContext}) => {
    const { markdownRemark: post } = data
    const { frontmatter, html } = post
    const { title, date }  = frontmatter
    const { next, prev } = pathContext

    return (
        <div>
            <Helmet title={`${title} - My blog`}/>
            <div>
                <header>
                    <h1 style={styles.title}>{title}</h1>
                    <span style={styles.date}>{date}</span>
                </header>
                <section style={styles.body}>
                    <div dangerouslySetInnerHTML={{__html: html}}></div>
                </section>
                <footer>
                    <p>
                        { prev && 
                            ( <Link to={prev.frontmatter.path}>
                                Previous: { prev.frontmatter.title }
                            </Link> )
                        }
                    </p>
                    <p>
                        {next && 
                            ( <Link to={next.frontmatter.path}>
                            Next: { next.frontmatter.title }
                            </Link> )
                        }
                    </p>
                </footer>
            </div>
        </div>
    )
}

export const pageQuery = graphql`
    query BlogPostByPath($path: String!) {
        markdownRemark(frontmatter: { path: { eq: $path } }){
            html
            frontmatter{
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