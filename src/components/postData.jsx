import React, { useState } from "react";
import Navbar from "./navbar";
import TextField from "@mui/material/TextField";
import SaveIcon from "@mui/icons-material/Save";
import Button from "@mui/material/Button";
import Picker from "emoji-picker-react";
import IconButton from "@mui/material/IconButton";
import InsertEmoticonIcon from "@mui/icons-material/InsertEmoticon";
const PostData = () => {
  const [chosenEmoji, setChosenEmoji] = useState(false);
  const [description, setDescription] = useState("");
  const [title, setTitle] = useState("");
  const onEmojiClick = (event, emojiObject) => {
    setDescription((prev) => {
      return description + emojiObject.emoji;
    });
  };

  return (
    <>
      <Navbar />
      <div className=" mainpostdatabody">
        <div className="send-data-form">
          <form action="">
            <div className="container">
              <div className="title-area">
                <TextField
                  required
                  id="outlined-required"
                  label="Title"
                  value={title}
                  onChange={(e) => {
                    setTitle(e.target.value);
                  }}
                  // defaultValue="Hello World"
                />{" "}
                <TextField
                  required
                  id="outlined-required"
                  label="User Name"
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
                minRows={11}
                // defaultValue="Default Value"
                variant="filled"
                style={{ width: "100%", marginBottom: "10px" }}
              />

              <div className="submitpostbutton" style={{ textAlign: "right" }}>
                <IconButton aria-label="delete" size="small">
                  <InsertEmoticonIcon
                    fontSize="small"
                    onClick={() => {
                      setChosenEmoji((prev) => !prev);
                    }}
                  />
                </IconButton>
                <Button
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
              pickerStyle={{ boxShadow: "none" }}
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
