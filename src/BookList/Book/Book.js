import React from 'react'
import './Book.css'

export default function Book({ title, image, link, author, description }) {
    return (
        <div className='book'>
        <img src={image} alt='Book Cover'/>
        <h2><a href={link} target='_blank' rel='noreferrer'>{title}</a></h2>
        <h3>{author}</h3>
        <p>{description}</p>
        <hr/>
    </div>
    )
}
