import React from "react";
import { Link } from "gatsby";

function PostCard({ post }) {
  return (
    <article className="article">
      <header>
        <h3 className="post-title">
          <Link to={post.path} className={"title-color"}>
            {post.title}
          </Link>
        </h3>
      </header>
      <section className="post-excerpt">
        <p>{post.excerpt}</p>
      </section>
      <footer className="post-meta">
        <div>
          <span>{post.author} tags: </span>
        </div>
        <div className="post-meta-tag-group">
          {post.tags.map((tag, index) => {
            return (
              <p key={index} className="post-meta-link">
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
