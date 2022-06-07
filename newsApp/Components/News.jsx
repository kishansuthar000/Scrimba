import axios from 'axios';
import React from 'react'
import NewsItem from './NewsItem'
import Sample from './sample.json'
// let articles=[
//     {
//           title:"firstNews",
//           image:"https://images.hindustantimes.com/img/2022/06/06/550x309/Nupur-Sharma-BJP-media-chief-Naveen_1654509704234_1654509724066.jpg",
//           description:"React class-based components: In this react course, we will see how to learn react using projects",
//           url:"https://www.hindustantimes.com/india-news/nupur-sharma-naveen-jindal-not-original-creators-of-islamophobia-chidambaram-101654509420938.html"
//     },
//     {
//         title:"firstNews",
//         image:"https://images.hindustantimes.com/img/2022/06/05/550x309/winter-session-of-parliament-2019_df642574-e3ed-11ea-a73d-37b3f13c5782_1654441244578.jpg",
//         description:"React class-based components: In this react course, we will see how to learn react using projects",
//         url:"https://www.hindustantimes.com/india-news/shashi-tharoor-slams-bjp-as-row-erupts-over-comments-on-prophet-101654437881157.html"
//   },
//   {
//     title:"firstNews",
//     image:"https://images.hindustantimes.com/img/2022/06/06/550x309/Untitled_design_-_2022-06-06T175533.117_1654518338660_1654518357289.png",
//     description:"React class-based components: In this react course, we will see how to learn react using projects",
//     url:"https://www.hindustantimes.com/entertainment/bollywood"
// },
// {
//     title:"firstNews",
//     image:"https://images.hindustantimes.com/img/2022/06/06/550x309/dhoni-2016-getty_1654515327472_1654515334488.jpg",
//     description:"React class-based components: In this react course, we will see how to learn react using projects",
//     url:"https://www.hindustantimes.com/cricket"
// },
// {
//     title:"firstNews",
//     image:"https://images.hindustantimes.com/img/2022/06/06/550x309/ANI-20220504054-0_1654516658656_1654516684080.jpg",
//     description:"React class-based components: In this react course, we will see how to learn react using projects",
//     url:"https://www.hindustantimes.com/entertainment/bollywood/gangster-lawrence-bishnoi-being-investigated-in-sidhu-moose-wala-death-also-questioned-over-salman-khan-threat-letter-101654515837862.html"
// },
// ]
export default function News() {
    const[news,setNews]=React.useState([])
 
    React.useEffect(() => {
      axios.get("https://newsapi.org/v2/top-headlines?country=in&apiKey=08fb7e63dfd247e8bc7b7f8c8f4ad59c")
        .then((data) => {
         console.log("data",data.data.articles)
          setNews(data.data.articles);
          
        });
    }, []);
   

  return (
    <>
        <h2 align="center">Top Headlines</h2>
        <NewsItem newsData={news}/>
    </>
  )
}
