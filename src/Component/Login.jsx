import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const check = async (e) => {
    e.preventDefault();
    const response = await axios.post(
      "https://fruit-backend-d30x.onrender.com/api/login",
      {
        email,
        password,
      },
    );
    const token = response.data.token;
    if (response.status === 401) {
      alert(response.data.message);
    } else if (response.status === 500) {
      alert(response.data.message);
    } else {
      localStorage.setItem("token", token);
      navigate("/");
      window.location.reload();
    }
  };
  return (
    <div className="login-page">
      <div className="log">
        <div className="left">
          <img src={"fruits.avif"} alt="" />
        </div>
        <div className="right">
          <div className="login">
            <h1>WELCOME!</h1>
            <p>Login with Email</p>
            <form action="" onSubmit={check}>
              <label htmlFor="">Email</label>
              <input
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <label htmlFor="">Password</label>
              <input
                type="password"
                placeholder="Enter Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <p>
                <a href="/signup">Forget Password?</a>
              </p>
              <button type="submit">Login</button>
            </form>
            <p>Login with:</p>
            <div className="icon">
              <i className="fa-brands fa-google"></i>
              <i className="fa-brands fa-facebook"></i>
              <i className="fa-brands fa-apple"></i>
            </div>
            <p>
              Don't have an account? <a href="/signup">Signup</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
