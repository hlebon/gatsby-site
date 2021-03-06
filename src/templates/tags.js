/*
import React from 'react'
import {Link} from 'gatsby'

const Tags = ({ pathContext }) => {
    const { posts, tagName } = pathContext
    if(posts){
        return (
            <div>
                <span>
                    Post about {tagName}
                </span>
                <ul>
                    {posts.map((post, index) => {
                        return (
                            <li key={index}>
                                <Link to={post.frontmatter.path}>
                                    {post.frontmatter.title}
                                </Link>
                            </li>
                        )
                    })}
                </ul>
            </div>
        )
    }
}

export default Tags
*/
