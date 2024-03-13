import React, { useState } from "react";
import "./index.css";
const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [rusername, setrUsername] = useState("");
  const [email, setEmail] = useState("");
  const [rpassword, setrPassword] = useState("");
  const [bio, setBio] = useState("");

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handlerUsernameChange = (e) => {
    setrUsername(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlerPasswordChange = (e) => {
    setrPassword(e.target.value);
  };

  const handleBioChange = (e) => {
    setBio(e.target.value);
  };

  const handlerSubmit = (e) => {
    e.preventDefault();
    // Handle registration logic here
    console.log("Name:", name);
    console.log("Username:", username);
    console.log("Email:", email);
    console.log("Password:", password);
    console.log("Bio:", bio);
  };

  return (
    <div className="login__register__whole__container">
      {isLogin ? (
        <div className="login-container">
          <form onSubmit={handleSubmit} className="login-form">
            <h2>Login</h2>
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                id="username"
                value={username}
                onChange={handleUsernameChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={handlePasswordChange}
                required
              />
            </div>
            <button type="submit">Login</button>
            <button onClick={() => setIsLogin(false)}>Sign Up Instead</button>
          </form>
        </div>
      ) : (
        <>
          <div className="register-container">
            <form onSubmit={handleSubmit} className="register-form">
              <h2>Register</h2>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={handleNameChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="username">Username</label>
                <input
                  type="text"
                  id="username"
                  value={rusername}
                  onChange={handlerUsernameChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={handleEmailChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  id="password"
                  value={rpassword}
                  onChange={handlerPasswordChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="bio">Bio</label>
                <textarea
                  id="bio"
                  value={bio}
                  onChange={handleBioChange}
                  rows="4"
                ></textarea>
              </div>
              <button type="submit">Register</button>
              <button onClick={() => setIsLogin(true)}>Login Instead</button>
            </form>
          </div>
        </>
      )}
    </div>
  );
};

export default Login;
