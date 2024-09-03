import { useContext, useRef } from "react"
import { NoteContext } from "../store/noteContext"
import { useNavigate } from "react-router-dom"


export const SignUp=()=>{
const {Signup} = useContext(NoteContext)
const nameRef=useRef()
const emailRef=useRef()
const passwordRef=useRef()
const navigate=useNavigate()
const handleSubmit=async(e)=>{
  e.preventDefault()
  const name=nameRef.current.value;
  const email=emailRef.current.value;
  const password=passwordRef.current.value;
 const json=await Signup(name,email,password)
 if(json.status){
  navigate("/")
         }
         else{
          console.log(json.errors)
         }
}
    return <>
    <form className="w-50 mx-auto" onSubmit={handleSubmit}>
  <div className="mb-3 ">
    <label htmlFor="name" className="form-label">Name</label>
    <input type="name" ref={nameRef} className="form-control" id="name"/>
   
  </div>
  <div className="mb-3">
    <label htmlFor="emai" className="form-label">Email address</label>
    <input type="email" ref={emailRef} className="form-control" id="email" />
  </div>
  <div className="mb-3">
    <label htmlFor="password" className="form-label">Password</label>
    <input type="password" ref={passwordRef} className="form-control" id="password"/>
  </div>
  
  <button type="submit" className="btn btn-primary">Signup</button>
</form>
    
    
    </>
}