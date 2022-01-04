import React, { useState, useEffect } from "react";
import Navbar from "./navbar";
import TextField from "@mui/material/TextField";
import SaveIcon from "@mui/icons-material/Save";
import Button from "@mui/material/Button";
import Picker from "emoji-picker-react";
import IconButton from "@mui/material/IconButton";
import InsertEmoticonIcon from "@mui/icons-material/InsertEmoticon";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const PostData = () => {
	const [chosenEmoji, setChosenEmoji] = useState(false);
	const [item, setItem] = useState();
	const [description, setDescription] = useState("");
	const [title, setTitle] = useState("");
	const [username, setUsername] = useState("");
	const [cursorPos, setCursorPos] = useState({ start: 0, end: 0 });
	var navigate = useNavigate();
	useEffect(() => {
		if (!localStorage.getItem("user_id")) {
			navigate("/login");
		}
	}, []);
	const onEmojiClick = (event, emojiObject) => {
		var now = document.activeElement;
		console.log(now);
		console.log(event);
		if (item === "title") {
			// setTitle((prev) => prev + emojiObject.emoji);
			let prevCur = title.slice(0, cursorPos.start);
			let afterCur = title.slice(cursorPos.end);
			setTitle(prevCur + emojiObject.emoji + afterCur);
			console.log(prevCur, afterCur);
		}
		if (item === "description") {
			let prevCur = description.slice(0, cursorPos.start);
			let afterCur = description.slice(cursorPos.end);
			setDescription(prevCur + emojiObject.emoji + afterCur);
		}
	};

	return (
		<>
			<Navbar />
			<div className=" mainpostdatabody">
				<div className="send-data-form">
					<form
						action=""
						onSubmit={(e) => {
							e.preventDefault();
							axios
								.post("http://127.0.0.1:8000/postnotes/", {
									title: title,
									description: description,
									token: localStorage.getItem("token"),
									written_by: username,
								})
								.then((a) => {
									navigate("/");
								});
						}}
					>
						<div className="container p-3">
							<div className="title-area">
								<TextField
									required
									id="outlined-required"
									label="Title"
									value={title}
									onFocus={() => {
										setItem("title");
									}}
									onClick={(e) => {
										// console.log(e.selectionStart);
										// let titlearea = document.getElementById("outline-required");
										// console.log(e.target.selectionStart, e.target.selectionEnd);
										setCursorPos((prev) => {
											return {
												...prev,
												start: e.target.selectionStart,
												end: e.target.selectionEnd,
											};
										});
									}}
									onChange={(e) => {
										setTitle(e.target.value);
									}}
									defaultValue=" "
								/>{" "}
								<TextField
									required
									id="outlined-required"
									label="User Name"
									value={username}
									onChange={(e) => {
										setUsername(e.target.value);
									}}
									defaultValue="Hello World"
								/>
							</div>

							<TextField
								id="filled-multiline-static"
								label="Description"
								multiline
								value={description}
								onChange={(e) => {
									setDescription(e.target.value);
								}}
								onFocus={() => {
									setItem("description");
								}}
								onClick={(e) => {
									// console.log(e.selectionStart);
									// let titlearea = document.getElementById("outline-required");
									// console.log(e.target.selectionStart, e.target.selectionEnd);
									setCursorPos((prev) => {
										return {
											...prev,
											start: e.target.selectionStart,
											end: e.target.selectionEnd,
										};
									});
								}}
								minRows={11}
								// defaultValue="Default Value"
								variant="filled"
								style={{ width: "100%", marginBottom: "10px" }}
							/>

							<div
								className="submitpostbutton"
								style={{
									textAlign: "right",
									display: "flex",
									alignItems: "center",
									justifyContent: "flex-end",
								}}
							>
								<div className="emojiInsert">
									<IconButton aria-label="delete" size="small">
										<InsertEmoticonIcon
											fontSize="small"
											onClick={() => {
												setChosenEmoji((prev) => !prev);
												setItem("description");
											}}
										/>
									</IconButton>
								</div>

								<Button
									type="submit"
									variant="contained"
									endIcon={<SaveIcon />}
									style={{ position: "relative", right: "0" }}
								>
									Save
								</Button>
							</div>
						</div>
					</form>
				</div>

				{chosenEmoji ? (
					<div
						className="emojiselector"
						style={{
							position: "absolute",
							border: "none",
							borderRadius: "5px",
							padding: "5px",
							backgroundColor: "#1976d2",
						}}
					>
						<Picker
							onEmojiClick={onEmojiClick}
							pickerStyle={{ boxShadow: "none", backgroundColor: "white" }}
						/>
					</div>
				) : (
					<></>
				)}
			</div>
		</>
	);
};

export default PostData;
