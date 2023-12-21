import React, { useEffect, useState } from 'react'
import PostCard from '../componets/PostCard'
import Services  from '../Appwrite/Config/Confing'
import Container from '../componets/container/Container'
const AllPost = () => {
    const [post,setpost] = useState([])
    useEffect(()=>{
      Services.getPost([]).then((posts)=>{
        if(posts){
            setpost(posts.documents)
        }
    })
    },[])
   
  return (
    <Container>
       <div className='w-full flex flex-wrap'>
       {
            post.map((item)=>(
                <div key={item.$id} className='flex p-2 xl:w-1/4 flex-1 max-md:w-full justify-center'>
                        <PostCard {...item} />
                </div>
            ))
        }
       </div>
    </Container>
  )
}

export default AllPost