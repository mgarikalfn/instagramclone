import { Input, InputBase, InputLabel } from '@mui/material'
import { FormInput, HomeIcon, PlusCircleIcon, Search } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const Header = () => {
  return (
   <div className='shadow-sm border-b sticky top-0 pl-1 pr-1 bg-white'>
     <div className='flex items-center justify-between max-w-6xl  '>

        <div className='cursor-pointer h-24 w-24 relative hidden lg:inline-grid '>
            <Image src="https://assets.turbologo.com/blog/en/2019/09/19084953/instagram-logo-illustration.png"
              alt=''
              layout='fill'
              className='object-contain'
              />
        </div>
          <div className='cursor-pointer h-24 w-10 relative  lg:hidden '>
            <Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Instagram_logo_2022.svg/1200px-Instagram_logo_2022.svg.png?20220518162235"
              alt=''
              layout='fill'
              className='object-contain'
              />
        </div>
      {/* middle */}
      <div className='relative mt-1'>
        <div className='absolute top-2 left-2'>
          <Search className='h-5 text-gray-400'/> 
        </div>
        <input type='text' placeholder='search' className='bg-gray-50 pl-50 border-gray-500 text-sm focus:ring-black focus:border-black ' />
      </div>

       {/* Right */}
       <div className='flex space-x-4 items-center'>
        <HomeIcon className='hidden md:inline-flex cursor-pointer hover:scale-125 transition-transform duration-200 ease-out'/>
        <PlusCircleIcon className='cursor-pointer hover:scale-125 transition-transform duration-200 ease-out'/>
        <img src="https://images.unsplash.com/photo-1466112928291-0903b80a9466?q=80&w=1173&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className='h-12 rounded-full cursor-pointer' />
       </div>
     </div>
    </div>
  )
}

export default Header