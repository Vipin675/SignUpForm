import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

// Alert Context -----------------------
import { AlertContext } from "./alert.context";
// Alert Context -----------------------

export const UserContext = createContext({});

export const Userprovider = ({ children }) => {
  const [users, setUsers] = useState([]);

  const { showAlert } = useContext(AlertContext);
  let navigate = useNavigate();

  // GET ALL USER
  const getAllUsers = async () => {
    const options = {
      method: "GET",
    };

    await fetch("http://localhost:8080/api/auth/get-all-users   ", options)
      .then((response) => response.json())
      .then((response) => {
        setUsers(response.users);
      })
      .catch((err) => console.error(err));
  };

  // LOGIN USER
  const loginUser = async (user) => {
    const { email, password } = user;
    const options = {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      body: `{"email":"${email}","password":"${password}"}`,
    };

    await fetch("http://localhost:8080/api/auth/login", options)
      .then((response) => response.json())
      .then((response) => {
        //
        if (response.success) {
          localStorage.setItem("user", [email, password]);
          navigate("/");
          showAlert("success", response.message);
        } else {
          showAlert("danger", "Invalid email or password");
        }
        //
      })
      .catch((err) => console.error(err));
  };

  // SIGN-UP USER
  const signUpUser = async (user) => {
    const { name, email, mobile, password } = user;
    console.log(
      `{"name":"${name}","email":"${email}","mobile":${mobile},"password":"${password}"}`
    );
    const options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: name,
        email: email,
        mobile: mobile,
        password: password,
      }),
    };

    await fetch("http://localhost:8080/api/auth/new-user", options)
      .then((response) => response.json())
      .then((response) => {
        if (response.success) {
          localStorage.setItem("user", [email, password]);
          showAlert("success", response.message);
          navigate("/");
        } else {
          showAlert("success", "Some of the you entered field is invalid");
        }
      })
      .catch((err) => console.error(err));
  };

  return (
    <UserContext.Provider value={{ loginUser, signUpUser, getAllUsers, users }}>
      {children}
    </UserContext.Provider>
  );
};
