import React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { NavLink } from "react-router-dom";
function SignUp() {
	return (
		<div style={{ marginTop: "60px" }}>
			
			<div className="maindivforlogin container">

				<div className="formdiv-for-signup" style={{ padding: "20px",position:"relative" }}>
				<i className="fas fa-book-reader login-logo-g"/>
					<TextField
						id="outlined-password-input"
						label="Email"
						type="email"
						autoComplete="current-password"
						style={{ width: "100%", marginBottom: "10px", marginTop: "10px" }}
					/>
				
					<TextField
						id="outlined-password-input"
						label="Username"
						type="text"
						autoComplete="current-password"
						style={{ width: "100%", marginBottom: "10px" }}
					/>

					<TextField
						id="outlined-password-input"
						label="Password"
						type="password"
						autoComplete="current-password"
						style={{ width: "100%", marginBottom: "10px"  }}
					/>
					<TextField
						id="outlined-password-input"
						label="Confirm Password"
						type="password"
						autoComplete="current-password"
						style={{ width: "100%" }}
					/>
					<Button
						variant="contained"
						color="primary"
						style={{ marginTop: "10px", width: "100%" }}
					>
						Sign Up
					</Button>
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
