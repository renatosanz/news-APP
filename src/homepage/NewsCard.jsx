import React from 'react'
import './BundleNews.css'

export default function NewsCard({title,abstract,image,section,url,keywords}) {
  return (
    <a href={url} className='NewsCard' target='_blank'>
      <div className='bg_NewsCard'>
        <div className='cont_NewsCard'>
          <div className='cont_img'>
            <div className='img_NewsCard' style={{backgroundImage:"url("+"https://static01.nyt.com/"+image+")"}}></div>
            <div className='byline'>
              <span>{section}</span>
            </div>
          </div>
          <div className='footer_NewsCard'>
            <h3>{title}</h3>
            <div className='keywordsSection'>
              <span>Tags:</span>
              <a href={"http://www.google.com/search?q="+keywords[0].value} target='blank_' className='keywordsSpan'>{keywords[0].value}</a>
              <a href={"http://www.google.com/search?q="+keywords[1].value} target='blank_' className='keywordsSpan'>{keywords[1].value}</a>
              <a href={"http://www.google.com/search?q="+keywords[2].value} target='blank_' className='keywordsSpan'>{keywords[2].value}</a>
            </div>
          </div>
        </div>
      </div>
    </a>
  )
}
