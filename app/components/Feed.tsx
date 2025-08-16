import React from 'react'
import Stories from './Stories'
import Posts from './Posts'

const Feed = () => {
  return (
   <main className='grid grid-cols-1 md:grid-cols-3 md:max-w-6xl mx-auto'>
    <section className='md:col-span-2'>
      <Stories/>
      {/* stories */}
      {/* posts */}
      <Posts/>
    </section>

    <section className='hidden md:inline-grid '>
      {/* mini-profile */}
      {/* suggestions */}
    </section>
   </main>
  )
}

export default Feed