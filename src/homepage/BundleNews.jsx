import React from 'react'
import './BundleNews.css'
import NewsCard from './NewsCard'

export default function BundleNews({topic,topicColor,items}) {
  return (
    <div className='BundleNews'>
      <div className='titleTopic' style={{display:'flex'}}>
        <div style={{
          background:topicColor,
          height:'1rem',
          width:'1rem',
          margin:'0 1rem 0 0'
        }}></div>
        <h2>{topic}</h2>
      </div>
      <div className='BundleCards'>
        {
          items?.map((item)=>
            <NewsCard 
            title={item.title} 
            resume={item.description} 
            topic={item.source.name}
            image={item.urlToImage}
            linkSource={item.url}/>
          )
        }
      </div>
    </div>
  )
}
