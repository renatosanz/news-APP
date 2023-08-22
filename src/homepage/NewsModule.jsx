import "./Homepage.css"
import TopNews from "./TopNews";


export default function NewsModule({newOfTheDay,news}) {
  return (
    <div id={"NewsModule"}>
      <div id="newOfTheDay">
        <TopNews title={newOfTheDay.title} 
          topic={newOfTheDay.author} 
          image={newOfTheDay.urlToImage}
          linkSource={newOfTheDay.url}
        />
      </div>
      <div id="secundaryNews">
        {
          news?.map((item) =><TopNews 
          title={item.title} 
          topic={item.author}
          image={item.urlToImage}
          linkSource={item.url}
          />)
        }
      </div>
    </div>
  )
}