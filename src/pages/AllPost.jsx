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
            console.log(posts.documents)
        }
    })
    },[])
   
  return (
    <Container>
       <div className='w-full flex flex-wrap'>
       {
            post.map((item)=>(
                <div key={item.$id} className='p-2 w-1/4 max-sm:w-full'>
                        <PostCard {...item} />
                </div>
            ))
        }
       </div>
    </Container>
  )
}

export default AllPost