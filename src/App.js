import "./App.css";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
// import { Redirect } from "react-router";
// import {Switch} from 'react-router'
import Home from "./components/home";
import Post from "./components/post";
import Login from "./components/login";
import SignUp from "./components/signup";
import Navbar from "./components/navbar";
function App() {
	const SignInWrap = () => {
		let isLoggedIn = false;
		if (isLoggedIn) {
			return <Navigate to="/" replace />;
		} else {
			return <Navigate to="/login" replace />;
		}
	};
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route exact path="/login" element={<Login />} />
					<Route exact path="/signup" element={<SignUp />} />
					<Route exact path="/" element={<Home />} />

					<Route path="/:fas" element={<SignInWrap />} />
					{/* <Post/> */}
					{/* </Route> */}
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
