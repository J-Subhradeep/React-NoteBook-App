import React from "react";
// import Navbar from './navbar'
import Button from "@mui/material/Button";
import ModeEditOutlineIcon from "@mui/icons-material/ModeEditOutline";
import DeleteIcon from "@mui/icons-material/Delete";
function Post(props) {
	const newtxt = props.data.description;
	console.log(props.data);
	function getDateTime(data) {
		var date = new Date(data);
		return date.toLocaleString();
	}
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
						<span
							style={{
								fontSize: "30px",
								fontStyle: "italic",
								paddingBottom: "10px",
							}}
						>
							{props.data.title}
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
						<span className="time">{getDateTime(props.data.time)}</span>
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
