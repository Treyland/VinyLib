import React from 'react'
import '../../Styles/RecCard.css'

export default function RecCard({title, artist, link}) {
  return (
    <div className='recCard'>
        <div className="recCardContent">
            <a href={link} alt="discogsLink">{link}</a>
            <p>Album Title: {title}</p>
            <p>Artist: {artist}</p>
        </div>
    </div>
  )
}
