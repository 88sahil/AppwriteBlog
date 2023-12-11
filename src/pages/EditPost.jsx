import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import  Services  from '../Appwrite/Config/Confing'
import PostForm from '../componets/PostForm/PostForm'

const EditPost = () => {
    const [post,setpost]=  useState(null)
    const {slug} = useParams()
    const navigate = useNavigate()
   useEffect(()=>{
    if(slug){
        Services.getPost(slug).then((post)=>{
            if(post){
                setpost(post)
            }
        })
    }else{
        navigate("/")
    }
   },[slug,navigate])
  return (
    <div>
        <PostForm post={post} />
    </div>
  )
}

export default EditPost