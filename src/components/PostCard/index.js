import React from "react";
import { Link } from "gatsby";
import Img from "gatsby-image";

function PostCard({ post }) {
  console.log(post);
  return (
    <article className="postcard">
      <img
        className="postcard-img"
        src="https://images.unsplash.com/photo-1531816466008-90e3a4b01450?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=fc178f3219178b26c80a7f597c8b852b&auto=format&fit=crop&w=750&q=80"
        alt="save money"
      />
      <header>
        <h3 className="postcard-title">
          <Link to={post.path}>{post.title}</Link>
        </h3>
      </header>
      <p className="postcard-extract">{post.excerpt}</p>
      <footer>
        <div>
          <span>{post.author} tags: </span>
        </div>
        <div>
          {post.tags.map((tag, index) => {
            return (
              <p key={index}>
                <Link to={`/tags/${tag}`}>{tag}</Link>
                {post.tags[index + 1] === undefined ? "" : ","}
              </p>
            );
          })}
        </div>
        <time>| {post.date}</time>
      </footer>
    </article>
  );
}

export default PostCard;
