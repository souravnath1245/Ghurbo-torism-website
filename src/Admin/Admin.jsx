import React from "react";
import AdminLink from "./AdminLink";
import "./Addmin.css"

const Admin = () => {
  return (
    <div>
      <h1 className="m-4">Tourism Admin page</h1>
      <AdminLink />

      <h3 className="container para">Please Click the Link </h3>
     
    </div>
  );
};

export default Admin;
