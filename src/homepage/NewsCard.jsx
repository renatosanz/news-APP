import React from 'react'
import './BundleNews.css'

export default function NewsCard({title,resume,image,topic,linkSource}) {
  if (image===null) {
    image='https://picsum.photos/400/300?random='+Math.random()
  }
  return (
    <a href={linkSource} target='_blank'>
      <div className='NewsCard'>
        <div className='cont_NewsCard'>
          <div className='img_NewsCard' style={{backgroundImage:"url("+image+")"}}></div>
          <div className='footer_NewsCard'>
            <h3>{title}</h3>
            <p>{resume}</p>
            <div className='keywordsSection'>
              <span className='keywordsSpan'>{topic} </span>
            </div>
          </div>
        </div>
      </div>
    </a>
  )
}
