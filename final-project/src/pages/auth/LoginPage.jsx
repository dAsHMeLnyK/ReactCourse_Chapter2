import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const users = [
  {
    userName: "admin",
    password: "admin",
    role: "admin",
  },
  {
    userName: "user",
    password: "user",
    role: "user",
  },
];

const LoginPage = () => {
  const navigate = useNavigate();

  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleUserNameInputChange = (event) => {
    setUserName(event.target.value);
  };

  const handlePasswordInputChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setError("");

    const user = users.find((user) => user.userName === userName);

    if (!user) {
      setError("User does not exist");
      return;
    }

    if (user.password !== password) {
      setError("Invalid password");
      return;
    }

    localStorage.setItem("user", JSON.stringify(user));

    if (user.role === "admin") {
      navigate("/users");
    } else {
      navigate("/");
    }
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", width: "960px" }}>
      <h1>Login</h1>
      <div style={{ padding: "1.5em", border: "1px solid #ccc" }}>
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: "1em" }}>
            <label htmlFor="username">Username</label>
            <input
              id="username"
              name="username"
              type="text"
              value={userName}
              onChange={handleUserNameInputChange}
              style={{ width: "100%", padding: "0.5em", marginTop: "0.5em" }}
            />
          </div>
          <div style={{ marginBottom: "1em" }}>
            <label htmlFor="password">Password</label>
            <input
              id="password"
              name="password"
              type="password"
              value={password}
              onChange={handlePasswordInputChange}
              style={{ width: "100%", padding: "0.5em", marginTop: "0.5em" }}
            />
          </div>
          {error && <p style={{ color: "red" }}>{error}</p>}
          <button type="submit" style={{ padding: "0.5em 1em" }}>Login</button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
