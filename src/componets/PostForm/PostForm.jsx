import React, { useCallback, useEffect, useState } from 'react'
import {useNavigate} from 'react-router-dom'
import {useSelector} from 'react-redux'
import  Services  from '../../Appwrite/Config/Confing'
import { useForm } from 'react-hook-form'
import Input from '../Input'
import Select from '../Select'
import RTE from '../RTE'
import Buttion from '../Buttion'
const PostForm = ({post}) => {
  const {register,handleSubmit,watch,setValue,control,getValues} = useForm({
    defaultValues:{
      title:post?.title || '',
      slug:post?.$id || '',
      content:post?.content || '',
      status:post?.content || "active",
    }
  })
  const navigate = useNavigate()
  
  const userData = useSelector((state) => state.auth.UserData)
  console.log(userData)
  const submit = async(data)=>{
    if(post){
      const file = data.image[0] ? await Services.uploadfile(data.image[0]) : null
      if(file){
         Services.deletePost(post.featuredImage)
      }
      const dbPost =await  Services.UpdatePost(
        post.$id,{
          ...data,
          featuredImage: file ? file.$id : undefined
        }
      )
      if(dbPost){
          navigate(`/post/${dbPost.$id}`)
      }
    }else{
      const file = await Services.uploadfile(data.image[0]);
      if(file){
        const fileId = file.$id
        data.featuredImage = fileId
        const dbPost = await Services.createPost({
          ...data,
          userId:userData.$id,
        })
        if(dbPost){
          navigate(`/post/${dbPost.$id}`)
        }
      }
    }
  }
  
  const slugTransform = useCallback((value) => {
    if (value && typeof value === "string")
        return value
            .trim()
            .toLowerCase()
            .replace(/[^a-zA-Z\d\s]+/g, "-")
            .replace(/\s/g, "-");

    return "";
}, []);
  React.useEffect(()=>{
    const subscription = watch((value,{name})=>{
      if(name==='title'){
        setValue('slug',slugTransform(value.title,{shouldValidate:true}))
      }
      return ()=>{
        subscription.unsubscribe()
      }
    })
  },[slugTransform,watch,setValue])
  return (
      <form onSubmit={handleSubmit(submit)} className='w-full flex max-sm:first-letter:
      flex-wrap mt-10 justify-between'>
        <div className='w-2/3 px-2 max-sm:w-full'>
          <Input
            label="Title"
            placeholder="Title"
            className="mb-4 border border-gray-500 rounded-sm"
            {...register("title",{required:true})}
          />
          <Input 
            label="slug"
            placeholder="slug"
            className="mb-4 border border-gray-500 rounded-sm"
            {...register("slug",{required:true})}
            onInput={(e)=>{
              setValue("slug",slugTransform(e.target.value),{shouldValidate:true})
            }}
          />
          <RTE
            label="content"
            name="content"
            control={control}
            defaultValue={getValues('content')}
          />
        </div>
        <div className='w-1/3 px-2 max-sm:w-full'>
            <Input 
              label="Image"
              type="file"
              accept="image/png,image/jpg,image/jpeg,image/gif"
              {...register("image",{required:!post})}
            />
            {
              post && 
              <div className=' mb-4'>
                <img 
                src={Services.getFilePreview(post.featuredImage)}
                alt={post.title}
                className='rounded-lg'
                />
              </div>
            }
            <Select 
              options={["active","inactive"]}
              {...register("status",{required:true})}
            />
            <button
              type='submit'
              className='w-full bg-green-500 mt-2 rounded-md py-2 active:scale-90 duration-300'
            >
              {post? "update":"submit"}
            </button>
        </div>
      </form>
  )
}

export default PostForm