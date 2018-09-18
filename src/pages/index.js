import React, { Component } from "react";
import { graphql } from "graphql";
import { Header, PostList } from "../components";
import "../layouts/index.css";
import "../layouts/app.css";

export default function Index(query) {
  const { edges } = query.data.allContentfulPost;
  return (
    <div>
      <Header />
      <PostList data={edges} />
    </div>
  );
}

export const pageQuery = graphql`
  query pageQuery {
    allContentfulPost(filter: { node_locale: { eq: "en-US" } }) {
      edges {
        node {
          id
          date
          path
          title
          excerpt
          author
          tags
        }
      }
    }
  }
`;
