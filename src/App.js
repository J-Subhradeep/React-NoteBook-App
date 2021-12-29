import "./App.css";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
// import { Redirect } from "react-router";
// import {Switch} from 'react-router'
import Home from "./components/home";

import Login from "./components/login";
import SignUp from "./components/signup";
import { useState } from "react";

function App() {
	const SignInWrap = () => {
		let isLoggedIn = false;
		
		const [id, setState] = useState(localStorage.getItem('user_id'))
		if (id){
			isLoggedIn = true
		} 
		if (isLoggedIn) {
			return <Home />;
		} else {
			return <Login/>;
		}
	};
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route exact path="/login" element={<SignInWrap />} />
					<Route exact path="/signup" element={<SignUp />} />
					<Route exact path="/" element={<SignInWrap />} />

					<Route exact path="/home" element={<SignInWrap />} />
					{/* <Post/> */}
					{/* </Route> */}
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
