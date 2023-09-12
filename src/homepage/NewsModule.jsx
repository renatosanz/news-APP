import "./Homepage.css"
import TopNews from "./TopNews";


export default function NewsModule({newOfTheDay,news}) {
  return (
    <div id={"NewsModule"}>
      <div id="newOfTheDay">
        <TopNews  item={newOfTheDay} title={newOfTheDay.headline.main} image={ newOfTheDay.multimedia[0].url}/>
      </div>
      <div id="secundaryNews">
        {
          news?.map((item) =><TopNews item={item} title={item.headline.main} image={ item.multimedia[0].url}/>)
        }
      </div>
    </div>
  )
}
