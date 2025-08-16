import React from 'react'
import { UserPost } from './Posts'
import { Bookmark, BookMarkedIcon, DotIcon, EllipsisVertical, HeartIcon, MessageSquare, MessageSquareMore, Smile } from 'lucide-react'

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
      {/* post buttons */}
      <div className='flex justify-between px-4 pt-4'>
        <div className='flex space-x-4'>
          <HeartIcon className='btn'/>
          <MessageSquareMore className='btn'/>
        </div>
        <Bookmark className='btn'/>
      </div>

      {/* post comments */}
      <p className='p-5 truncate'><span className='font-bold mr-2'>{name}</span>{caption}</p>

      {/* post input box */}
      
      <form action="" className='flex items-center p-4'>
        <Smile/>
        <input className='border-none flex-1 focus:ring-0' type="text" placeholder='enter your comment ...' />
        <button className='text-blue-400 font-bold'>Post</button>
      </form>
    </div>
  )
}

export default  Post