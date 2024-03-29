import React from 'react';
import '../../Styles/Directory.css';
import Card from './Card';

export default function Directory ({artists, setArt, artId, setSeeRecords}) {

  return (
    <div className='dirContainer'> 
     {artists?.map((item) => {
      return (<Card key={item.id} id={item.id} person = {item.title} image={item.cover_image} artId={artId} setArt={setArt} setSeeRecords={setSeeRecords}/>)
     })}
     {/* {artists.map((item) => {
      console.log(item.cover_image);
        return (<Card key={item.id} person={item.title} image={item.cover_image} />
      )})} */}
    </div>
  )
}
