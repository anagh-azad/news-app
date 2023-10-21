import React,{useEffect,useState} from "react";
import axios from "axios";

function App() 
{
  const [news,setNews]=useState([]);

  useEffect(()=>{
    axios.get("https://gnews.io/api/v4/top-headlines?category=general&lang=en&country=in&apikey=2f143e7e4456d085111de7e748a89272")
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
              if(val.image != null)
              {
              return (

                <div className="col my-3">

                
            
                  <div className="card" style={{width: "18rem"}}>
                    <img src={val.image} className="card-img-top" alt="..."/>
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