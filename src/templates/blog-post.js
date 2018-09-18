import React, { Component } from "react";
import Link from "gatsby-link";
import { graphql } from "graphql";
import Helmet from "react-helmet";

const styles = {
  title: {
    marginBottom: 0
  },
  date: {
    color: "#4A4A4A"
  },
  body: {
    marginTop: "55px",
    marginBottom: "45px"
  }
};

class Template extends Component {
  render() {
    const { contentfulPost: post } = this.props.data;
    const { pathContext } = this.props;
    const { title, date, excerpt } = post;
    const { next, prev } = pathContext;

    return (
      <div>
        <Helmet title={`${title} - Hans Garcia`} />
        <div>
          <header className={"title-color"}>
            <h1 style={styles.title}>{title}</h1>
            <span style={styles.date}>{date}</span>
          </header>
          <section style={styles.body}>
            <div dangerouslySetInnerHTML={{ __html: excerpt }} />
          </section>
          <footer>
            <div>
              {prev && (
                <p>
                  Anterior:{" "}
                  <Link to={prev.frontmatter.path}>
                    {prev.frontmatter.title}
                  </Link>
                </p>
              )}
            </div>
            <div>
              {next && (
                <p>
                  Siguiente:{" "}
                  <Link to={next.frontmatter.path}>
                    {next.frontmatter.title}
                  </Link>
                </p>
              )}
            </div>
          </footer>
        </div>
      </div>
    );
  }
}

export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    contentfulPost(path: { eq: $path }) {
      id
      date
      path
      title
      excerpt
      author
      tags
    }
  }
`;

export default Template;
