import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Outlet } from "react-router-dom";
import { Navbar } from "./components/navbar";




function App() {
 
  return (
    <>
      <Navbar></Navbar>
     
      <div className="container">
        <Outlet></Outlet>
      </div>
    </>
  );
}

export default App;
