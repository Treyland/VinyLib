import React from 'react';
import "../../Styles/Card.css";

export default function Card({person, image}) {
  return (
    <div className='Card'>
        <img src={image} alt="album cover"/>
        <div className="cardContent">
          <p>{person}</p>
        </div>
    </div>
  )
}
