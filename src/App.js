import React,{useEffect,useState} from "react";
import axios from "axios";

function App() 
{
  const [news,setNews]=useState([]);

  useEffect(()=>{
    axios.get("https://newsapi.org/v2/top-headlines?country=in&apiKey=ee156ed1b2a34f5e854675d632b52d1e")
    .then((res)=>{
      console.log(res.data.articles);
      setNews(res.data.articles);
    })
  },[])

  return (

    <div>

    <header>Daily News</header>

    <div className="container my-5">
      
        <div className="row text-center">

          {
            news.map((val)=>{
              if(val.urlToImage != null)
              {
              return (

                <div className="col my-3">

                
            
                  <div className="card" style={{width: "18rem"}}>
                    <img src={val.urlToImage} className="card-img-top" alt="..."/>
                    <div className="card-body">
                      <h5 className="card-title">{val.title.slice(0,70)+"..."}</h5>
                      <p className="card-text">{val.description.slice(0,150)+"..."}</p>
                      <a target="_blank" rel="noopener" href={val.url}>See More</a>
                    </div>
                  </div>

                </div>

            
                
              )
              }
            })
          }

        </div>

    </div>

    </div>
  )
}

export default App;