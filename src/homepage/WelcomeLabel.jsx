import React from 'react'
import getTodayDate from "../functions/getTodayDate";
import "./Homepage.css"


export default function WelcomeLabel({pageTopic}) {
  let date = getTodayDate()
  return (
    <div id='WelcomeLabel' className='contMiddle_Centered'>
      <h2>{pageTopic.title}</h2>
      <h2 id='date_WelcomeLabel'>{date.day+"/"+date.month+"/"+date.year}</h2>
    </div>
  )
}
