import React, { useState } from "react";
import "./login.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function SignUp() {
  const naviagate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [re_password, setRe_password] = useState("");
  const [email, setEmail] = useState("");
  const [code, setCode] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== re_password) {
      alert("Password and Re-Password are not same");
      return;
    }
    try {
      const response = await axios.post("http://localhost:8888/api/account", {
        name: username,
        email: email,
        code: code,
        password: password,
      });
      const data = response.data;
      console.log(data);
      if (data.error) {
        alert(data.error);
      } else {
        alert(data.message);
        naviagate("/");
      }
    } catch (error) {
      console.error(error);
      alert("An error occurred. Please try again later.");
    }
  };
  return (
    <div class="container">
      <div class="screen">
        <div class="screen__content">
          <form class="signup">
            <h3>Sign Up Page</h3>
            <div class="login__field">
              <i class="login__icon fas fa-user"></i>
              <input
                type="text"
                class="login__input"
                placeholder="Enter Your Name"
                onChange={(e) => {
                  setUsername(e.target.value);
                }}
              />
            </div>
            <div class="login__field">
              <i class="login__icon fas fa-user"></i>
              <input
                type="text"
                class="login__input"
                placeholder="Enter Your Email"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </div>
            <div class="login__field">
              <i class="login__icon fas fa-user"></i>
              <input
                type="text"
                class="login__input"
                placeholder="Enter Security code for password recovery"
                onChange={(e) => {
                  setCode(e.target.value);
                }}
              />
            </div>
            <div class="login__field">
              <i class="login__icon fas fa-lock"></i>
              <input
                type="password"
                class="login__input"
                placeholder="Enter your Password"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
            </div>
            <div class="login__field">
              <i class="login__icon fas fa-lock"></i>
              <input
                type="password"
                class="login__input"
                placeholder="Re-Enter your Password"
                onChange={(e) => {
                  setRe_password(e.target.value);
                }}
              />
            </div>
            <button
              class="button login__submit"
              onClick={(e) => handleSubmit(e)}
            >
              <span class="button__text">Sign Up Now</span>
              <i class="button__icon fas fa-chevron-right"></i>
            </button>
          </form>
          <div
            class="link"
            onClick={() => naviagate("/")}
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              cursor: "pointer",
            }}
          >
            <b>Already Have an Account? Login</b>
          </div>
        </div>
        <div class="screen__background">
          <span class="screen__background__shape screen__background__shape4"></span>
          <span class="screen__background__shape screen__background__shape3"></span>
          <span class="screen__background__shape screen__background__shape2"></span>
          <span class="screen__background__shape screen__background__shape1"></span>
        </div>
      </div>
    </div>
  );
}
export default SignUp;
