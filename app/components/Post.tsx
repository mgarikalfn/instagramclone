import React from 'react'
import { UserPost } from './Posts'
import { DotIcon, EllipsisVertical } from 'lucide-react'

const  Post : React.FC<UserPost> = ({ image, avatar, name,caption}:UserPost) => {
  return (
    <div className='bg-white my-7 border border-gray-200 rounded-sm'> 
      {/* Post Header */}
      <div className='flex items-center p-5'>
        <img className='h-12 rounded-full object-cover border p-1 mr-3' src={avatar} alt="avatar" />
        <p className='font-bold flex-1/2'>{name}</p>
        <EllipsisVertical/>
      </div>
      {/* Post image */}
      <img className='object-cover w-full' src={image} alt="" />
    </div>
  )
}

export default  Post