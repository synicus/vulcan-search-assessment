import React from 'react'
import './GoogleSearchItem.css'

const GoogleSearchItem = ( {title, url, description} ) => (
    <div className='container'>
        <h3 className='title'><a href={url}>{title}</a></h3>
        <p className='url'>{url}<span class='down-arrow'></span></p>
        <p className='description'>{description}</p>
    </div>
)

export default GoogleSearchItem