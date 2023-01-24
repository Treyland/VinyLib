import React from 'react';
import "../../Styles/Card.css";

export default function Card({id, person, image, artId, setArt, setSeeRecords}) {

const clickArt = (e) => {
  e.preventDefault();
  setArt(id)
  setSeeRecords(true)
}

  return (
    <div className='Card'>
        <img src={image} alt="album cover"/>
        <div className="cardContent">
          <p onClick={clickArt}>{person}</p>
        </div>
    </div>
  )
}
