'use client'

import React, { useEffect, useState } from 'react'
import { faker } from '@faker-js/faker';
import { Users } from 'lucide-react';
import Story from './Story';

type User = {
  id:string,
  name:string,
  avatar:string
}
const Stories = () => {
    const [storyUsers, setStoryUsers] = useState<User[]>([]);
    useEffect(()=>{
      const storyUsers:User[] = Array.from({length:20},()=>({
        id:faker.string.uuid(),
        name:faker.person.firstName(),
        avatar:faker.image.avatar()

      }))
      setStoryUsers(storyUsers);
      console.log(storyUsers);
    },[]);
  return (
    <div className='flex space-x-2 p-6 bg-white mt-8 border-gray-200 border overflow-x-scroll rounded-sm scrollbar-none'>
      {storyUsers.map(user =>(
        <Story key={user.id} name ={user.name} avatar={user.avatar}/>
      ))}
    </div>
  )
}

export default Stories