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
	const [username, setUsername] = useState("");
	var navigate = useNavigate();
	const [password, setPassword] = useState("");
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
								label="Email"
								type="email"
								value={email}
								style={{ marginTop: "10px", width: "100%", minWidth: "270px" }}
							/>
							<TextField
								// class="mt-4"
								required
								id="outlined-required"
								label="New User Name"
								type="text"
								value={username}
								style={{ marginTop: "10px", width: "100%", minWidth: "270px" }}
							/>

							<TextField
								// class="mt-4"
								required
								id="outlined-required"
								label="Old Password"
								type="password"
								style={{ marginTop: "10px", width: "100%", minWidth: "270px" }}
							/>

							<TextField
								// class="mt-4"
								required
								id="outlined-required"
								label="New Password"
								type="password"
								style={{ marginTop: "10px", width: "100%", minWidth: "270px" }}
							/>
						</div>
						<div className="editpage-submitbutton-div">
							<Button
								type="submit"
								// class="btn-editpage"
								variant="contained"
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
