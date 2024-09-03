import { NavLink, useNavigate } from "react-router-dom";

export const Navbar = () => {
  const navigate=useNavigate()
 const handleLogout=()=>{
  localStorage.removeItem("token");
navigate("/login")
 }
  return (
    <>
      <div className="container-fluid">
        <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 ">
          <div className="col-md-3 mb-2 mb-md-0">
            <NavLink to="/" className="nav-link px-2 link-secondary">
              <span className="fs-4" style={{ cursor: "pointer" }}>
                iNotes
              </span>
            </NavLink>
          </div>

          <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
            <li>
              <NavLink
                to="/"
                className={({ isActive, isPending }) =>
                  isActive
                    ? "active nav-link px-2"
                    : isPending
                    ? "pending"
                    : "nav-link px-2 link-secondary"
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="about"
                className={({ isActive, isPending }) =>
                  isActive
                    ? "active nav-link px-2"
                    : isPending
                    ? "pending"
                    : "nav-link px-2 link-secondary"
                }
              >
                About
              </NavLink>
            </li>
          </ul>

          <div className="col-md-3 text-end">
         {localStorage.getItem('token') ?<button className="btn btn-outline-primary me-2" onClick={handleLogout}>Logout</button>: <>  <NavLink
              to="login"
              className={({ isActive, isPending }) =>
                isActive
                  ? "active btn btn-outline-primary me-2"
                  : isPending
                  ? "pending"
                  : "btn btn-outline-primary me-2"
              }
            >
             
              Login
            </NavLink>
            <NavLink
              to="signup"
              className={({ isActive, isPending }) =>
                isActive
                  ? "active btn btn-outline-primary me-2"
                  : isPending
                  ? "pending"
                  : "btn btn-outline-primary me-2"
              }
            >
             
              Signup
            </NavLink> </>
            }
          </div>
        </header>
      </div>
    </>
  );
};
