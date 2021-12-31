import React, { useState } from "react";
// import Navbar from './navbar'
import Button from "@mui/material/Button";
import ModeEditOutlineIcon from "@mui/icons-material/ModeEditOutline";
import DeleteIcon from "@mui/icons-material/Delete";
import axios from "axios";
import { useNavigate } from "react-router-dom";
function Post(props) {
  const newtxt = props.data.description;
  const navigate = useNavigate();
  // const normtxt = newtxt.slice(0, 15);
  // const inithidden = newtxt.slice(15, -1);
  // console.log(normtxt);
  // console.log(inithidden);
  const [dots, setDots] = useState("...");
  const [more, setMore] = useState(false);
  const [showmore, setShowmore] = useState("Show More");

  function getDateTime(data) {
    var date = new Date(data);
    return date.toLocaleString();
  }
  function deletenote() {
    return props.notesData(props.data.id);
  }

  return (
    <>
      {/* <Navbar/> */}
      <div
        className="postbody row"
        style={{
          contain: "content",
          padding: "10px",
          paddingBottom: "0",
          marginTop: "5px",
        }}
      >
        <div className="titlebody" style={{ borderBottom: "1px solid white" }}>
          <div className="title">
            <span
              className="titletext"
              style={{
                fontSize: "30px",
                fontStyle: "bold",
              }}
            >
              {props.data.title.length > 15 ? (
                <>
                  <span
                    className="maintitletext"
                    style={{
                      textDecoration: "underline",
                      textUnderlineOffset: ".5rem",
                    }}
                  >
                    {props.data.title.slice(0, 15)}
                  </span>

                  <span id="dots">{dots}</span>

                  {more ? (
                    <span
                      id="more"
                      style={{
                        textDecoration: "underline",
                        textUnderlineOffset: ".5rem",
                        display: "inline",
                      }}
                    >
                      {props.data.title.slice(15) + "   "}
                    </span>
                  ) : (
                    <></>
                  )}
                  <a
                    id="myBtn"
                    onClick={() => {
                      setDots((prev) => {
                        if (prev === "...") {
                          return "";
                        } else {
                          return "...";
                        }
                      });
                      setMore((prev) => !prev);
                      setShowmore((prev) => {
                        if (prev === "Show More") {
                          return "Show Less";
                        } else {
                          return "Show More";
                        }
                      });
                    }}
                    style={{
                      fontSize: "15px",
                      textDecoration: "none",
                      color: "white",
                      cursor: "pointer",
                      textShadow: "white 2px 2px 4px",
                    }}
                  >
                    <span className="showmorelink">{showmore}</span>
                  </a>
                </>
              ) : (
                <span className="maintitletext">{props.data.title}</span>
              )}
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
              onClick={deletenote}
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
