import React from 'react'

const Buttons = () => {
  const [likes, setLikes] = React.useState(0)

  return (
    <div>
      <Like setLikes={setLikes} likes={likes} />
      {likes > 0 ?? <Unlike setLikes={setLikes} likes={likes} />}
    </div>
  )
}

const Like = ({ setLikes, likes }) => {
  return (
    <button onClick={() => setLikes(likes + 1)}>
      Likes: {likes}
    </button>
  )
}

const Unlike = ({ setLikes }) => {
  return (
    <button onClick={() => setLikes(0)}>
      Unlike
    </button>
  )
}

export default Buttons