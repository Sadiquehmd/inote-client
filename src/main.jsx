import NoteState from "./store/noteContext.jsx";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { createBrowserRouter, redirect, RouterProvider } from "react-router-dom";
import { Home } from "./components/home.jsx";
import { About } from "./components/about.jsx";
import { Login } from "./components/login.jsx";
import { SignUp } from "./components/signup.jsx";



const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
        
      },
      {
        path: "about",
        element: <About />,
        
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "signup",
        element: <SignUp />,
      },
     
    ],
  },
]);
createRoot(document.getElementById("root")).render(
  <NoteState>
    <RouterProvider router={router} />
  </NoteState>
);
