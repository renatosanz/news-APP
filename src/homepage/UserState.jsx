import React from 'react'
import "./Homepage.css"
import { motion } from 'framer-motion';

export default function UserState() {
  return (
  <motion.div id='sign-up'  whileHover={{backgroundColor:'#2b2b2b'}}>
    <div id='user-icon'>
      ⌘
    </div>
    <h3 style={{margin:'auto'}}>Sign Up</h3>      
  </motion.div>
  )
}
