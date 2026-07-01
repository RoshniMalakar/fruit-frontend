import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const add = async (e) => {
    e.preventDefault();
    const response = await axios.post(
      "https://fruit-backend-d30x.onrender.com/api/signup",
      {
        name,
        email,
        password,
      },
    );
    if (response.status == 201) {
      navigate("/login");
    }
  };
  const login = () => {
    navigate("/login");
  };
  return (
    <div>
      <div className="signup-page">
        <div className="signup">
          <div className="left">
            <div className="text">
              <h2>Welcome Back!</h2>
              <p>To keep Connected with us Login With your Personal Info</p>
              <button onClick={login}>Login &rarr;</button>
            </div>
          </div>
          <div className="right">
            <h2>Create Account</h2>
            <p>Connect with US</p>
            <form action="" onSubmit={add}>
              <label htmlFor="">
                <i className="fa-regular fa-user"></i>Name:
              </label>
              <input
                type="text"
                placeholder="Enter name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <label htmlFor="">
                <i className="fa-regular fa-envelope"></i>Email:
              </label>
              <input
                type="email"
                placeholder="Enter Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <label htmlFor="">
                <i className="fa-solid fa-lock"></i>Password:
              </label>
              <input
                type="password"
                placeholder="Enter Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button type="submit">SignUp</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
