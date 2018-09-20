import React from "react";
import { Link } from "gatsby";
import Img from "gatsby-image";

function PostCard({ post }) {
  return (
    <article className="postcard">
      <header>
        <div>
          <Img
            className="postcard-img"
            ref="https://images.unsplash.com/photo-1531816466008-90e3a4b01450?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=fc178f3219178b26c80a7f597c8b852b&auto=format&fit=crop&w=750&q=80"
            alt="save money"
          />
        </div>
        <h3>
          <Link to={post.path}>{post.title}</Link>
        </h3>
      </header>
      <section>
        <p>{post.excerpt}</p>
      </section>
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
