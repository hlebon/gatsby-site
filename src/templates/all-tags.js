import React from 'react'
import Link from 'gatsby-link'

const AllTags = ({ pathContext }) => {
    const { tags } = pathContext
    if(tags){
        return (
            <div>
                <ul>
                    {tags.map( tag => {
                        return (
                            <li>
                                <Link to={`/tags/${tags}`}>
                                    {tag}
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