import React from 'react'
const Image_Base_Url= "https://image.tmdb.org/t/p/original";
function Moviecard({movie}) {
  return (
    <>
        <img src={Image_Base_Url+movie.poster_path} className=' w-[110px] md:w-[200px]
        rounded-lg hover:border-[3px] border-gray-50  hover:scale-110 transition-all duration-150 ease-in cursor-pointer'/>
    </>
  )
}

export default Moviecard