import React from "react";
import './CSS/NewsItem.css'
export default function NewsItem(props) {
    // console.log("iten",props.newsData)
    // console.log("title",props.newsData.articles[0].title)
  return (
    <>
    
      <div className="news-container" >
      {props.newsData.map((item,i)=>{
              return  <div className="card" key={i}>
          <img
            src={item.urlToImage ==null ? "https://cdn.cnn.com/cnnnext/dam/assets/220505091404-office-worker-distracted-stock-exlarge-169.jpg" : item.urlToImage}
            alt="img not found"
          />
          <div className="description">
            <h3>{item.title.slice(0,40)}...</h3>
            <p>{item.description== null ? "create a callback function. This callback function will retrieve the data from the child component." :item.description.slice(0,80)}</p>
            <a href={item.url}>Read More</a>
          </div>
        </div>
          })
      }
        
      </div>
    </>
  );
}
