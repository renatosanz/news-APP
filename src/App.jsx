import './App.css';
import React, { useEffect, useState } from 'react'
import Navbar from './homepage/Navbar';
import NewsModule from './homepage/NewsModule';
import WelcomeLabel from './homepage/WelcomeLabel';
import BundleNews from './homepage/BundleNews';

function App() {

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


  const Topics = [
    { id:0,title: "Inicio",topic:"all", color: "#3498db" },
    { id:1,title: "Política",topic:"politics", color: "#e74c3c" },
    { id:2,title: "Economía",topic:"economy", color: "#2ecc71" },
    { id:3,title: "Internacional",topic:"international", color: "#f39c12" },
    { id:4,title: "Tecnología",topic:"technology", color: "#9b59b6" },
    { id:5,title: "Cultura",topic:"culture", color: "#1abc9c" },
    { id:6,title: "Deportes",topic:"sports", color: "#f39c12" },
    { id:7,title: "Criptos",topic:"cryptos", color: "#7f8c8d" },
  ];

  const [currentTopic, setCurrentTopic] = useState(Topics[0]);

  const changeTopic=(topicNum)=>{
    setCurrentTopic(Topics[topicNum])
    getMainNews()
    get24hrsNews()
    getLastWeekNews()
  }

  const [mainData,setMainData] = useState(null)
  const getMainNews = () =>{
    fetch("https://newsapi.org/v2/everything?from="+yestedayDate+"&to="+todayDate+"&q="+currentTopic.topic+"&sortBy=popularity&pageSize=5&apiKey=0d40c52dfdf04db2813d7822234cbb7c")
    .then(res => res.json())
    .then(dataJSON => {
      console.log(dataJSON.articles)
      setMainData(dataJSON.articles)
    })
  }


  const [data24hrs,setData24hrs] = useState(null)
  const get24hrsNews = () =>{
    fetch("https://newsapi.org/v2/everything?from="+yestedayDate+"&to="+todayDate+"&q="+currentTopic.topic+"&sortBy=relevancy&pageSize=3&apiKey=0d40c52dfdf04db2813d7822234cbb7c")
    .then(res => res.json())
    .then(dataJSON => {
      console.log(dataJSON.articles)
      setData24hrs(dataJSON.articles)
    })
  }


  const [lastWeekData,setLastWeekData] = useState(null)
  const getLastWeekNews = () =>{
    fetch("https://newsapi.org/v2/everything?to="+lastWeekDate+"&q="+currentTopic.topic+"&sortBy=popularity&pageSize=3&apiKey=0d40c52dfdf04db2813d7822234cbb7c")
    .then(res => res.json())
    .then(dataJSON => {
      console.log(dataJSON.articles)
      setLastWeekData(dataJSON.articles)
    })
  }

  useEffect(()=>{
    getMainNews()
    get24hrsNews()
    getLastWeekNews()
  },[])

  return (
    <div id='body-content'>
      <Navbar linkList={Topics} fun={changeTopic}/>
      <div id='page-content'>
        <WelcomeLabel pageTopic={currentTopic}/>      
        
        <NewsModule newOfTheDay={mainData ? mainData[0]:[]} 
        news={mainData ? [mainData[1],mainData[2],mainData[3],mainData[4]]: []}/>

        <div>
            <BundleNews topic={'Ultimas 24hrs'}
            topicColor={'#232323'}
            items={data24hrs ? data24hrs : []}/>
            
            <BundleNews topic={'Ultima semana'} 
            topicColor={'#232323'} 
            items={lastWeekData ? lastWeekData : []}/>
        </div>
      </div>
    </div>
  );
}

export default App;
