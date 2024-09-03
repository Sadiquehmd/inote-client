import { useContext } from "react";
import {  FaTrash } from "react-icons/fa";
import { NoteContext } from "../store/noteContext";
import EditModal from "./editModal";
export const NotesItem = ({note,updateNote}) => {
 const {deleteNote}= useContext(NoteContext)
  return (
    <>
      <div className="card text-center my-2" key={note._id}>
        <div className="card-body">
          <div className="d-flex justify-content-evenly ">
          <h5 className="card-title">{note.title}</h5>
         <div><span className="icon mx-3" >
            <EditModal note={note}></EditModal>
          </span>{" "}
          <span className="icon" onClick={()=>deleteNote(note._id)}>
            <FaTrash />
          </span></div></div> 
          <p className="card-text">
           {note.description}
          </p>
        </div>
      </div>
    </>
  );
};
