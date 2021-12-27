import React from "react";
import { NavLink } from "react-router-dom";
import Button from "@mui/material/Button";
import FormatAlignJustifyIcon from "@mui/icons-material/FormatAlignJustify";
import ToggleButton from "@mui/material/ToggleButton";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ButtonGroup from "@mui/material/ButtonGroup";
function navbar() {
	window.onresize = () => {
		let sidebar = document.getElementById("side-nav");
		console.log(window.innerWidth);
		if (window.innerWidth > 800) {
			sidebar.className = "side-nav";
		}
	};
	const togglesidebar = () => {
		let sidebar = document.getElementById("side-nav");

		if (sidebar.className == "side-nav-visible") {
			sidebar.className = "side-nav";
		} else {
			sidebar.className = "side-nav-visible";
		}
		// console.log(sidebar.style.width);
		// if (sidebar.style.width == 0) {
		// 	sidebar.style.width = "300px";
		// } else {
		// 	sidebar.style.width = "0";
		// }
	};
	return (
		<nav style={{ overflow: "hidden" }}>
			<div className="main-nav">
				<div className="logo-center">
					<div className="logo">
						<i className="fas fa-book-reader"></i>
						<span className="icon-name">DR.NoteBook</span>
					</div>
				</div>
				<div className="menu-container">
					<div className="menu">
						<ButtonGroup variant="text" aria-label="text button group">
							<Button>
								<NavLink to="/" style={{ textDecoration: "none" }}>
									HOME
								</NavLink>
							</Button>

							<Button>
								<NavLink to="/post" style={{ textDecoration: "none" }}>
									POST
								</NavLink>
							</Button>

							<Button>
								<NavLink to="/profile" style={{ textDecoration: "none" }}>
									PROFILE
								</NavLink>
							</Button>

							<Button>
								<NavLink to="/contact" style={{ textDecoration: "none" }}>
									CONTACT US
								</NavLink>
							</Button>
						</ButtonGroup>

						{/* <ul className="list-group list-group-horizontal">
							<NavLink to="/" style={{ textDecoration: "none" }}>
								<li className="list-group-item" style={{ height: "100%" }}>
									<Button variant="text">HOME</Button>
								</li>
							</NavLink>
							<NavLink to="/post" style={{ textDecoration: "none" }}>
								<li className="list-group-item">
									<Button variant="text">POST</Button>
								</li>
							</NavLink>
							<NavLink to="/profile" style={{ textDecoration: "none" }}>
								<li className="list-group-item">
									<Button variant="text">PROFILE</Button>
								</li>
							</NavLink>
							<NavLink to="/contact" style={{ textDecoration: "none" }}>
								<li className="list-group-item">
									<Button variant="text">CONTACT</Button>
								</li>
							</NavLink>
						</ul> */}
					</div>
					<div className="profile">
						<ul className="list-group list-group-horizontal">
							<li className="list-group-item border-0">
								<Button variant="contained">
									<NavLink
										to="/login"
										style={{ textDecoration: "none", color: "white" }}
									>
										Log In
									</NavLink>
								</Button>
							</li>

							<li className="list-group-item border-0">
								<Button variant="contained">
									<NavLink
										to="/signup"
										style={{ textDecoration: "none", color: "white" }}
									>
										Sign Up
									</NavLink>
								</Button>
							</li>
						</ul>
					</div>
				</div>
				<div className="menubar">
					<ToggleButton
						className="menubtn"
						value="center"
						key="center"
						onClick={togglesidebar}
					>
						<FormatAlignJustifyIcon />
					</ToggleButton>
					{/* <button className="menubtn" >
            <i className="fas fa-bars"></i>
          </button> */}
				</div>
			</div>
			<div className="side-nav" id="side-nav">
				<div>
					<Button variant="text" color="primary" style={{ float: "right" }}>
						<ArrowBackIosNewIcon onClick={togglesidebar} />
					</Button>
				</div>
				<div className="profile-side p-3">
					<Button variant="contained">
						<NavLink
							to="/login"
							style={{ textDecoration: "none", color: "white" }}
						>
							Log In
						</NavLink>
					</Button>
					<Button variant="contained">
						<NavLink
							to="/signup"
							style={{ textDecoration: "none", color: "white" }}
						>
							Sing Up
						</NavLink>
					</Button>
				</div>
				<div className="menu-side">
					<div className="list-group">
						<button
							type="button"
							className="list-group-item list-group-item-action"
							//   aria-current="true"
						>
							<i className="fas fa-home"></i>Home
						</button>
						<button
							type="button"
							className="list-group-item list-group-item-action"
						>
							<i className="fas fa-cloud-upload-alt"></i>
							Post
						</button>

						<button
							type="button"
							className="list-group-item list-group-item-action"
						>
							<i className="fas fa-user-circle"></i>
							Profile
						</button>

						<button
							type="button"
							className="list-group-item list-group-item-action"
						>
							<i className="fas fa-address-book"></i>
							Contact
						</button>
					</div>
				</div>
			</div>
		</nav>
	);
}

export default navbar;
