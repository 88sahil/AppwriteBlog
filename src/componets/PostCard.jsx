import React from 'react'
import Services  from '../Appwrite/Config/Confing'
import { Link } from 'react-router-dom'
const PostCard = ({
    $id,
    title,
    featuredImage
}) => {
    console.log(Services.getFilePreview(featuredImage))
  return (
        <Link to={`/post/${$id}`}>
            <div className='w-full bg-gray-100 rounded-xl p-2'>
                <div className='w-full mb-4'>
                    <img src={Services.getFilePreview(featuredImage)} alt={title} className=' object-contain rounded-xl'></img>
                </div>
                <h2 className='text-2xl justify-center flex w-full items-center sm:text-sm'>{title}</h2>
            </div>
        </Link>
  )
}

export default PostCard