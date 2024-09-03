import { useContext, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { FaEdit } from "react-icons/fa";
import { NoteContext } from "../store/noteContext";

function EditModal({ note }) {
  const {editNotes}=useContext(NoteContext)
  const [show, setShow] = useState(false);
const [notes,setNotes]=useState(note)
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
const handleOnChange=(e)=>{
  
    setNotes({...notes,[e.target.name]:e.target.value})
}
const handleSubmit=()=>{
  editNotes(notes._id,notes.title,notes.description,notes.tags)
  setShow(false)

}
  return (
    <>
      <span onClick={handleShow}>
        <FaEdit />
      </span>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form className="my-3 w-50 mx-auto">
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label title">
                Title
              </label>
              <input
              onChange={(e)=>handleOnChange(e)}
                value={notes.title}
                name="title"
                type="text"
                className="form-control"
                id="exampleInputEmail1"
              />
            </div>
            <div className="mb-3">
              <label
                htmlFor="exampleInputPassword1"
                className="form-label description"
              >
                Description
              </label>
              <textarea
              name="description"
              onChange={(e)=>handleOnChange(e)}
                value={notes.description}
                type="text"
                className="form-control"
                id="exampleInputPassword1"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail3" className="form-label title">
                Tag
              </label>
              <input
              name="tags"
              onChange={(e)=>handleOnChange(e)}
                value={notes.tags}
                type="text"
                className="form-control"
                id="exampleInputEmail3"
              />
            </div>
          </form>
           
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default EditModal;
