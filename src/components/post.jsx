import React from "react";
// import Navbar from './navbar'
import Button from "@mui/material/Button";
import ModeEditOutlineIcon from "@mui/icons-material/ModeEditOutline";
import DeleteIcon from "@mui/icons-material/Delete";
function Post(props) {
  const newtxt = props.data.description;
  const normtxt = newtxt.slice(0, 15);
  const inithidden = newtxt.slice(15, -1);
  console.log(normtxt);
  console.log(inithidden);
  console.log(props.data);
  function getDateTime(data) {
    var date = new Date(data);
    return date.toLocaleString();
  }
  function myFunction() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");

    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read more";
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read less";
      moreText.style.display = "inline";
    }
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
              className="titletext"
              style={{
                fontSize: "30px",
                fontStyle: "bold",
                textDecoration: "underline",
                paddingBottom: "10px",
                textUnderlineOffset: ".5rem",
              }}
            >
              {props.data.title}
            </span>
          </div>

          <div className="btn" style={{ textAlign: "right" }}>
            <Button
              variant="text"
              style={{
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
            <span className="time titletext">
              {getDateTime(props.data.time)}
            </span>
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
            className="description-content titletext"
          >
            {newtxt}
          </pre>
        </div>
      </div>
    </>
  );
}

export default Post;
