import Image from 'next/image'
import React from 'react'

const Header = () => {
  return (
    <div>

     <div className='flex items-center justify-between max-w-6xl '>
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

        <h2>Right side </h2>
     </div>
    </div>
  )
}

export default Header