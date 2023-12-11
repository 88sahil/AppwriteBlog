import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate, useParams,Link } from 'react-router-dom'
import  Services  from '../Appwrite/Config/Confing'
import Container from '../componets/container/Container'
import parse from 'html-react-parser'
const Post = () => {
    const [post,setpost] = useState(null)
    const {slug} = useParams()
    const navigate = useNavigate()
    const userData = useSelector((state)=> state.auth.UserData)
    
    const isauthor = post && userData ? post.userId === userData.$id : false;
    useEffect(()=>{
        if(slug){
            Services.getPost(slug).then((post)=>{
                if(post){
                    setpost(post)
                }else{
                    navigate("/")
                }
            })
        }else{
            navigate("/")
        }
    },[slug,navigate])
    const deletePost =()=>{
        Services.deletePost(post.$id).then((status)=>{
            if(status){
                Services.deleteFile(post.featuredImage);
                navigate("/")
            }
        })
    }
  return post ?(
    <div className='py-8 px-4'>
        <Container>
            <div className='"w-full flex justify-center mb-4 relative border rounded-xl p-2'>
                <img src={Services.getFilePreview(post.featuredImage)} alt={post.title} className='rounded-lg'>
                </img>
            </div>
            <div className="w-full mb-4">
                    <h1 className="text-2xl font-bold">{post.title}</h1>
            </div>
                <div className="browser-css py-4 font-serif text-lg justify-center">
                   
                    {parse(post.content)}
                <div>
                {
                isauthor && (
                    <div className="">
                    <Link to={`/edit-post/${post.$id}`}>
                        <button bgColor="" className="mr-3 bg-green-500 px-2 py-1.5 text-white duration-200 active:scale-90 rounded-lg">
                            Edit
                        </button>
                    </Link>
                    <button bgColor="" className='bg-red-500 px-2 py-1.5 text-white duration-200 active:scale-90 rounded-lg' onClick={deletePost}>
                        Delete
                    </button>
                </div>
                )
               }
                </div>
            </div>
            
        </Container>

    </div>
  ):null
}

export default Post