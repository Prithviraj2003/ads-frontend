import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Delete() {
  const naviagate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:8888/api/delete", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: username,
        password: password,
      }),
    });
    const data = await response.json();
    if (data.error) {
      alert(data.error);
    } else {
      alert(data.message);
      naviagate("/");
    }
  };
  return (
    <div class="container">
      <div class="screen">
        <div class="screen__content">
          <form class="login">
            <h3>Delete account</h3>
            <div class="login__field">
              <i class="login__icon fas fa-user"></i>
              <input
                type="text"
                class="login__input"
                placeholder="Username"
                onChange={(e) => {
                  setUsername(e.target.value);
                }}
              />
            </div>
            <div class="login__field">
              <i class="login__icon fas fa-lock"></i>
              <input
                type="password"
                class="login__input"
                placeholder="Password"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
            </div>
            <button
              class="button login__submit"
              onClick={(e) => handleSubmit(e)}
            >
              <span class="button__text">Delete account</span>
              <i class="button__icon fas fa-chevron-right"></i>
            </button>
          </form>
          <div
            class="link"
            onClick={() => naviagate("/SignUp")}
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              cursor: "pointer",
            }}
          >
            <b>Sign Up</b>
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

export default Delete;
