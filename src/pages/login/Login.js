import React, { useState } from "react";
import './login.css'
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";

export const LoginForm = ({ Login, error }) => {
  const [details, setDetail] = useState({
    userName: "",
    password: "",
    name: "",
  });
  const submitHandle = (e) => {
    e.preventDefault();
    Login(details);
  };
  return (
    <form onSubmit={submitHandle}>
      <div className="form-inner">
      <h2>LOGIN</h2>
      {<div>{error}</div> }
      <div className="form-group">
        <label>Name:</label>
        <input
          type="text"
          onChange={(e) => setDetail({ ...details, name: e.target.value })}
          value={details.name}
        />
      </div>
      <div className="form-group">
        <label>UserName:</label>
        <input
          type="text"
          onChange={(e) => setDetail({ ...details, userName: e.target.value })}
          value={details.userName}
        />
      </div>
      <div className="form-group">
        <label>Password:</label>
        <input
          type="password"
          onChange={(e) => setDetail({ ...details, password: e.target.value })}
          value={details.password}
        />
      </div>
      <input type="submit" value="Login" />
      </div>
    </form>
  );
};

export const Login = () => {
  const adminUser = {
    userName: "admin",
    password: "admin",
  };
  const [user, setUser] = useState({
    name: "",
    email: "",
  });
  const [error, setError] = useState("");
  const Login = (a) => {
    console.log(a);
    if (
      a.userName === adminUser.userName &&
      a.password === adminUser.password
    ) {
      console.log("success");
      setUser({
        name: a.name,
      });
    } else {
      console.log("fail");
      setError("Username or password does not match!")
    }
  };
  const Logout = () => {
    console.log("Logout");
    setUser({ name: "", email: "" });
  };
  return (
    <div className="appChild">
      {user.email !== "" ? (
        <div className="welcome">
          <h2>
            Welcome,<span>{user.name}</span>
          </h2>
          <button onClick={Logout}>Logout</button>
          <Link to = '/trang-chu'>
          <button>Trang chủ</button>
          </Link>
        </div>
      ) : (
        <LoginForm Login={Login} error={error} />
      )}
    </div>
  );
};
