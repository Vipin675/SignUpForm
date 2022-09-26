import React, { useEffect } from "react";
import { useState } from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Pagination from "../../components/pagination/Pagination.component";
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

  const [currentPage, setCurrentPage] = useState(1);
  const [logsPerPage] = useState(3);

  // get current posts
  const indexOfLastLogs = currentPage * logsPerPage;
  const indexOfFirstLogs = indexOfLastLogs - logsPerPage;
  const currentLogs = users.slice(indexOfFirstLogs, indexOfLastLogs);

  //Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
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
            {currentLogs.map((user, i) => {
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
        <Pagination
          logsPerPage={logsPerPage}
          totalLogs={users.length}
          paginate={paginate}
        />
      </div>
    </>
  );
};

export default Home;
