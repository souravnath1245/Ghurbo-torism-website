import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";

const RegisterClients = () => {
  const [clints, setClints] = useState([]);

  useEffect(() => {
    fetch(`https://pure-meadow-98314.herokuapp.com/destination/users`)
      .then((res) => res.json())
      .then((data) => setClints(data));
  }, []);
  return (
    <div className="registerClientSection">
      <div className="registerClientNavbar">
        {/* <BrowserRouter>
          <Switch>
            <Route></Route>
          </Switch>
        </BrowserRouter>{" "}
        */}
      </div>

      <div className="registerClientHeader">
        <h1>Register List </h1>
        <div className="registerClient">
          <div className="clientsTable">
            <Table striped bordered hover variant="dark">
              <thead>
                <tr>
                  <th>Clints Name</th>
                  <th>Clints EmailID</th>
                  <th>Registation Data</th>
                  <th>Clints Phone</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {clints.map((clint) => (
                  <tr key={clint._id}>
                    <td>{clint.name}</td>
                    <td>{clint.email}</td>
                    <td>{clint.date}</td>
                    <td>{clint.phone}</td>
                    <td>
                      <button className="btn btn-danger">Delete</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterClients;
