import React from "react";
import Container from "@mui/material/Container";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import SearchIcon from "@mui/icons-material/Search";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ReadMoreIcon from "@mui/icons-material/ReadMore";

import Post from "./post";
function Home() {
	const [anchorEl, setAnchorEl] = React.useState(null);
	const open = Boolean(anchorEl);
	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};
	const handleClose = () => {
		setAnchorEl(null);
	};
	const top100Films = [
		{ title: "The Shawshank Redemption", year: 1994 },
		{ title: "The Godfather", year: 1972 },
		{ title: "The Godfather: Part II", year: 1974 },
		{ title: "The Dark Knight", year: 2008 },
		{ title: "12 Angry Men", year: 1957 },
		{ title: "Schindler's List", year: 1993 },
		{ title: "The Godfather: Part II", year: 1974 },
		{ title: "The Dark Knight", year: 2008 },
		{ title: "12 Angry Men", year: 1957 },
		{ title: "Schindler's List", year: 1993 },
	];

	return (
		<>
			<Container
				maxWidth="100vw"
				minWidth="300px"
				style={{
					position: "absolute",
					top: "60px",
					paddingLeft: "35px",
					paddingRight: "35px",
					overflow: "hidden",
				}}
			>
				<header>
					<div className="homeheaderdiv">
						<div></div>
						<div
							className="background"
							className="inp-search"
							style={{ backgroundColor: "white" }}
						>
							<Autocomplete
								freeSolo
								id="free-solo-2-demo"
								disableClearable
								options={top100Films.map((option) => option.title)}
								renderInput={(params) => (
									<TextField
										className="inp"
										{...params}
										label="Search by title"
										InputProps={{
											...params.InputProps,
											type: "search",
										}}
										id="searchfield"
									/>
								)}
							/>
						</div>
						<div className="header-end">
							<Button
								variant="outlined"
								className="inp"
								style={{ height: "100%" }}
							>
								<SearchIcon />
							</Button>
							<div style={{ justifyContent: "center" }} className="inp-yy">
								<Button
									id="basic-button"
									aria-controls="basic-menu"
									aria-haspopup="true"
									aria-expanded={open ? "true" : undefined}
									onClick={handleClick}
									style={{ height: "100%" }}
								>
									<ReadMoreIcon fontSize="large" />
								</Button>
								<Menu
									id="basic-menu"
									anchorEl={anchorEl}
									open={open}
									onClose={handleClose}
									MenuListProps={{
										"aria-labelledby": "basic-button",
									}}
								>
									<MenuItem onClick={handleClose}>Profile</MenuItem>
									<MenuItem onClick={handleClose}>Logout</MenuItem>
								</Menu>
							</div>
						</div>
					</div>
				</header>
				<main>
					<div className="container">
						<Post />
						<Post />
						<Post />
					</div>
				</main>
			</Container>
		</>
	);
}

export default Home;
