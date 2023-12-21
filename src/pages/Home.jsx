import React, { useEffect, useState } from 'react'
import Services from '../Appwrite/Config/Confing'
import PostCard from '../componets/PostCard'
import Container from '../componets/container/Container'
const Home = () => {
    const [post,setpost] = useState([])
    useEffect(()=>{
        Services.getPosts().then((posts)=>{
            if(posts){
                setpost(posts.documents)
            }
        })
    },[])
    console.log(post)
    if (post.length === 0) {
        return (
            <div className="w-full py-8 mt-4 text-center">
                <Container>
                    <div className="flex flex-wrap">
                        <div className="p-2 w-full">
                            <h1 className="text-2xl font-bold hover:text-gray-500">
                                Login to read posts
                            </h1>
                        </div>
                    </div>
                </Container>
            </div>
        )
    }else{
        return (
            <div className='w-full py-8'>
                <Container>
                    <div className='flex flex-wrap'>
                       {
                        post.map((item)=>{
                            return(
                                <div key={item.$id} className='p-2 w-1/6'>
                                    <PostCard {...item} />
                                </div>
                            )
                        })
                       }
                    </div>
                </Container>
            </div>
        )   
    }
    
}


export default Home