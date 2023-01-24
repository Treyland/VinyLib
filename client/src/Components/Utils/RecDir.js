import React from 'react'
import RecCard from './RecCard'
import '../../Styles/RecDir.css'

export default function RecDir ({records}) {
  return (
    <div className="recDir">
      {records?.map((item => {
        return (
          <RecCard key={item.id} title={item.title} artist={item.artist} link={item.resource_url}/>
        )
      }))}
    </div>
  )
}
