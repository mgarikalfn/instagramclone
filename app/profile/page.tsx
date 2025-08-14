import { CheckIcon, ChevronLeft, Cog } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import PostsGrid from '../components/PostsGrid'

const ProfilePage = () => {
  return (
    <main>
    <section className='flex justify-between'>
        <button>
            <ChevronLeft/>
        </button>
        <div className='flex justify-center items-center gap-2'>
            my_name_is_jonny
            <div className='size-5 rounded-full bg-red-400 inline-flex justify-center items-center'>
                <CheckIcon size={16}/>
            </div>
        </div>
        <button>
            <Cog/> 
        </button>
    </section>

    <section className='mt-8 flex justify-center'>
        <div className='size-48 p-2 rounded-full bg-gradient-to-tr from-orange-300 to-red-400'>
            <div className='size-44 bg-white p-2 rounded-full'>
                <div className='size-40 aspect-square overflow-hidden rounded-full'>
            <img src="https://images.unsplash.com/photo-1628563694622-5a76957fd09c?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        </div>
            </div>
        </div>
    </section>

    <section className='text-center mt-4'> 
        <h1 className='text-xl font-bold'>jonny</h1>
        <p className='text-gray-500 mt-1 mb-1'>Bussiness account</p>
        <p>Enterpreneur , student</p>
    </section>

    <section>
       <div className='flex justify-center gap-4 font-bold'>
         <Link href={'/'}>Posts</Link>
        <Link className='text-gray-400' href={'/'}>Highlights</Link>
       </div>
    </section>
    <section className='w-full flex justify-center'>
        <PostsGrid/>
    </section>
    </main>
  )
}

export default ProfilePage