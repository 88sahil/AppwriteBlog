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
    if (post.length === 0) {
        return (
            <div className="w-full py-8 mt-4 text-center">
                <Container>
                    <div className="flex flex-wrap">
                        <div className="p-2 w-full">
                            <h1 className="text-2xl font-bold hover:text-gray-500 flex text-center">
                                Login to read posts
                            </h1>
                        </div>
                    </div>
                </Container>
            </div>
        )
    }else{
        return (
                    <div className='w-full flex flex-wrap max-sm:item-center mt-4'>
                       {
                        post.map((item)=>{
                            return(
                                <div key={item.$id} className=' flex p-2 xl:w-1/4 flex-1 max-md:w-full justify-center'>
                                    <PostCard {...item} />
                                </div>
                            )
                        })
                       }
                    </div>
        )   
    }
    
}


export default Home