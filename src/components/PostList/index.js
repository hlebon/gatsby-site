import React from "react";
import PostCard from "../PostCard"

function PostList(props) {
  const { data: posts } = props;
  return (
    <div>
      {posts ? (
        <div>
          {posts.map(({ node: post }, index) => {
            const { frontmatter } = post;
            return <PostCard key={index} post={frontmatter} />;
          })}
        </div>
      ) : (
        <h1 style={{ textAlign: "center" }}>
          Currently working, please come later :){" "}
        </h1>
      )}
    </div>
  );
}

export default PostList;
