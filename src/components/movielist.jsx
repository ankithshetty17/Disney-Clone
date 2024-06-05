import React, { useEffect, useState } from 'react'
import globalapi from '../services/globalapi';
import Moviecard from './moviecard';


function Movielist({genreId}) {
 const[movieList,setmovieList]=useState([])
    useEffect(()=>{
 getMovieByGenreId();
 },[])

    const getMovieByGenreId= ()=>{
        globalapi.getMovieByGenreId(genreId).then(resp=>{
            // console.log(resp.data.results)
            setmovieList(resp.data.results)
        })
    }
  return (
    <div>
        
    <div className='flex gap-8 overflow-x-auto scrollbar-hide pt-5 px-3 pb-5'>
        {movieList.map((item,index)=>(
            <Moviecard  movie={item}/>
        ))}
        </div>
    </div>
  )
}

export default Movielist