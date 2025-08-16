import React from 'react'

const MiniProfile = () => {
  return (
    <div className='flex items-center justify-between mt-14 ml-10 '>
        <img className='h-16 rounded-full border p-[2px]' src="https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/male/512/80.jpg" alt="" />
        <div className='flex-1 ml-4'>
            <h2 className='font-bold'>user</h2>
            <h3 className='text-gray-400 text-sm'>welcome to instagram</h3>
        </div>
        <button className='font-semibold text-blue-400 text-sm'>sign out</button>
    </div>
  )
}

export default MiniProfile