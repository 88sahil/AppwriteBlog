import { useEffect,useState } from "react"
import React  from 'react'
import { useNavigate } from "react-router-dom"
import { useSelector } from "react-redux"
const Protected = ({children,authentication=true}) => {
    const navigate = useNavigate()
    const [Loader,setLoader] = useState(true)
    const user = useSelector(state => state.auth.UserData)
    const userState = useSelector(state => state.auth.Status)
    console.log(userState)
    useEffect(()=>{
        if(authentication && userState !== authentication){
            navigate("/Login")
        }else if(!authentication && userState !== authentication){
            navigate("/")
        }
        setLoader(false)
    },[userState , navigate,authentication])
  return Loader ? <h1>Loading....</h1>:<>{children}</>
}

export default Protected