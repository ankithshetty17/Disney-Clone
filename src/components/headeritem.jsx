import React from 'react'

function Headeritem({name,Icon}) {
  return (
    <div className='flex text-white font-semibold gap-3 text-[20px] items-center cursor-pointer hover:underline underline-offset-8 mb-3'>
        <Icon/>
        <h2 className=''> {name}</h2> 
    </div>
  )
}

export default Headeritem