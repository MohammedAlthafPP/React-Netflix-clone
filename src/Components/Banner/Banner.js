import React,{useEffect,useState} from 'react'
import axios from '../../axios';
import {API_Key,imageUrl} from '../../constants/constants'
import "./Banner.css"

function Banner() {
  const [movie,setMovie] = useState();
  console.log(movie,"movie");
  useEffect(() => {
    axios.get(`/trending/all/week?api_key=${API_Key}&language=en-US`).then((response)=>{
      console.log(response.data.results[0]);
      setMovie(response.data.results[0])
    })
  }, []);
  return (
    <div style={{backgroundImage:`url(${movie? imageUrl+movie.backdrop_path : ""})`}} className='banner'>
       <div className='content'>
            <h1 className='title'>{movie?movie.title :""}</h1>
            <div className='banner_button'>
                <button className='button'>Play</button>
                <button className='button'>My list</button>

            </div>
            <h1 className='discription'>{movie? movie.overview : ""}</h1>

       </div>
       <div>
        <div className="fade_bottom">

        </div>


       </div>
        </div>
  )
}

export default Banner