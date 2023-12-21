import React from 'react'
import Services  from '../Appwrite/Config/Confing'
import { Link } from 'react-router-dom'
const PostCard = ({
    $id,
    title,
    featuredImage
}) => {
  return (
        <Link to={`/post/${$id}`}>
            <div className='w-[300px] h-[250px] bg-gray-300 p-2 rounded-md shadow-sm shadow-green-300'>
                <div className=''>
                    <img src={Services.getFilePreview(featuredImage)}  className="w-full h-[200px] object-cover rounded-lg" alt={title}></img>
                </div>
                <h2 className='text-center mt-2 font-bold'>
                    {title}
                </h2>
            </div>
        </Link>
  )
}

export default PostCard