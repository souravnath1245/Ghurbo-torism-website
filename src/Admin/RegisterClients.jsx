import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";


const RegisterClients = () => {
  const [clints, setClints] = useState([]);
   

  const handleClientDelete =(id)=>{
    console.log(id);
    fetch(`http://localhost:4000/destination/users/${id}`, {
      method: "DELETE",
      // headers: {
      //   "Contenet-Type" : "aplication/json"
      // },

    }).then(res => res.json())
    .then(data => {
      if(data.deletedCount > 0){
        alert("Successfully Delete");
        const remainingUsers = clints.filter(user => user._id !==id)
        setClints(remainingUsers)
      }
    })
    
  }
  useEffect(() => {
    fetch(`https://pure-meadow-98314.herokuapp.com/destination/users`)
      .then((res) => res.json())
      .then((data) => setClints(data));
  }, []);
  return (
    <div className="registerClientSection">
      

      <div className="registerClientHeader">
        <h1>Register List </h1>
        <div className="registerClient">
          <div className="clientsTable col-lg-12 col-sm-11 mx-auto">
            <Table responsive striped bordered hover variant="dark">
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
                      <button
                        onClick={() => handleClientDelete(clint._id)}
                        className="btn btn-danger"
                      >
                        Delete
                      </button>
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
