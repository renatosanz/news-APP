import React, { useState } from 'react'
import "./Homepage.css"
import { motion } from 'framer-motion';
import UserState from './UserState';

export default function Navbar({linkList,fun}) {
  
  const [toggleClass,setToggleClass] = useState('links_PopUp')
  const [isToggle, setIsToggle] = useState(false);


  const numberColumns = (n) =>{
    let gridColumns = '';
    for (let i = 0; i < n; i++) {
      gridColumns += "1fr ";
    }
    return gridColumns;
  }

  const toggleMobileNavBar = () => {
    if (isToggle === true) {
      setToggleClass('links_PopUp');
      setIsToggle(false);
    } else if (isToggle === false) {
      setToggleClass('links_PopUp_Active');
      setIsToggle(true);
    }
  };

  return (
    <div id='fixed-div'>
      <div id='nav-content'>
        <div id='navbar' className='noUserSelect'>
          <div id='logo'>
            <h3>APP NEWS</h3>
          </div>
          <div id='links' style={{gridTemplateColumns:numberColumns(linkList.length)}}>
          {
            linkList.map((item) => <motion.div 
            onClick={()=>fun(item.id)} 
            transition={{duration:0.1}} 
            className='link' 
            whileHover={{borderBottom:"solid 2px "+item.color} }>
              {item.title}   
            </motion.div>)
          }
          </div>          
          <div id='mobile_navbar' onClick={toggleMobileNavBar}>
            <span>⌅</span>
          </div>
          <div id={toggleClass}>
            <h2 style={{margin:'auto'}}>Secciones</h2>
            <div id={'mobileGridLinks'}>
              {
                linkList.map((item) => <motion.div
                onClick={()=>fun(item.id)} 
                style={{backgroundColor:item.color+"80", fontSize:'1rem'}}
                transition={{duration:0}}
                className='link' 
                whileHover={{backgroundColor:'#ffffff20'}}>
                  {item.title}
                </motion.div>)
              }
              <div id='toggleDarkMode'>
                <button>DarkMode</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
