import { createContext, useReducer, useEffect } from "react";


const host = "http://localhost:4000";

export const NoteContext = createContext({
  notes: [],
  deleteNote: () => {},
  addNote: () => {},
  fetchNotes: () => {},
  editNotes: () => {},
});
var authToken;
var fetchNotes;

// fetchNote method for fetching note using api
const fetchNote = async () => {
  try {
    const response = await fetch(`${host}/api/notes/fetchallnotes`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          localStorage.getItem('token'),
      },
    });
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const json = await response.json();
    fetchNotes(json);
  } catch (error) {
    console.error(error.message);
  }
};
// AddNote method for adding note data using api
const AddNote = async (title, description, tag) => {
  try {
    const response = await fetch(`${host}/api/notes/addnote`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
        localStorage.getItem('token'),
      },
      body: JSON.stringify({
        title,
        description,
        tag,
      }),
    });
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }
    const status = response.status;
    const json = await response.json();
    if (status == 200) fetchNote();
  } catch (error) {
    console.error(error.message);
  }
};

// EditNote method for editing note using api
const EditNote = async (id, title, description, tag) => {
  try {
    const response = await fetch(`${host}/api/notes/update/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjZjOWM2ZWY1YmJhNjIyNzA1NTExYWU2In0sImlhdCI6MTcyNDkyMjI3M30.tLk6xpeE3IlA0EzyNX3EQDJwnqSXyF1ejKU_PiRJb78",
      },
      body: JSON.stringify({
        title,
        description,
        tag,
      }),
    });
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }
    const status = response.status;
    const json = await response.json();
    if (status == 200) fetchNote();
  } catch (error) {
    console.error(error.message);
  }
};
const DeleteNote = async (id, title, description, tag) => {
  try {
    const response = await fetch(`${host}/api/notes/delete/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjZjNTc2MTRiYjVhZmE4OWUwMmU3NDEwIn0sImlhdCI6MTcyNDIyODE0MX0.bJoVu5RSGd2MBccvJdK5WASDpnW03xcdsadxb4ivvkU",
      },
    });
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }
    const status = response.status;
    const json = await response.json();
    console.log(status);
    if (status == 200) fetchNote();
  } catch (error) {
    console.error(error.message);
  }
};
const Signup = async (name, email, password) => {
  try {
    const response = await fetch(`${host}/api/auth/createuser`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        password,
      }),
    });
    
    const status =  response.status;
    const json = await response.json();

    if (status == 200) {
      localStorage.setItem("token",json.authToken);
     }
     return json
     
  } catch (error) {
    console.error(error.message);
  }
};
const Login = async ( email, password) => {
  try {
    const response = await fetch(`${host}/api/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });
   
    const status =  response.status;
    const json = await response.json();

    if (status == 200) {
       localStorage.setItem("token",json.authToken);
      }
      return json
      
  } catch (error) {
    console.error(error.message);
  }
};

function reducerMethod(currNote, action) {
  let newNote = currNote;
  if (action.type === "add") {
    const { title, description, tag } = action.payload;
    AddNote(title, description, tag);
  }
  if (action.type === "delete") {
    DeleteNote(action.payload.id);
    // newNote = currNote.filter((note) => note._id != action.payload.id);
  }
  //Code for edit functionality
  if (action.type === "edit") {
    const { id, title, description, tag } = action.payload;
    EditNote(id, title, description, tag);
  }
  if (action.type === "fetch") {
    newNote = action.payload.notes;
  }
  return newNote;
}
function NoteState({ children }) {
  const [notes, dispatch] = useReducer(reducerMethod, []);

  fetchNotes = (notes) => {
    dispatch({
      type: "fetch",
      payload: {
        notes,
      },
    });
  };

  useEffect(() => {
    fetchNote();
  }, []);
  //add notes
  const addNote = (title, description, tag) => {
    dispatch({
      type: "add",
      payload: {
        title,
        description,
        tag,
      },
    });
  };

  //edit note
  const editNotes = (id, title, description, tag) => {
    dispatch({
      type: "edit",
      payload: {
        id,
        title,
        description,
        tag,
      },
    });
  };

  //delete note
  const deleteNote = (id) => {
    dispatch({
      type: "delete",
      payload: {
        id,
      },
    });
  };

  return (
    <>
      <NoteContext.Provider
        value={{ notes, deleteNote, addNote, fetchNotes, editNotes, Signup,Login }}
      >
        {children}
      </NoteContext.Provider>
    </>
  );
}
export default NoteState;
