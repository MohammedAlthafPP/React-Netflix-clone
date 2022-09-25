import React,{useEffect,useState} from 'react'

import axios from '../../axios';
import Youtube from 'react-youtube'
import {imageUrl,API_Key} from '../../constants/constants'
import "./Rowpost.css"

function Rowpost(props) {
  const [movies,setMovies] = useState([]);
  const [urlId, setUrlId] = useState('');
  useEffect(() => {

    axios.get(props.url).then(response=>{
      console.log(response.data,"Row Posts")
      setMovies(response.data.results)
    }).catch(err=>{
      alert("Network Error")
    })
  }, []);

  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

  const handleMovie = (id)=>{
    console.log(id,"iiiiiiiiiiiiiiiiDddd");
      axios.get(`movie/${id}/videos?api_key=${API_Key}&language=en-US`).then(response=>{
        console.log(response.data);
        if(response.data.results.length !==0){
          setUrlId(response.data.results[0])
        }else{
          alert('NO Records Found')
        }
      }).catch((err)=>{
        if(err.response){
          alert('NO Records Found')
        }
       
      })
  }
  
  return (
    <div className='rowpost' >
       <h1>{props.title}</h1>
       

    
       <div className='posters'>
        {movies.map((obj)=>
          <img onClick={()=>handleMovie(obj.id)} className={props.isSmall ? 'smallPoster' :'poster'} src={`${imageUrl+obj.backdrop_path}`} alt="poster" />

        )}

        
       </div>
      
     { urlId &&  <Youtube videoId={urlId.key} opts={opts} />  } 
        </div>
  )
}

export default Rowpost