import React from 'react'
import Link from 'gatsby-link'

const AllTags = ({ pathContext }) => {
    const { posts, tagName } = pathContext
    if(posts){
        return (
            <div>
                <span>
                    Post about {tagName}
                </span>
                <ul>
                    {posts.map(post => {
                        return (
                            <li>
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

return default AllTags