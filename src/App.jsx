import './App.css';
import React, { useEffect, useState } from 'react'
import Navbar from './homepage/Navbar';
import NewsModule from './homepage/NewsModule';
import WelcomeLabel from './homepage/WelcomeLabel';
import BundleNews from './homepage/BundleNews';

function App() {

  const Topics = [
    { title: "Inicio", color: "#3498db" },
    { title: "Política", color: "#e74c3c" },
    { title: "Economía", color: "#2ecc71" },
    { title: "Internacional", color: "#f39c12" },
    { title: "Tecnología", color: "#9b59b6" },
    { title: "Cultura", color: "#1abc9c" },
    { title: "Deportes", color: "#f39c12" },
    { title: "Opinión", color: "#7f8c8d" },
    { title: "Contacto", color: "#95a5a6" }
  ];

  const [data,setData] = useState(null)

  useEffect(()=>{
    let today = new Date();
    let todayDate = today.getFullYear()+"-"+(today.getMonth()+1)+"-"+today.getDate();

    /*yesterday date*/
    let yesteday = new Date(today);
    yesteday.setDate(yesteday.getDate() - 1);
    let yestedayDate = yesteday.getFullYear()+"-"+(yesteday.getMonth()+1)+"-"+yesteday.getDate();
  
    /*last week date*/
    let lastWeek = new Date(today);
    lastWeek.setDate(lastWeek.getDate() - 7);   
    let lastWeekDate = lastWeek.getFullYear()+"-"+(lastWeek.getMonth()+1)+"-"+lastWeek.getDate();

    fetch("https://newsapi.org/v2/everything?from="+lastWeekDate+"&to="+todayDate+"&sortBy=popularity&pageSize=12&language=es&q=mexico&apiKey=0d40c52dfdf04db2813d7822234cbb7c")
      .then(res => res.json())
      .then(dataJSON => {
        console.log(dataJSON.articles)
        setData(dataJSON.articles)
      })
  },[])

  return (
    <div id='body-content'>
      <Navbar linkList={Topics}/>
      <div id='page-content'>
        <WelcomeLabel/>      
        <NewsModule newOfTheDay={data ? data[0]:[]} news={data ? [data[1], data[2], data[3], data[5]] : []}/>
        <div>
            <BundleNews topic={'Ultimas 24hrs'} topicColor={'#232323'} items={data ? [data[6], data[7], data[8]] : []}/>
            <BundleNews topic={'Ultima semana'} topicColor={'#232323'} items={data ? [data[9], data[10], data[11]] : []}/>
        </div>
      </div>
    </div>
  );
}

export default App;
