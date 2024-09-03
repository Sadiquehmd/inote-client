import { useEffect } from "react"
import { AddNote } from "./addnote"
import { Notes } from "./Notes"
import { useNavigate } from "react-router-dom"


export const Home=()=>{
    const navigate=useNavigate()
useEffect(()=>{
    if(!localStorage.getItem('token')){
navigate("/login")
    }
})
    return <>
    <div>
        <AddNote/>



       <Notes/>
        
        
        </div></>
}