import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

export const About=()=>{
    const navigate=useNavigate()
    useEffect(()=>{
        if(!localStorage.getItem('token')){
    navigate("/login")
        }
    })
    return <>
    <h1>About</h1></>
}