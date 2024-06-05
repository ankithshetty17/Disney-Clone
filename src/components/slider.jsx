import React, { useEffect , useRef, useState} from 'react'
import globalapi from '../services/globalapi'
import { HiChevronRight , HiChevronLeft  } from "react-icons/hi";
const Image_Base_Url= "https://image.tmdb.org/t/p/original";


function Slider() {
    const [movieList,setmovieList]= useState([]);
    useEffect(()=>{
        getTrendingMovies();
    },[])
    const getTrendingMovies = ()=>{
       globalapi.getTrendingVideos.then(resp=>{
        console.log(resp.data.results);
        setmovieList(resp.data.results);
       }) 
    }
    const elementRef=useRef();

    const sliderRight= (element)=>{
    element.scrollLeft+=screenWidth-110;
}
const sliderLeft= (element)=>{
    element.scrollLeft-=screenWidth-110;
}
const screenWidth = window.innerWidth;
  return (
    <div>
        <HiChevronLeft className='hidden md:block absolute  text-[35px] mt-[180px] mx-8 cursor-pointer scroll-smooth' 
        onClick={()=>sliderLeft(elementRef.current)}/>
        <HiChevronRight className='hidden md:block absolute  text-[35px] mt-[180px] mx-8  right-0 cursor-pointer scroll-smooth'
        onClick={()=>sliderRight(elementRef.current)}/>
    <div className='flex overflow-x-auto w-full px-16 py-4 scrollbar-hide' ref={elementRef}>
{movieList.map((item,index)=>( 
   <img src= {Image_Base_Url+item.backdrop_path} 
   className='min-w-full md:h-[360px] object-cover object-left-top mr-5 rounded-lg
   hover:border-[3px] border-gray-200 transiti-all duration-100 ease-in '/>
))}

    </div>
    </div>
  )
}

export default Slider