import React from 'react'
import { useNavigate,Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import {useForm} from 'react-hook-form'
import { useState } from 'react'
import {login as authLogin} from '../Store/AuthSlice'
import authServices from '../Appwrite/Auth/Auth'
import Logo from './Logo/Logo'
import Input from './Input'
import Buttion from './Buttion'
const Login = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const {handleSubmit,register} = useForm()
    const [Error,setError] = useState("")

    const Login =async(data)=>{
       setError("")
       try {
        const session  = await authServices.login(data)
        if(session){
            const UserData = await authServices.getCurrentuser()
            if(UserData){
                dispatch(authLogin({UserData}))
            }
            navigate("/")
        }
       } catch (error) {
            setError(error.message)
       }

    }
  return (
    <div className='flex w-full justify-center min-h-screen items-center max-sm:items-start max-sm:min-h-[600px]'>
        <div className=' mx-auto max-w-lg rounded-xl p-8 bg-gray-100 shadow-sm shadow-black max-sm:mt-5'>
            <div className='mb-2 justify-center flex'>
                <span>
                    <Logo/>
                </span>
            </div>
            <h2 className='text-center font-bold leading-tight text-lg'>Sign in to your account</h2>
            <p className='mt-2 text-center text-base text-black/40'>
                Dont have any Account?  
                {/* sing up to */}
                <Link to="/signUp" className='font-bold text-primary-transion-all duration-100 hover:underline'> SignUp</Link>
            </p>
            {
                Error && <p className='text-center text-red-500'>{Error}</p>
            }
            {/* Login form */}
            <form onSubmit={handleSubmit(Login)} className=''>
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
                    <Buttion 
                        type="submit"
                        classname='w-[300px]'
                        children={"Sign IN"}
                    />
                </div>

            </form>
        </div>
    </div>
  )
}

export default Login