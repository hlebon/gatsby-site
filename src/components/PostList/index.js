import React from "react";
import { StaticQuery, graphql } from "gatsby";
import PostCard from "../PostCard";

function PostList() {
  return (
    <StaticQuery
      query={graphql`
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
      `}
      render={query => {
        const { edges: posts } = query.allContentfulPost;
        return (
          <div className="postcard-container">
            {posts && (
              <ul className="postcard-list">
                {posts.map(({ node: post }) => {
                  const { id } = post;
                  return (
                    <li key={id}>
                      <PostCard post={post} />
                    </li>
                  );
                })}
              </ul>
            )}
          </div>
        );
      }}
    />
  );
}

export default PostList;
