import { useContext, useRef } from "react"
import { NoteContext } from "../store/noteContext"
import { useNavigate } from "react-router-dom"


export const Login=()=>{
   const navigate= useNavigate()
    const emailRef=useRef()
    const passwordRef=useRef()
    const {Login}=useContext(NoteContext)
    const handleSubmit=async(e)=>{
        e.preventDefault()
        
        const email=emailRef.current.value;
        const password=passwordRef.current.value;
       const json= await Login(email,password)
       if(json.status){
navigate("/")
       }
       else{
        alert(json.error)
       }
      }

    return  <form className="w-50 mx-auto" onSubmit={handleSubmit}>
    <div className="mb-3">
    <label htmlFor="emai" className="form-label">Email address</label>
    <input type="email" ref={emailRef} className="form-control" id="email" />
  </div>
  <div className="mb-3">
    <label htmlFor="password" className="form-label">Password</label>
    <input type="password" ref={passwordRef} className="form-control" id="password"/>
  </div>
  
  <button type="submit" className="btn btn-primary">Login</button>
</form>
}