import { useContext, useEffect, useRef } from "react";
import { NotesItem } from "./NoteItem";
import { NoteContext } from "../store/noteContext";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
export const Notes = () => {
  const { notes } = useContext(NoteContext);

  
 var title;
 var description;
 var tag;
  var id;
  
 
  return (
    <>
      
      <div className="container my-3 w-50">
        {" "}
        <h1 className="text-center">Your Notes</h1>
        {notes.map((note) => (
          <NotesItem note={note} key={note._id} />
        ))}
      </div>
    </>
  );
};
