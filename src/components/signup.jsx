import React, { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";
function SignUp() {
  // useEffect(() => {
  var navigate = useNavigate();
  const [state, setstate] = useState({
    username: "",
    email: "",
    password: "",
    cofPassword: "",
  });

  const [link, setLink] = useState(`
	Click here to go login page`);
  const [text, setText] = useState(`Successfully Registered`);
  const [classs, setClasss] = useState("alert alert-success mt-2");
  return (
    <div style={{ marginTop: "60px" }}>
      <div className="maindivforlogin container">
        <div
          className="formdiv-for-signup"
          style={{
            padding: "30px",
            position: "relative",
            backgroundColor: "white",
          }}
        >
          <form
            action=""
            onSubmit={(e) => {
              e.preventDefault();
              if (state.password !== state.cofPassword) {
                setText(`Both password field doesn't match`);
                setClasss("alert alert-danger mt-2");
                setLink("");
                let alert = document.getElementById("alert");
                alert.style.display = "block";
              } else {
                axios
                  .post("http://127.0.0.1:8000/user/", {
                    email: state.email,
                    username: state.username,
                    password: state.password,
                  })
                  .then((a) => {
                    setText(`Successfully Registered
						`);
                    setClasss("alert alert-success mt-2");
                    let alert = document.getElementById("alert");
                    alert.style.display = "block";
                    setLink("Click here to go login page");
                    // console.log(alerterror);
                    //   navigate("/");
                  })
                  .catch((error) => {
                    setText("User with this email already exist");
                    setClasss("alert alert-danger mt-2");
                    let alert = document.getElementById("alert");
                    setLink("");
                    alert.style.display = "block";
                    console.log(error);
                  });
              }
            }}
          >
            <i className="fas fa-book-reader login-logo-g" />
            {/* <div className="alert alert-danger mt-2" id="alert" role="alert">
              {error}
            </div> */}
            <div className={classs} id="alert" role="alert">
              {text}
              <br />

              <NavLink to="/login">{link}</NavLink>
            </div>
            <TextField
              value={state.email}
              onChange={(e) => {
                setstate((prev) => {
                  return { ...prev, email: e.target.value };
                });
              }}
              required
              id="outlined-password-input"
              label="Email"
              type="email"
              autoComplete="current-password"
              style={{ width: "100%", marginBottom: "10px", marginTop: "5px" }}
            />

            <TextField
              value={state.username}
              onChange={(e) => {
                setstate((prev) => {
                  return { ...prev, username: e.target.value };
                });
              }}
              required
              id="outlined-password-input"
              label="Username"
              type="text"
              autoComplete="current-password"
              style={{ width: "100%", marginBottom: "10px" }}
            />

            <TextField
              value={state.password}
              onChange={(e) => {
                setstate((prev) => {
                  return { ...prev, password: e.target.value };
                });
              }}
              required
              id="outlined-password-input"
              label="Password"
              type="password"
              autoComplete="current-password"
              style={{ width: "100%", marginBottom: "10px" }}
            />
            <TextField
              value={state.cofPassword}
              onChange={(e) => {
                setstate((prev) => {
                  return { ...prev, cofPassword: e.target.value };
                });
              }}
              required
              id="outlined-password-input"
              label="Confirm Password"
              type="password"
              autoComplete="current-password"
              style={{ width: "100%" }}
            />
            <Button
              type="submit"
              variant="contained"
              color="primary"
              style={{ marginTop: "10px", width: "100%" }}
            >
              Sign Up
            </Button>
          </form>
          <NavLink to="/login">
            <h4 style={{ fontSize: "12px", marginTop: "15px" }}>
              Have an existing account ?
            </h4>
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
