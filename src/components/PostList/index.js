import React from "react";
import PostCard from "../PostCard";

function PostList(props) {
  const { data: posts } = props;
  return (
    <div>
      {posts ? (
        <div>
          {posts.map(({ node: post }) => {
            const { id } = post;
            return <PostCard key={id} post={post} />;
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
