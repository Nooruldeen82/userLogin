import React, { useState } from "react";

export default function Login() {
  const [user, setUser] = useState({});
  const [users, setUsers] = useState([
    {
      id: 1,
      name: "Nooraldeen",
      password: "12345"
    },
    {
      id: 2,
      name: "Nidal",
      password: "12345"
    },
    {
      id: 3,
      name: "Hafiz",
      password: "12345"
    },
    {
      id: 14,
      name: "Omar",
      password: "12345"
    }
  ]);
  const [result, setResult] = useState([]);
  const handleChange = e => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const handleSubmit = e => {
    e.preventDefault();
    // setUsers([...users, user]);
    //setUser({ name: "", password: "" });
    setResult(
      users.filter(
        u => u.name === user.name && u.password === user.password
        /* ? console.log("Welcome")
          : console.log("Not correct");
 */
        // if (newuser.name === user.name && newuser.password === user.password) {
        //   console.log("Hello");
        // } else {
        //   console.log("Not correct");
        // }
      )
    );
  };
  return (
    <div>
      {/* {users.map(user => (
        <ul>
          <li>{user.name}</li>
        </ul>
      ))} */}
      <h1>Login Form</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="">Name</label>
        <input type="text" name="name" onChange={handleChange} />
        <label htmlFor="">Password</label>
        <input type="text" name="password" onChange={handleChange} />
        <button type="submit">Login</button>
      </form>

      {result.length ? <p>"successfully logged in."</p> : <p>sorry</p>}
    </div>
  );
}
