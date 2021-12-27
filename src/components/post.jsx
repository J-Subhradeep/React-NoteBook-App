import React from "react";
// import Navbar from './navbar'
import Button from "@mui/material/Button";
import SearchIcon from "@mui/icons-material/Search";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ReadMoreIcon from "@mui/icons-material/ReadMore";
import ModeEditOutlineIcon from "@mui/icons-material/ModeEditOutline";
import DeleteIcon from "@mui/icons-material/Delete";
function Post() {
	console.log("hallow");
	const newtxt = `Lore 
m ipsum dolor sit amet consectetur adipisicing elit.
Totam voluptates aut eveniet atque, odit ipsum repudiandae blanditiis aperiam tempora provident harum et exercitationemtemporibus excepturi nihil eius! Consectetur
accusantiummolestias debitis magni laborum nesciunt ut
incidunt voluptate corporis, eum quas aspernatur fugiat qui
explicabo earum ad perferendis assumenda vel. Amet.`;
	return (
		<>
			{/* <Navbar/> */}
			<div
				className="postbody"
				style={{
					contain: "content",
					padding: "10px",
					paddingBottom: "0",
				}}
			>
				<div className="titlebody" style={{ borderBottom: "1px solid white" }}>
					<div className="title">
						<span style={{ fontSize: "30px", fontStyle: "italic" }}>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. A, omnis.
						</span>
					</div>

					<div className="btn" style={{ textAlign: "right" }}>
						<Button
							variant="text"
							style={{
								right: "",
								position: "relative",
								color: "white",
								zIndex: "1000",
								borderColor: "white",
							}}
						>
							<ModeEditOutlineIcon color="" />
						</Button>
						<Button
							variant="text"
							style={{
								right: "0",
								position: "relative",
								color: "white",
								zIndex: "1000",
								borderColor: "white",
							}}
						>
							<DeleteIcon />
						</Button>
					</div>
					<div className="time">
						<span className="time">Time : 12:12:00 AM</span>
					</div>
				</div>

				<div
					className="description-body"
					style={{
						padding: "10px",
						paddingBottom: "0",
					}}
				>
					<pre
						style={{ paddingBottom: "10px", overflowX: "scroll" }}
						className="description-content"
					>
						{newtxt}
					</pre>
				</div>
			</div>
		</>
	);
}

export default Post;
