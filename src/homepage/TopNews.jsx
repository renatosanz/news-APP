import { motion } from 'framer-motion'
import React from 'react'

export default function TopNews({item,image,title}) {
  return (
    <a href={item.web_url} target='_blank'>
      <motion.div className='TopCard noUserSelect' 
      transition={{duration:0.3}} 
      whileHover={{boxShadow:' inset 0px -150px 150px -20px rgba(0, 0, 0, 0.8)'}} 
      style={{backgroundImage:"url("+"https://static01.nyt.com/"+image+")"}}>
        <div className='contTopCard' >
          <section className='headerTopCard'>
            <h2>{title}</h2>
          </section>
          <section className='footerTopCard'>
            <h3>{item.section}</h3>
          </section>
        </div>
      </motion.div>
    </a>
  )
}
