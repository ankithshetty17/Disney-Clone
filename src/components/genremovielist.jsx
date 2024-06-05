import React from 'react'
import Genreslist from '../constants/genreslist'
import Movielist from './movielist'

function Genremovielist() {
  return (
    <div>
        {Genreslist.genere.map((item,index)=>index<=4&&(
     <div className='p-8 px-8 md:px-16'>
        <h2 className=' text-[20px] font-bold '>{item.name}</h2>
        <Movielist genreId={item.id}/>
     </div>
        ))}
    </div>
  )
}

export default Genremovielist