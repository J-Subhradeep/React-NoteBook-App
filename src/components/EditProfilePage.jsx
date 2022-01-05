import React from "react";

import TextField from "@mui/material/TextField";
import CancelIcon from "@mui/icons-material/Cancel";
import { NavLink, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import SaveIcon from "@mui/icons-material/Save";
import Button from "@mui/material/Button";
import axios from "axios";
import Navbar from "./navbar";
const EditProfilePage = () => {
  const [email, setEmail] = useState("");
  const [newemail, setNewemail] = useState("");
  const [username, setUsername] = useState("");
  var navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [newpassword, setnewpassword] = useState("");
  useEffect(() => {
    if (!localStorage.getItem("user_id")) {
      navigate("/login");
    }
  }, []);
  useEffect(() => {
    axios
      .post("http://localhost:8000/verif/", {
        token: localStorage.getItem("token"),
      })
      .then((a) => {
        setEmail(a.data.email);
        setUsername(a.data.username);
        setNewemail(a.data.email);
      });
  }, []);
  return (
    <>
      <Navbar />
      <div className="editpage-main-container">
        <div className="editpage-form-parent-div p-4">
          {/* <h1 class="text-center text-primary">Edit Your Profile</h1> */}
          <form action="">
            <div className="editpage-form-div">
              <TextField
                required
                id="outlined-required"
                label="Old Email"
                type="email"
                value={email}
                style={{ marginTop: "10px", width: "100%", minWidth: "270px" }}
              />
              <TextField
                // class="mt-4"
                required
                id="outlined-required"
                label="Old Password"
                type="password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                style={{ marginTop: "10px", width: "100%", minWidth: "270px" }}
              />
              <TextField
                // class="mt-4"
                required
                id="outlined-required"
                label="New User Name"
                type="text"
                value={username}
                onChange={(e) => {
                  setUsername(e.target.value);
                }}
                style={{ marginTop: "10px", width: "100%", minWidth: "270px" }}
              />
              <TextField
                required
                id="outlined-required"
                label="New Email"
                type="email"
                value={newemail}
                onChange={(e) => {
                  setNewemail(e.target.value);
                }}
                style={{ marginTop: "10px", width: "100%", minWidth: "270px" }}
              />

              <TextField
                // class="mt-4"
                required
                id="outlined-required"
                label="New Password"
                type="password"
                value={newpassword}
                onChange={(e) => {
                  setnewpassword(e.target.value);
                }}
                style={{ marginTop: "10px", width: "100%", minWidth: "270px" }}
              />
            </div>
            <div className="editpage-submitbutton-div">
              <Button
                type="submit"
                // class="btn-editpage"
                variant="contained"
                onClick={(e) => {
                  e.preventDefault();
                  axios
                    .post("http://localhost:8000/edituser/", {
                      email: email,
                      newemail: newemail,
                      password: password,
                      newpassword: newpassword,
                      username: username,
                    })
                    .then((a) => {
                      console.log(a);
                      navigate("/");
                    })
                    .catch(() => {
                      alert("Please Enter Your Valid Email and Password");
                    });
                }}
                endIcon={<SaveIcon />}
              >
                Save
              </Button>
              <Button
                color="error"
                // class="btn-editpage"
                type="submit"
                variant="contained"
                endIcon={<CancelIcon />}
                onClick={() => {
                  navigate("/");
                }}
              >
                Cancel
              </Button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default EditProfilePage;
