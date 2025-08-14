
import React from 'react'
import Masonry from '@mui/lab/Masonry';
const images = [
    'https://images.unsplash.com/photo-1754147388611-c0f0179a05b5?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://plus.unsplash.com/premium_photo-1732489895154-3772980b2a43?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1753748689944-9147de3608e8?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://plus.unsplash.com/premium_photo-1754079457578-867ed85dad60?q=80&w=1026&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
]
const PostsGrid = () => {
  return (
    <Masonry columns={2} spacing={2} >
         
        {images.map(src => (
            <img src={src} alt='' key={src} className='w-full object-cover mx-auto rounded-lg'/>
        ))}
    
    </Masonry>
  )
}

export default PostsGrid