import React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { NavLink } from "react-router-dom";
function Login() {
	return (
		<div style={{ marginTop: "60px" }}>
			<div className="background-image-blur"></div>
			<div className="maindivforlogin">
				<div className="image-div-for-login">
					<h1 className="application-name-login-page">
						<i className="fas fa-book-reader px-3"></i>DR.NoteBook
					</h1>
					<i class="fas fa-feather" id="login-page-image"></i>
				</div>
				<div className="formdiv-for-login" style={{ padding: "20px" }}>
					<TextField
						id="outlined-password-input"
						label="Email"
						type="email"
						autoComplete="current-password"
						style={{ width: "100%", marginBottom: "10px" }}
					/>

					<TextField
						id="outlined-password-input"
						label="Password"
						type="password"
						autoComplete="current-password"
						style={{ width: "100%" }}
					/>
					<Button
						variant="contained"
						color="primary"
						style={{ marginTop: "10px", width: "100%" }}
					>
						Log In
					</Button>
					<NavLink to="signup">
						<h4 style={{ fontSize: "12px", marginTop: "15px" }}>
							Register For a New Account
						</h4>
					</NavLink>
				</div>
			</div>
		</div>
	);
}

export default Login;
