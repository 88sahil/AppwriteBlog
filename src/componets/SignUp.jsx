import React, { useState } from 'react'
import AuthSlice from '../Store/AuthSlice'
import authServices from '../Appwrite/Auth/Auth'
import { login as authLogin } from '../Store/AuthSlice'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { useForm } from 'react-hook-form'
import Logo from './Logo/Logo'
import Input from './Input'
import Buttion from './Buttion'
const SignUp = () => {
    const [error,seterror]= useState("")
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {handleSubmit,register} = useForm();
    const create = async(data) =>{
        seterror("")
        try {
            const createuser = await authServices.createuser(data)
            console.log(createuser)
        if(createuser){
            const user = await authServices.getCurrentuser()
            console.log(user)
            if(user) dispatch(authLogin(user))
            navigate("/")
        }
        } catch (error) {
            seterror(error.message)
        }
    }
  return (
    <div className='w-full min-h-screen bg-gray-300 flex justify-center items-center'>
        <div className='rounded-xl shadow-sm shadow-black flex justify-center p-8 bg-white'>
            <div className=''>
                <span className='w-full flex justify-center flex-col items-center'>
                    <Logo/>
                    <span className=''>
                        <p className='pt-8 text-gray-500'>Already have account? <Link to="/Login"><a className='text-blue-800'>Login</a></Link></p>
                    </span>
                    {
                        error && <h2 className='text-red-500'>{error}</h2>
                    }
                </span>
                {/* sign up form */}
                <form className='' onSubmit={handleSubmit(create)}>
                <div className='flex flex-col items-center gap-8 mt-12'>
                    <Input 
                            type="email"
                            className="w-[300px]"
                            placeholder="enter your email"
                            {
                                ...register("email",{
                                    required:true,
                                    // validate:{
                                    //     matchPattern:(value)=> /^([A-Z|a-z|0-9](\.|_){0,1})+[A-Z|a-z|0-9]\@([A-Z|a-z|0-9])+((\.){0,1}[A-Z|a-z|0-9]){2}\.[a-z]{2,3} /.test(value) || "email address is not valid"
                                    // }
                                })
                            }
                    />
                    <Input
                        type="password"
                        className="w-[300px]"
                        placeholder="enter your password"
                        {
                            ...register("password",{
                                required:true,
                            })
                        }
                    />
                    <Input
                        type="text"
                        className="w-[300px]"
                        placeholder="enter your name"
                        {
                            ...register("name",{
                                required:true,
                            })
                        }
                    />
                    <Buttion 
                        type="submit"
                        classname='w-full'
                        children={"Create Account"}
                        onClick={handleSubmit(create)}
                    />
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default SignUp