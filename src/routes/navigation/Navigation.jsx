import React, { useContext } from "react";
import { Link, Outlet } from "react-router-dom";

import Alert from "../../components/alert/Alert.component";
import { AlertContext } from "../../context/alert.context";

const Navigation = () => {
  const { alert } = useContext(AlertContext);
  const handleLogOut = () => {
    localStorage.removeItem("user");
  };
  return (
    <>
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            Navbar
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
            </ul>
            {!localStorage.getItem("user") ? (
              <div className="">
                <Link
                  to="/login"
                  className="btn btn-sm btn-outline-light mx-1"
                  role="button"
                >
                  Login
                </Link>
                <Link
                  to="/sign-up"
                  className="btn btn-sm btn-primary mx-1"
                  role="button"
                >
                  Sign Up
                </Link>
              </div>
            ) : (
              <Link
                to="/login"
                className="btn btn-sm btn-danger mx-1"
                role="button"
                onClick={handleLogOut}
              >
                Log out
              </Link>
            )}
          </div>
        </div>
      </nav>
      <Alert alert={alert} />
      <Outlet />
    </>
  );
};

export default Navigation;
