import React from 'react'

export const Book = ({title="No Title", author="No Author", pages, freeBookmark}) =>{
    return (
        <section>
            <h2>{title}</h2>
            <p>by{author}</p>
            <p>Pages: {pages} pages</p>
            <p>Free Bookmark today: { freeBookmark ? 'yes!': 'no!' }</p>

        </section>
    )

}

