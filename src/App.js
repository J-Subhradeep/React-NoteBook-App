import "./App.css";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
// import { Redirect } from "react-router";
// import {Switch} from 'react-router'
import Home from "./components/home";

import Login from "./components/login";
import SignUp from "./components/signup";
import { useState, useEffect } from "react";

function App() {
	// const SignInWrap = () => {
	// 	let isLoggedIn = false;

	// 	const [id, setState] = useState(localStorage.getItem("user_id"));
	// 	if (id) {
	// 		isLoggedIn = true;
	// 	}
	// 	if (isLoggedIn) {
	// 		return <Home />;
	// 	} else {
	// 		return <SignUp />;
	// 	}
	// };
	// const LogInWrap = () => {
	// 	let isLoggedIn = false;

	// 	const [id, setState] = useState(localStorage.getItem("user_id"));
	// 	if (id) {
	// 		isLoggedIn = true;
	// 	}
	// 	if (isLoggedIn) {
	// 		return <Home />;
	// 	} else {
	// 		return <Navigate to="/login" />;
	// 	}
	// };
	// var isLoggedIn = false;
	const [state, setstate] = useState(false);
	useEffect(() => {
		if (localStorage.getItem("user_id")) {
			setstate(true);
		} else {
			setstate(false);
		}
	}, []);

	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route exact path="/" element={<Home />} />
					<Route exact path="/signup" element={<SignUp />} />
					{/* <Route exact path="/lg" element={} /> */}
					<Route exact path="/login" element={<Login />} />

					{/* <Post/> */}
					{/* </Route> */}
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
