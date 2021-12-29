import React,{useEffect,useState} from "react";
import { NavLink } from "react-router-dom";
import Button from "@mui/material/Button";
import FormatAlignJustifyIcon from "@mui/icons-material/FormatAlignJustify";
import ToggleButton from "@mui/material/ToggleButton";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ButtonGroup from "@mui/material/ButtonGroup";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import axios from "axios";

function Navbar(props) {
	const [userData, setUserData] = useState({})
	const [username, setusername] = useState('o')
	useEffect(() => {
		
		axios.post(`http://127.0.0.1:8000/user/`,{id:localStorage.getItem('user_id')}).then(res=>{
		console.log(res.data);	
		setUserData(res.data);
		setusername(res.data.username.charAt(0).toUpperCase());
	})
	
	}, [])
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

	const [anchorEl, setAnchorEl] = React.useState(null);
	const open = Boolean(anchorEl);
	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};
	const handleClose = () => {
		console.log("hallow");
		setAnchorEl(null);
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
					</div>
					<div className="profile">
						<Tooltip title="Account Setting">
							<IconButton
								id="basic-button"
								aria-controls={open ? "basic-menu" : undefined}
								aria-haspopup="true"
								aria-expanded={open ? "true" : undefined}
								onClick={handleClick}
							>
								<Avatar>{username}</Avatar>
							</IconButton>
						</Tooltip>
						<Menu
							id="basic-menu"
							anchorEl={anchorEl}
							open={open}
							onClose={handleClose}
							MenuListProps={{
								"aria-labelledby": "basic-button",
							}}
						>
							<MenuItem onClick={handleClose}>Edit Profile</MenuItem>

							<MenuItem onClick={()=>{localStorage.clear();window.location.reload()}}>Logout</MenuItem>
						</Menu>
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
					<i className="fas fa-book-reader login-logo-g" />
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

export default Navbar;
