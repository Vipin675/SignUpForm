import React, { useEffect } from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../context/user.context";

const Home = () => {
  const { getAllUsers, users } = useContext(UserContext);

  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("user")) {
      getAllUsers();
    } else {
      navigate("/login");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <div className="container mt-4">
        <table className="table table-dark table-striped">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Mobile</th>
              <th scope="col">Password</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, i) => {
              return (
                <tr key={i}>
                  <th scope="row">{i + 1}</th>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.mobile}</td>
                  <td>{user.password}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Home;
