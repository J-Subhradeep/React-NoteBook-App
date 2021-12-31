import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import Navbar from "./navbar";
import Typed from "react-typed";
const Profile = () => {
	const [user, setUser] = useState();
	useEffect(() => {
		let token = localStorage.getItem("token");
		axios.post("http://127.0.0.1:8000/verif/", { token: token }).then((a) => {
			setUser(a.data);
		});
	}, []);
	return (
		<>
			<Navbar />
			<div className="body-profile container">
				<div className="div-profile-page-logo text-center">
					<figure class="text-center">
						<blockquote class="blockquote">
							<h1>DR.NoteBook</h1>
						</blockquote>
						<figcaption class="blockquote-footer">
							A place to store{" "}
							<cite title="Source Title">
								Notes,Passwords and other privacy
							</cite>
						</figcaption>
					</figure>
				</div>
				<div className="div-profile-page-logo text-center">
					<i className="fas fa-book-reader login-logo-g" />
				</div>

				<div className="profile-image-div">
					{" "}
					<Typed
						strings={[
							"Write and Be Stress free",
							"Write and Easily Remember",
							"Write and Store Securely",
						]}
						typeSpeed={50}
						backSpeed={60}
						loop
						style={{ border: "none" }}
					>
						<input type="text" className="typedtext" />
					</Typed>
				</div>
			</div>
		</>
	);
};

export default Profile;
