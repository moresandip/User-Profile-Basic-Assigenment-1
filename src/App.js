import React, { useState, useEffect } from "react";
import UserCard from "./UserCard";
import "./App.css";

function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchUsers() {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      const data = await res.json();
      setUsers(data);
      setLoading(false);
    }
    fetchUsers();
  }, []);

  return (
    <div className="container py-4">
      <h1 className="mb-4 text-center">User Profiles</h1>

      {loading ? (
        <div className="d-flex justify-content-center align-items-center" style={{ minHeight: 240 }}>
          <div className="spinner"></div>
        </div>
      ) : (
        <div className="row">
          {users.map((user) => (
            <div key={user.id} className="col-md-4 mb-4">
              <UserCard user={user} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default App;


