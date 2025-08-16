import React from 'react'

type storyProps = {
    name:string,
    avatar:string
}
const Story :React.FC<storyProps>= ({avatar,name}) => {
  return (
    <div>
        <img src={avatar} alt={name} />
        <p>{name}</p>
    </div>
  )
}

export default Story