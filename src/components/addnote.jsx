import { useContext, useRef } from "react"
import { NoteContext } from "../store/noteContext"

export const AddNote=()=>{
  const {addNote}=useContext(NoteContext)
const titleRef=useRef()
const descriptionRef=useRef()
const tagRef=useRef()
const handleSubmit=(e)=>{
  e.preventDefault()

  const title=titleRef.current.value
  const description=descriptionRef.current.value
  const tag=tagRef.current.value
addNote(title,description,tag)
titleRef.current.value=""
descriptionRef.current.value=""
tagRef.current.value=''
}
    return<>
    
    <div className="container my-4">
        <h1 className="text-center">Add A Note</h1>

        <form className="my-3 w-50 mx-auto" onSubmit={handleSubmit}>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label title">Title</label>
    <input ref={titleRef} type="text" className="form-control" id="exampleInputEmail1" />
   
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label description">Description</label>
    <textarea ref={descriptionRef} type="text" className="form-control" id="exampleInputPassword1"/>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail3" className="form-label title">Tag</label>
    <input ref={tagRef} type="text" className="form-control" id="exampleInputEmail3" />
   
  </div>
  <button type="submit" className="btn btn-primary ">Save</button>
</form></div>
    </>
}