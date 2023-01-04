import React from 'react';
import '../../Styles/Directory.css';
import Card from './Card';

export default function Directory ({artists}) {
  const unique = [...new Map (artists.map((i) => [i.id, i])).values()];
  console.log(unique);
  return (
    <div className='dirContainer'> 
    
     {unique.map((item) => {
      return(<Card key={item.id} person = {item.title} image={item.cover_image} />)
     })}
     {/* {artists.map((item) => {
      console.log(item.cover_image);
        return (<Card key={item.id} person={item.title} image={item.cover_image} />
      )})} */}
    </div>
  )
}
