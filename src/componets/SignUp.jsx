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
    <div className='w-full min-h-screen bg-gray-300 flex justify-center items-center max-md:p-10 max-sm:h-[500px] max-sm:items-start'>
        <div className='rounded-xl shadow-sm shadow-black flex justify-center bg-white max-sm:p-10 max-sm:justify-start'>
            <div className='max-sm:w-[230px] max-sm:px-4'>
                <span className='w-full flex justify-center flex-col items-center'>
                    <Logo/>
                    <span className=''>
                        <p className='pt-8 text-gray-500 flex'>Already have account? <Link to="/Login" className='text-blue-500'>Login</Link></p>
                    </span>
                    {
                        error && <h2 className='text-red-500 flex flex-wrap'>{error}</h2>
                    }
                </span>
                {/* sign up form */}
                <form className='' onSubmit={handleSubmit(create)}>
                <div className='flex flex-col items-center gap-8 mt-8'>
                    <Input 
                            type="email"
                            className="w-[300px] max-sm:w-[250px]"
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
                        className="w-[300px] max-sm:w-[250px]"
                        placeholder="enter your password"
                        {
                            ...register("password",{
                                required:true,
                            })
                        }
                    />
                    <Input
                        type="text"
                        className="w-[300px] max-sm:w-[250px]"
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