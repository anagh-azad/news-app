import React,{useEffect,useState} from "react";
import axios from "axios";
import "./App.css";

function App() 
{
  const [news1,setNews]=useState([]);
  const [category,setCategory]=useState("general");

  useEffect(()=>{
    axios.get(`https://gnews.io/api/v4/top-headlines?category=${category}&lang=en&country=in&apikey=2f143e7e4456d085111de7e748a89272`)
    .then((res)=>{
      console.log(res.data.articles);
      setNews(res.data.articles);
    })
  },[category])

  const news=news1.slice(0,-2);

  function Change(event){
    setCategory(event.target.value);
    //console.log(event);
  }

  return (

    <div>

    <header className="title">Daily News</header>
    
    
      <nav className="navbar">
        <ul>
          <li><button class="a" onClick={Change} value="general">General</button></li>
          <li><button class="b" onClick={Change} value="sports">Sports</button></li>
          <li><button class="c" onClick={Change} value="entertainment">Entertainment</button></li>
          <li><button class="e" onClick={Change} value="health">Health</button></li>
          <li><button class="f" onClick={Change} value="technology">Technology</button></li>
          <li><button class="g" onClick={Change} value="business">Business</button></li>
        </ul>
      </nav>
    


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
                          <a target="_blank" rel="noopener" href={val.url}>See Full Article</a>
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