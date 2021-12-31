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
      <div className="body-profile container" style={{ minHeight: "100vh" }}>
        <div className="profile-image-div">
          {" "}
          <Typed
            strings={[
              "Search for products",
              "Search for categories",
              "Search for brands",
            ]}
            typeSpeed={40}
            backSpeed={50}
            loop
            style={{ border: "none" }}
          >
            <input type="text" className="typedtext" />
          </Typed>
        </div>
        <div className="profile-details-div"></div>
      </div>
    </>
  );
};

export default Profile;
