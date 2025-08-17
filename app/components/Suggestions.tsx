import { faker } from '@faker-js/faker'
import React, { useEffect, useState } from 'react'

type Suggestion = {
  avatar:string
    name:string,
    jobTitle:string,
    id:string,
    
}
const Suggestions = () => {
    const [suggestions , setSuggestions] = useState<Suggestion[]>([])
    useEffect(()=>{
        const suggestions:Suggestion[] = Array.from({length:5},()=>({
          name:faker.person.firstName(),
          jobTitle:faker.person.jobTitle(),
          id:faker.string.uuid(),
          avatar:faker.image.avatar(),

        }))
        setSuggestions(suggestions);
        console.log(suggestions)
    },[])
  return (
    <div className='mt-4 ml-10 '>
        <div className='flex justify-between mb-5 text-sm '>
            <h3 className='font-bold text-gray-400'>suggestions for you</h3>
            <button className='text0gray-600 font-semibold'>see all</button>
        </div>
        
       {suggestions.map(suggestion=>(
        <div key={suggestion.id} className='flex items-center justify-between mt-3'>
          <img className='h-10 rounded-full border p-[2px]' src={suggestion.avatar} alt="" />
          <div className='flex-1/3 ml-4'>
            <h2 className='font-semibold text-sm'>{suggestion.name}</h2>
            <h3 className='text-sm text-gray-400  truncate w-[230px] '>{suggestion.jobTitle}</h3>
          </div>
          <button className='text-blue-400 font-semibold text-sm'>follow</button>
        </div>
       ))}
    </div>
  )
}

export default Suggestions